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

    
    function split4(e){

        if(e.shiftKey){
            //shift is pressed - lets all the children of my parent (that includes me!)
            this.parentNode.addEventListener("click",split4)
            this.parentNode.innerHTML=''  //or delete the children a nicer way
        }
        else{
            //Split a div into 4 by adding 4 quarters
    
           // this.removeEventListener("click",split4)
            addQuarter(this)
            addQuarter(this)
            addQuarter(this)
            addQuarter(this)
        }
    
        // Event 'capturing and bubbling' 
        e.stopPropagation() //stop the event from firing again on all the ancestor divs
    }


}


document.body.addEventListener("click",split4)