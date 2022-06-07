let b=document.querySelectorAll('button');
let b1=b[0];
let b2=b[1];
let h1tag=document.querySelector('h1');
let count=0;
b1.addEventListener('click',()=>{
    count++;
    h1tag.innerText=count;
})
b2.addEventListener('click',()=>{
    count--;
    h1tag.innerText=count;
})