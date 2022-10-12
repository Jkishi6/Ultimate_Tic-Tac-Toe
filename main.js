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
            square.className = `indieBoxes` 
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
}

