function num() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let rand=Math.floor(Math.random()*8)+1
    if(rand>3) {
      reject("promise rejected")
    }
    console.log(rand)
    resolve()
    },1000)
    
  })
}

async function test() {
  try{
    await num()
  }catch(err) {
    console.log("error catched")
  }
}

test()