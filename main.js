let turnCounter = 0

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

   let idGet = box.id
   console.log(idGet)
   let idConv = idGet.charAt(4)
   let gameSwap = idGet.charAt(6)
   
    if (turnCounter%2 == 0 && box.innerText== "" && boxCheck == idConv){
        
        box.textContent = "X"
        console.log("this dude clicked on evens")
        let test = box.innerText 
        console.log(test);
        alerter.textContent = "O's turn"
        boxCheck = gameSwap
   }
   else if (turnCounter%2 == 1 && box.innerText=="" && boxCheck == idConv){
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
    
    if(plays[0]=="x" && plays[1]=="x" && plays[2]=="x" || plays[3]=="x" && plays[4]=="x" && plays[5]=="x" || plays[6]=="x" && plays[7]=="x" && plays[8]=="x" ||
        plays[0]=="x" && plays[3]=="x" && plays[6]=="x" || plays[1]=="x" && plays[4]=="x" && plays[7]=="x" || plays[2]=="x" && plays[5]=="x" && plays[8]=="x" || 
        plays[0]=="x" && plays[4]=="x" && plays[8]=="x" || plays[2]=="x" && plays[4]=="x" && plays[6]=="x")
        {
            console.log("x win game")
    }
    else if(plays[0]=="o" && plays[1]=="o" && plays[2]=="o" || plays[3]=="o" && plays[4]=="o" && plays[5]=="o" || plays[6]=="o" && plays[7]=="o" && plays[8]=="o" ||
    plays[0]=="o" && plays[3]=="o" && plays[6]=="o" || plays[1]=="o" && plays[4]=="o" && plays[7]=="o" || plays[2]=="o" && plays[5]=="o" && plays[8]=="o" || 
    plays[0]=="o" && plays[4]=="o" && plays[8]=="o" || plays[2]=="o" && plays[4]=="o" && plays[6]=="o")
    {
        console.log("o win game")
}
    else{
        console.log("no current game win")
    }
}