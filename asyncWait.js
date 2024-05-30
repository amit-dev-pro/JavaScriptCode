// async function greet()
// {
//     throw ("404 page was not found")
//     return "Hii.. Amit G RADHE RADHE"
// }
// console.log(greet())

// greet()
// .then(()=>{
//     console.log("problem was resolved")
// })
// .catch((err)=>{
//     console.log("this is a problem ",err)
// })


function num()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let rand=Math.floor(Math.random()*10)+1
        if(rand>3) {
            reject("promise rejected")
        }
        console.log(rand)
        resolve()
    },1000)

    })   
}

async function test()
{
     try{
        await num()
        await num()
        await num()
        await num()
     }catch(err)
     {
        console.log("Error was catched")
     }
     let a=90
     console.log(a)
     console.log(a+34)
}
test()

let student={
    name: "amit",
    marks:58
}
console.log(JSON.stringify(student))