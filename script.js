let boxes = document.querySelectorAll(".game>div div button");
let wingame_Container = document.querySelector(".win-game");
let msg = document.querySelector("#msg");
let $newGame = document.querySelector(".win-Game > button");
let turnX = true;
let Count = 0;

let winPatterns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8]
];

const winGame = (Winner) => {
    msg.innerText = `Hurray! Winner is ${Winner}`;
    wingame_Container.classList.remove("hide");
    gameFinish();
}

const drawGame = (winner) => {                      
    msg.innerText = `OOPS! The Game is Draw`;
    wingame_Container.classList.remove("hide");
    gameFinish();
}

const gameFinish = () => {                          
    for (let box of boxes) {
        box.disabled = true;
    }
}

const newGame = () => {                            
    Count = 0;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        wingame_Container.classList.add("hide");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            box.style.color = "white";
            turnX = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "black";
            turnX = "X";
        }
        box.disabled = true;
        checkWinner();
        Count++;
        let isWinner = checkWinner();
        if (Count === '9' && !isWinner) {
            drawGame();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winGame(pos1);
            }
        }
    }
};