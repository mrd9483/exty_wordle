const Game = {
    init: function () {
        Game.dict = JSON.parse(atob(dict));
        Game.sol = JSON.parse(atob(sol));
        Game.solution = btoa(_.sample(Game.sol["5"]));
        Game.numGuess = 0;

        let startClick = null;
        let hold = false;
        $(document)
            .on("mousedown", ".letter", (ele) => {
                hold = false;
                startClick = setTimeout(() => {
                    hold = true;
                    ele = ele.currentTarget;
                    $(ele).removeClass("text-bg-default").removeClass("green_tick").removeClass("dark_gray_tick").removeClass("yellow_tick");

                    let state = $(ele).attr("data-state");
                    switch (state) {
                        case "none":
                            $(ele).attr("data-state", "yellow");
                            $(ele).addClass("yellow_tick");
                            break;
                        case "yellow":
                            $(ele).attr("data-state", "green");
                            $(ele).addClass("green_tick");
                            break;
                        case "green":
                            $(ele).attr("data-state", "no");
                            $(ele).addClass("dark_gray_tick");
                            break;
                        case "no":
                            $(ele).attr("data-state", "none");
                            $(ele).addClass("text-bg-default");
                            break;
                        default:
                            $(ele).attr("data-state", "none");
                            $(ele).addClass("text-bg-default");
                            break;
                    }
                }, 350);
            })
            .on("mouseup", ".letter", (ele) => {
                if (!hold) {
                    $("#input").val($("#input").val() + $(ele.target).text());
                    clearTimeout(startClick);
                }
                hold = false;
            });
    },
    validateGuess: (guessValue) => {
        guessValue = guessValue.toLowerCase();
        if (_.findIndex(Game.dict["5"], (s) => guessValue == s) == -1 && _.findIndex(Game.sol["5"], (s) => guessValue == s) == -1) {
            return { error: true, message: "Not in dictionary" };
        }

        return { error: false, message: "" };
    },
    guess: function (guessValue, solution) {
        let guessValueArray = guessValue.split("");
        let progress = { correctPos: 0, incorrectPos: 0 };
        let lettersGuessed = {};

        //assumes guess is same length as solution
        for (let i = 0; i < guessValueArray.length; i++) {
            let startingIndex = 0;
            if (typeof lettersGuessed[guessValueArray[i]] !== undefined) {
                startingIndex = lettersGuessed[guessValueArray[i]] + 1;
            }

            var index = solution.indexOf(guessValueArray[i], startingIndex);
            if (index > -1) {
                lettersGuessed[guessValueArray[i]] = index;
                if (index == i) {
                    progress.correctPos++;
                } else {
                    progress.incorrectPos++;
                }
            }
        }

        Game.numGuess++;

        return progress;
    },
    updateDisplay: function (guess) {
        p = Game.guess(guess.toLowerCase(), atob(Game.solution).toLowerCase());
        let div = $(`<div class="row guess" style="display:none;">
          <div class="col-2 display-6">${Game.numGuess}.</div>
          <div class="col-7 d-flex">
            <div class="letter" data-state="none">${guess[0]}</div>
            <div class="letter" data-state="none">${guess[1]}</div>
            <div class="letter" data-state="none">${guess[2]}</div>
            <div class="letter" data-state="none">${guess[3]}</div>
            <div class="letter" data-state="none">${guess[4]}</div>
          </div>
          <div class="col-3 d-flex justify-content-end">
            <div class="letter text-bg-success">${p.correctPos}</div>
            <div class="letter text-bg-warning">${p.incorrectPos}</div>
          </div>
        </div>`);

        div.prependTo("#guesses").slideDown();
        $("#input").val("").focus();

        if (p.correctPos === 5) {
            alert("You win!");
        }

        if (Game.numGuess % 10 === 0) {
            var showSolution = confirm("Do you want to see the solution?");
            if (showSolution) {
                alert(atob(Game.solution));
            }
        }
    },
};

Game.init();

$(function () {
    $("#input").val("").focus();
    $("#input").keydown((event) => {
        if (event.which === 13) {
            $("#guess").click();
        }
    });
    $("#guess").click(() => {
        valid = Game.validateGuess($("#input").val());
        if (valid.error) {
            alert(valid.message);
        } else {
            Game.updateDisplay($("#input").val());
        }

        $("#start").hide();
    });

    feather.replace();

    const difficulty = new bootstrap.Modal("#difficultyModal");
    difficulty.show();

    $("#easybtn").click(() => {
        let sln = atob(Game.solution),
            letter = Math.floor(Math.random() * 5),
            guessArr = "     ".split("");
        guessArr[letter] = sln[letter];
        let guess = guessArr.join("");

        Game.updateDisplay(guess);
    });
});
