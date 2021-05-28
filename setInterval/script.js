const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;


// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// })

// function logger() {
//     if(i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text')
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello')
//     id = setTimeout(log, 800)
// }, 500)


function myAnimation() {
    const box = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10)

    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation)

const date1 = new Date();
console.log(date1);