let h1=document.querySelector("h1")
 

function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color
        nextColor()
    },delay)
}

changeColor("green",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("orange",1000,()=>{
            changeColor("brown",1000,()=>{

            })
        })
    })
})

/*
function dataSave(data,success,failure){
    let randNetSpeed=Math.floor(Math.random()*10)+1
    if(randNetSpeed>4) {
        success()
    } else {
        failure()
    }
}

dataSave("AmitApna",()=>{
    console.log("successful : Your data was saved")
    dataSave("Devendra",()=>{
        console.log("Successful:2 Your data was saved")
        dataSave("Krish",()=>{
            console.log("Successful:3 Your data was saved")
        } , ()=>{
            console.log("Failure :3 weak connection")
        })
    } , ()=>{
        console.log("Failure:2 weak connection")
    })
}, ()=>{
    console.log("Failure : weak connection")
}
 
)
*/


// optimize solution using promise

function dataSave(data) {
    return new Promise((resolve,reject)=>{
        let randNetSpeed=Math.floor(Math.random()*10)+1
        if(randNetSpeed>4) {
            resolve("The data 9905210832 ,9709350303 was saved Successfully")
        } else {
            reject("Failure : your connection was poor ")
        }
    })
}
 
/*  
dataSave("amit")
.then(()=>{
    console.log("promise was resolved")
})
.catch(()=>{
    console.log("promise was failure")
}) */

//promise chaining
dataSave("amit")
.then(()=>{
    console.log("data1 was saved")
    return dataSave("krish")
})
.then(()=>{
    console.log("data2 was saved")
    return dataSave("Rahul")
})
.then(()=>{
    console.log("data3 was saved")
})
.catch(()=>{
    console.log("promise was rejected")
})


 