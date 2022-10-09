let turnCounter = 0
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

let trr2 = document.querySelectorAll(".indieGames")

idGiver = 1

for(let i=0; i<trr2.length; i++){
    let idGiver2 = 1
    for(let x=0; x<3; x++){
        let trr = document.createElement("tr")
        for(n=0; n<3; n++){
            let square = document.createElement("td")
            square.className = "indieBoxes"
            square.id = `box-${idGiver}-${idGiver2}`
            square.addEventListener("click", function(){playerTurn(square.id)})
            trr.appendChild(square)
            idGiver2++
        }
        trr2[i].appendChild(trr)
    }
    idGiver++
}

let redX= document.createElement("img")


function playerTurn(event){
   let box = document.getElementById(event)
   
    if (turnCounter%2 == 0){
        let redX= document.createElement("img")
        redX.src = "./img/red-x.png"
        redX.className = "redX"
        console.log("this dude clicked on evens")
        console.log(event)
        box.appendChild(redX)
        
   }
   else{
    console.log("this dude clicked on odds")
    let blackO = document.createElement("img")
    blackO.src = "./img/o.png"
    blackO.className = "blackO"
    box.appendChild(blackO)
   }
   turnCounter++
}