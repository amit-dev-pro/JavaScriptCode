let userSeq=[];
let gameSeq=[];

let btns=["yellow","red","purple","green"]

let h3=document.querySelector("h3")

let start=false;
let level=0;


document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is started")
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },300)
}

function levelUp(){
    level++;
    h3.innerText=`Level ${level}`

    let randomIndex=Math.floor(Math.random()*3)
    let randomColor=btns[randomIndex]
    let randBtn=document.querySelector(`.${randomColor}`)
    
    // console.log(randomIndex)
    // console.log(randomColor)
    // console.log(randBtn)
    userSeq.push(randomColor)
    console.log(userSeq)
    gameFlash(randBtn)
     
}

function checkAns(idxx){
    //console.log("current level is ",level)
    let idx = level -1
    if(userSeq[idxx] === gameSeq[idxx]) {
         if(userSeq.length == gameSeq.length){
            levelUp()
         }
    } else{
        h3.innerText="Game is over ! Press any key to start"
    }
}


function btnPress(){
    console.log(this)
    let btn=this
    userFlash(btn)

    userColor=btn.getAttribute("id")
    userSeq.push(userColor)
     
    checkAns(userSeq.length-1)
     
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}