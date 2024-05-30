// hey I am red
// Hey I'm blue H3
//

let p=document.createElement("p")
p.innerText="Hey I'm red"
document.querySelector('body').prepend(p)
p.classList.add('red')

let h3=document.createElement('h3')
h3.innerText='Hey I am Blue h3!'
document.querySelector('body').prepend(h3)
h3.classList.add('blue')

let div=document.createElement('div')
let h1=document.createElement('h1')
let p1=document.createElement('p')

h1.innerText="Hey I'm in div"
p1.innerText="MEET TOO"

div.append(h1)
div.append(p1)
div.classList.add('box')

document.querySelector('body').prepend(div)

let input=document.createElement('input')
let btn1=document.createElement('button')
btn1.innerText="Click Me"

document.querySelector('body').append(input)
document.querySelector('body').append(btn1)

input.setAttribute('placeholder','username')
btn1.setAttribute('id','btn')

let btn=document.querySelector('#btn')
btn.classList.add('btn')


// onclick uses
let bt=document.querySelector('button')
console.dir(bt)

// b.onclick=function(){
//     console.log("button was clicked")
// }

function hi(){
    console.dir('hiii onmouseenter')
}

function sayhello(){
    alert('say hello')
}

// b.onclick=sayhello
// b.onmouseenter=hi

//addEvenListerner

// bt.addEventListener('click',sayhello)
// bt.addEventListener('click',function(){
//     console.log('Hii.. I am Amit kumar')
// })

bt.addEventListener('dblclick',function(){
    console.log("Hii. This is Devendra Kumar How can i help you")
})