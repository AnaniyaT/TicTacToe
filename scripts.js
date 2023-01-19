let playing = true
let playerX = true

function draw_O(cellNum){
    let selector = "#cell" + cellNum +" :nth-child(1)";
    console.log(selector);
    let o = document.querySelector(selector);
    o.className = "boardCell__letter_O"
    console.log("hello");
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
        Xindicator.style.color = "white";
        Oindicator.style.color = "rgb(14, 57, 94)";
    }else{
        Oindicator.style.color = "white";
        Xindicator.style.color = "rgb(14, 57, 94)";
    }
}

function play(cellNum){
    
    if(playing){
        if(playerX){
            draw_X(cellNum);
        }else{
            draw_O(cellNum)
        }
        playerX = !playerX;
    }
    showTurn();
}

showTurn();