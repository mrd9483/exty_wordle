export default function GameLogic(solution) {
    function guess(guessValue) {
        let guessValueArray = guessValue.split("");
        let progress = { word: guessValue, correct: 0, exists: 0 };
        let lettersGuessed = {};

        //assumes guess is same length as solution
        for (let i = 0; i < guessValueArray.length; i++) {
            let startingIndex = 0;
            if (typeof lettersGuessed[guessValueArray[i]] !== "undefined") {
                startingIndex = lettersGuessed[guessValueArray[i]] + 1;
            }

            var index = solution.indexOf(guessValueArray[i], startingIndex);
            if (index > -1) {
                lettersGuessed[guessValueArray[i]] = index;
                index === i ? progress.correct++ : progress.exists++;
            }
        }

        return progress;
    }

    return Object.freeze({ guess });
}
