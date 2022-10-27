import _ from "lodash";

class Guesser {
    constructor(startingWord, ...dicts) {
        this.startingWord = startingWord;
        this.dictionary = _.concat(dicts);

        this.information = {};
        this.guessHistory = [];
        this.alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
        this.wordInfo = [];

        //create alpha information
        _.forEach(this.alphabetArr, (letter) => {
            this.information[`${letter}`] = {
                correct: false,
                correctPos: -1,
                incorrect: false,
                unsure: true,
                notInSolution: false,
                count: 0,
            };
        });

        //get letter count for smarter guessing
        _.forEach(this.dictionary, (word) => {
            _.forEach(word.split(""), (letter) => {
                this.information[letter].count++;
            });
        });

        //weight words
        _.forEach(this.dictionary, (word) => {
            let wordInfoObj = { word: word, weight: 0 };
            _.forEach(word.split(""), (letter) => {
                wordInfoObj.weight += this.information[letter].count;
            });

            this.wordInfo.push(wordInfoObj);
        });
    }

    nextGuess() {

    }

}
