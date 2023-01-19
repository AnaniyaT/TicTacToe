let playing = true
let playerX = true

let board = {"1": "", "2": "", "3": "",

             "4": "", "5": "", "6": "",

             "7": "", "8": "", "9": ""
}
let played = 0

function draw_O(cellNum){
    let selector = "#cell" + cellNum +" :nth-child(1)";
    console.log(selector);
    let o = document.querySelector(selector);
    o.className = "boardCell__letter_O"
}
function draw_X(cellNum){
    let selector1 = "#cell" + cellNum +" :nth-child(1)";
    let selector2 = "#cell" + cellNum +" :nth-child(2)";
    let x1 = document.querySelector(selector1);
    let x2 = document.querySelector(selector2);
    x1.className = "boardCell__letter_X1";
    x2.className = "boardCell__letter_X2";
}


function showTurn(){
    let Xindicator = document.getElementById("x-indicator");
    let Oindicator = document.getElementById("o-indicator");
    if (playerX){
        Oindicator.className = "shrink";
        Xindicator.className = "grow";
    }else{
        Oindicator.className = "grow";
        Xindicator.className = "shrink";
    }
}

function win(winner){
    winnerCard = document.getElementById("winner-page");
    winnerP = document.getElementById("winner-text");
    xScore = document.getElementById("x-score");
    oScore = document.getElementById("o-score");
    if(winner == "X"){
        winnerP.textContent = "Congrats! X has won";
        let score = ~~xScore.textContent + 1;
        xScore.textContent = score.toString();
    }else if(winner == "O"){
        winnerP.textContent = "Congrats! O has won";
        let score = ~~oScore.textContent + 1;
        oScore.textContent = score.toString();
    }else{
        winnerP.textContent = "It's a Tie";
    }
    winnerCard.style.animation = "appear .3s ease-out forwards"
    winnerCard.style.display = "flex";
    winnerCard.style.zIndex = "1";
    playing = false;
    console.log("yayy someone won" + winner);
}

function checkWinner(){
    console.log(board);
    if ((board["1"] == board["2"]) && (board["1"] == board["3"]) && (board["1"] != "")){
        win(board["1"]);
    }else if ((board["4"] == board["5"]) && (board["4"] == board["6"]) && (board["4"] != "")){
        win(board["4"]);
    }else if ((board["7"] == board["8"]) && (board["7"] == board["9"]) && (board["7"] != "")){
        win(board["7"]);
    }else if ((board["1"] == board["4"]) && (board["1"] == board["7"]) && (board["1"] != "")){
        win(board["1"]);
    }else if ((board["2"] == board["5"]) && (board["2"] == board["8"]) && (board["2"] != "")){
        win(board["2"]);
    }else if ((board["3"] == board["6"]) && (board["3"] == board["9"]) && (board["3"] != "")){
        win(board["3"]);
    }else if ((board["1"] == board["5"]) && (board["1"] == board["9"]) && (board["1"] != "")){
        win(board["1"]);
    }else if ((board["3"] == board["5"]) && (board["3"] == board["7"]) && (board["3"] != "")){
        win(board["3"]);
    }else if(played == 9){
        win("draw");
    }
}

function play(cellNum){
    if(playing && !board[cellNum]){
        if(playerX){
            draw_X(cellNum);
            board[cellNum] = "X";
        }else{
            draw_O(cellNum)
            board[cellNum] = "O";
        }
        playerX = !playerX;
        played += 1
        checkWinner();
    }
    showTurn();
}

function restart(){
    winnerCard = document.getElementById("winner-page");
    for(let n = 1; n <= 9; n++){
        let selector1 = "#cell" +n.toString() +" :nth-child(1)";
        let selector2 = "#cell" + n.toString() +" :nth-child(2)";
        let x1 = document.querySelector(selector1);
        let x2 = document.querySelector(selector2);
        x1.className = "";
        x2.className = "";
    }
    board = {"1": "", "2": "", "3": "",

             "4": "", "5": "", "6": "",

             "7": "", "8": "", "9": ""
            }
    playing = true;
    playerX = true;
    played = 0;
    showTurn();
    winnerCard.style.animation = "fade .3s ease-out forwards";
}

showTurn();