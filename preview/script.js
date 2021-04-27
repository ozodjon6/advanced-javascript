"use strict"

const btn = document.getElementById('btn');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('button');


// let i = 0;
const deleteElemnt = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click',  deleteElemnt);        
    // }
}

// btn.addEventListener('click',  deleteElemnt);
// overlay.addEventListener('click',  deleteElemnt);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElemnt);
})