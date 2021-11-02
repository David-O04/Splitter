"use strict"

function split4(){
    addQuarter(this)
    addQuarter(this)    
    addQuarter(this)    
    addQuarter(this)
    this.removeEventListener("click", split4)   
}

function addQuarter(intoDiv){

    let q = document.createElement("div")
    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split4)

    intoDiv.appendChild(q)

    



}


document.body.addEventListener("click",split4)