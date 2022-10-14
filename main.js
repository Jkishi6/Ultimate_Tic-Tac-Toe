let turnCounter = 0

let gameWon = new Array(9).fill(false)

//Creates the 3x3 square to put individual games in
let bigTable = document.getElementById("bigTable")
let idGiver = 1
for(let i=1; i<=3; i++){
    let trr = document.createElement("tr")
    for(n=1; n<=3; n++){
        let square = document.createElement("td")
        square.className = "indieGames"
        square.id = `game-${idGiver}`
        trr.appendChild(square)
        idGiver++
    }
    bigTable.appendChild(trr)
}
//creates individual games
let trr2 = document.querySelectorAll(".indieGames")

idGiver = 1

for(let i=0; i<trr2.length; i++){
    let idGiver2 = 1
    for(let x=0; x<3; x++){
        let trr = document.createElement("tr")
        for(n=0; n<3; n++){
            let square = document.createElement("td")
            square.className = `indieBoxes game${idGiver}` 
            square.id = `box-${idGiver}-${idGiver2}`
            square.addEventListener("click", function(){playerTurn(square.id)})
            trr.appendChild(square)
            idGiver2++
        }
        trr2[i].appendChild(trr)
    }
    idGiver++
}

let boxCheck = 5;

function playerTurn(event){
   let box = document.getElementById(event)

   // id = box-(idConv)-(gameSwap)
   let idGet = box.id
   console.log(idGet)
   let idConv = idGet.charAt(4) //current game
   let gameSwap = idGet.charAt(6) //next game
   
    if (turnCounter%2 == 0 && box.innerText== "" && boxCheck == idConv && gameWon[gameSwap - 1] == false){
        //X's turn
        box.textContent = "X"
        console.log("this dude clicked on evens")
        let test = box.innerText 
        console.log(test);
        alerter.textContent = "O's turn"
        boxCheck = gameSwap
   }
   else if (turnCounter%2 == 1 && box.innerText=="" && boxCheck == idConv && gameWon[gameSwap - 1] == false){
    //O's turn
    console.log("this dude clicked on odds")
    box.textContent = "O"
    alerter.textContent = "X's turn"
    boxCheck = gameSwap
   }
   else if(box.innerText != ""){
    alerter.textContent = "Click on an empty space"
    turnCounter--
   }
   else{
    alerter.textContent = `Please play in the correct game`
    turnCounter--
   }
   
   turnCounter++
   console.log(boxCheck)

   smallWin(idGet)
}

function smallWin(event){
    let getGame = event.charAt(4)
    let currentGame = document.querySelector(`#game-${getGame}`)
    let boxes = document.querySelectorAll(`.game${getGame}`)
    let plays = [];

    for(let i=0; i<boxes.length; i++){
        plays.push(boxes[i].innerHTML)
    }
    console.log(plays[event.charAt(6)])
    
    if(plays[0]=="X" && plays[1]=="X" && plays[2]=="X" || plays[3]=="X" && plays[4]=="X" && plays[5]=="X" || plays[6]=="X" && plays[7]=="X" && plays[8]=="X" ||
        plays[0]=="X" && plays[3]=="X" && plays[6]=="X" || plays[1]=="X" && plays[4]=="X" && plays[7]=="X" || plays[2]=="X" && plays[5]=="X" && plays[8]=="X" || 
        plays[0]=="X" && plays[4]=="X" && plays[8]=="X" || plays[2]=="X" && plays[4]=="X" && plays[6]=="X")
        {
            console.log("x win game")

            currentGame.innerHTML = "X"
            gameWon[getGame - 1] = true
            console.log(gameWon)

    }
    else if(plays[0]=="O" && plays[1]=="O" && plays[2]=="O" || plays[3]=="O" && plays[4]=="O" && plays[5]=="O" || plays[6]=="O" && plays[7]=="O" && plays[8]=="O" ||
    plays[0]=="O" && plays[3]=="O" && plays[6]=="O" || plays[1]=="O" && plays[4]=="O" && plays[7]=="O" || plays[2]=="O" && plays[5]=="O" && plays[8]=="O" || 
    plays[0]=="O" && plays[4]=="O" && plays[8]=="O" || plays[2]=="O" && plays[4]=="O" && plays[6]=="O")
    {
        console.log("o win game")

        currentGame.innerHTML = "O"
            gameWon[getGame - 1] = true
            console.log(gameWon)
}
    else{
        console.log("no current game win")
    }
}