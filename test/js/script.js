'use strict';

const heart = document.querySelectorAll('.heart');

heart.forEach(item => {
    item.classList.add('active');

    setTimeout(() => {
        item.classList.remove('active');
    }, 1000);
})

const div = document.createElement('div');

div.classList.add('black');
document.body.appendChild(div);

div.insertAdjacentElement("beforeend", `<h2>Hello I'm child his black</h2>`)