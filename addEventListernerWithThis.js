let btn=document.querySelector("button")
let h3=document.querySelector("h3")
let p=document.querySelector("p")
let form=document.querySelector("form")
let h2 =document.querySelector("h2")


function changeColor(){
    console.dir(this.innerText)
    this.style.backgroundColor="blue"
}
function changecolor() {
    this.style.background="brown"
}

btn.addEventListener("click",changecolor )

h3.addEventListener("click", changeColor)

p.addEventListener("click",changeColor)

// inp.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted")
// })


//extracting form data that means accessing the form data
form.addEventListener("submit",function(event){
    event.preventDefault()
    console.dir(form)

    // let user=document.querySelector("#user")
    // let pass=document.querySelector("#pass")
    let user=this.elements[0]
    let pass=this.elements[1]

    // console.log(user.value)
    // console.log(pass.value)
    alert(`UserName is ${user.value} and password is ${pass.value}`)
})
 

let url="https://catfact.ninja/fact"

fetch(url)
.then((res)=>{
    console.log(res)
    return res.json()
})
.then((data1)=>{
    console.log("data-1 ",data1.fact)
    return fetch(url)
})
.then((res)=>{
    return res.json()
})
.then((data2)=>{
    console.log("data-2 ",data2.fact)
})
.catch((err)=>{
    console.log("ERROR - ",err)
})

