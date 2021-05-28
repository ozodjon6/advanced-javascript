'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
})