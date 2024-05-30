let input=document.querySelector("input")
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

btn.addEventListener("click", function(){
    let item=document.createElement("li")
    item.innerText=input.value

    let bt=document.createElement("button")
    bt.innerText="delete"
    bt.classList.add("delete")

    item.appendChild(bt)
    ul.appendChild(item)
    input.value=""
 })

// Event delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement
        par.remove()
    }

})








//  let delItem=document.querySelectorAll(".delete")
//  for(del of delItem){
//      del.addEventListener("click",function(){
//         let par=this.parentElement
//         par.remove()
//      })
//  }