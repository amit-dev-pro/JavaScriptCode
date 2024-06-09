/**
 * showing the new cat fact inside the paragraph
 */

let btn=document.querySelector("button")
btn.addEventListener('click',async()=>{
    let fact=await getFetch()
     console.log(fact)
     let p=document.querySelector("#res")
    p.innerHTML=fact                                
    



})


/**
 * showing the new dog image inside the paragraph
 */
let btn1=document.querySelector('#bt')
btn1.addEventListener("click",async()=>{
     let link=await getImage()
     console.log(link)
     let p=document.querySelector('#result')
     p.setAttribute('src',link)
})


/**
 * activity using query string
 */
let bn=document.querySelector("#btns")
let input=document.querySelector("input")

bn.addEventListener('click',async()=>{
    let country=input.value
    console.log(country)
    let res=await getCollege(country)
    console.log(res)
    show(res)
})

function show(res) {    
    let list=document.querySelector("#list")
    list.innerText=""
    for(col of res) {
        console.log(col.name)

        let li=document.createElement("li")
        li.innerText=col.name
        list.appendChild(li)
    }
 
}


 

/**
 * Generating the cat fact using the axios.get()
 */
let url="https://catfact.ninja/fact"

async function getFetch() {
    try {
        let res=await axios.get(url)
        return res.data.fact
    }catch(err) {
        console.log(err)
        return "No cat fact found"
    }
    
}

/**
 * Generating the new dog image using axios.get()
 */
let url1="https://dog.ceo/api/breeds/image/random"

async function getImage() {
    try {
        let res=await axios.get(url1)
        return res.data.message
    }catch(e)
    {
        console.log(e)
        return "image not found"
    }
    
}


/**
 * sending headers with api request
 */

let url2="https://icanhazdadjoke.com"
async function getJokes() {
    let config={headers:{Accept:"application/json"}}
    let res=await axios.get(url2,config)
    console.log(res.data)
}




/**
 * activity using query string
 */
let url4="http://universities.hipolabs.com/search?name="
async function  getCollege(country) {
    try {
        let res=await axios.get(url4 + country)
        return res.data
    }catch(e) {
        console.log("Error -",e)
        return []
    }
   
}
