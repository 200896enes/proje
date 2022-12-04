const buttonIncrease = document.getElementById("increase")
const buttonDescrease = document.getElementById("descrease")
const buttonReset = document.getElementById("reset")
const counter = document.getElementById("counter")


let count=0;




buttonIncrease.addEventListener("dblclick", functionIcrease)
buttonDescrease.addEventListener("click",functionDescrease)
buttonReset.addEventListener("click",functionReset)


function functionDescrease(){
    count = count - 1
    counter.innerHTML = count
}

function functionReset(){
    count = 0
    counter.innerHTML = count
}





function functionIcrease(){
    count = count + 1

    counter.innerHTML = count
}















//console.log(buttonReset)





// const buttunDescrease=descrease

