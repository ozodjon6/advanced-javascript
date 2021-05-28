window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
    })

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    })

} )