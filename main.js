//initial global variables
let turnCounter = 0

let gameWon = new Array(9).fill(false)

let gameOver = false;

function makeTable(){
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
}

makeTable();

//set initial highlight
let startingBox = document.querySelector("#game-5")
startingBox.classList.add("highlight")

//set initial play box
let prevMove =5;
let boxCheck = 5;

function playerTurn(event){
   //getting values for box position
    let box = document.getElementById(event)

   // id = box-(idConv)-(gameSwap)
   let idGet = box.id
   let idConv = idGet.charAt(4) //current game
   let gameSwap = idGet.charAt(6) //next game
   
    if (gameWon[prevMove - 1] == false && turnCounter%2 == 0 && box.innerText== "" && boxCheck == idConv){
        //X's turn
        box.innerHTML = `<img src="./img/red-x.png" class="lilX">`

        highlight(prevMove, gameSwap)
        prevMove = gameSwap
        alerter.textContent = "O's turn"
        boxCheck = gameSwap
        
   }
   else if (gameWon[prevMove - 1] == false && turnCounter%2 == 1 && box.innerText=="" && boxCheck == idConv){
    //O's turn
    box.innerHTML = `<img src="./img/red-o.png" class="lilO">`
    highlight(prevMove, gameSwap)
    prevMove = gameSwap
    alerter.textContent = "X's turn"
    boxCheck = gameSwap
   }
   else if(gameWon[prevMove - 1] == true && turnCounter%2 == 0 && box.innerText==""){
    //X's turn for free move if next game is already won
    box.innerHTML = `<img src="./img/red-x.png" class="lilX">`
    highlight(prevMove, gameSwap)
    prevMove = gameSwap
    alerter.textContent = "O's turn"
    boxCheck = gameSwap
   }
   else if(gameWon[prevMove - 1] == true && turnCounter%2 == 1 && box.innerText==""){
    //O's turn for free move if next game is already won
    box.innerHTML = `<img src="img/red-o.png" class="lilO">`
    highlight(prevMove, gameSwap)
    prevMove = gameSwap
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

   smallWin(idGet)
   bigWin()

   if(gameOver == true){
        let reset = document.getElementById(bigTable)
        reset.replaceWith(reset.cloneNode(true))
   }
}

function highlight(prev, next){
    let deHighlight = document.querySelector(`#game-${prev}`)
    deHighlight.classList.remove("highlight")
    let highlight = document.querySelector(`#game-${next}`)
    highlight.classList.add("highlight")
}//highlights the game player plays in

function winCheck(con, I){
   
    if(con[0] ==I && con[1] ==I && con[2] ==I || con[3] ==I && con[4] ==I && con[5] ==I || con[6] ==I && con[7] ==I && con[8] ==I ||
        con[0] ==I && con[3] ==I && con[6] ==I || con[1] ==I && con[4] ==I && con[7] ==I || con[2] ==I && con[5] ==I && con[8] ==I || 
        con[0] ==I && con[4] ==I && con[8] ==I || con[2] ==I && con[4] ==I && con[6] ==I){
            return true
        }
    else{
        return false
    }
    //spaghetti code for winchecking    
}

//small game win check
function smallWin(event){
    let getGame = event.charAt(4)
    let currentGame = document.querySelector(`#game-${getGame}`)
    let boxes = document.querySelectorAll(`.game${getGame}`)
    let plays = [];
    let X = '<img src="./img/red-x.png" class="lilX">';
    let O = '<img src="./img/red-o.png" class="lilO">';

    for(let i=0; i<boxes.length; i++){
        plays.push(boxes[i].innerHTML)
    }

    //checks if x win small game
    if(winCheck(plays, X) == true)
        {

            currentGame.innerHTML = `<img src="./img/red-x.png" class="bigX">`
            gameWon[getGame - 1] = true

    }
    //check of o win small game
    else if(winCheck(plays, O) == true)
    {

        currentGame.innerHTML = `<img src="./img/red-o.png" class="bigO">`
            gameWon[getGame - 1] = true
}
    else{
        console.log("no current game win")
    }
}

//check for entire game win
function bigWin(){
    //setting initial check variables
    let games = document.querySelectorAll(".indieGames");
    let plays = [];
    let X = '<img src="./img/red-x.png" class="bigX">';
    let O = '<img src="./img/red-o.png" class="bigO">';

    for(let i=0; i<games.length; i++){
        plays.push(games[i].innerHTML)
    }

    //check for if x wins whole game
    if(winCheck(plays, X))
        {
            gameOver = true
            alerter.textContent = "X wins!"
    }
    //check for if o wins whole game
    else if(winCheck(plays, O))
    {
        gameOver = true
        alerter.textContent = "O wins!"
}
    else{
        console.log("no current game win")
    }
}

//reset button
let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function(){
    let bigTable = document.querySelector("#bigTable")
    let container = document.querySelector("#table-container")
    bigTable.remove()
    let newTable = document.createElement("table")
    newTable.id = "bigTable"
    newTable.className = "mainTable"
    container.appendChild(newTable)
    makeTable()
    gameOver = false
    turnCounter = 0
    gameWon = []
    gameWon = new Array(9).fill(false)
    prevMove =5;
    boxCheck = 5;
    let alerter = document.querySelector("#alerter")
    alerter.textContent = "X's turn"
    let resetStart = document.querySelector("#game-5")
    resetStart.classList.add("highlight")
})