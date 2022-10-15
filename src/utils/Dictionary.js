import _ from "lodash";

export default function Dictionary(allowedWords, solutions) {
    function checkIfAllowedWord(word) {
        word = word.toLowerCase();
        return _.findIndex(allowedWords, (s) => word === s) > -1 || _.findIndex(solutions, (s) => word === s) > -1;
    }

    function getRandomWord() {
        return _.sample(solutions);
    }

    return Object.freeze({
        checkIfAllowedWord,
        getRandomWord,
    });
}
