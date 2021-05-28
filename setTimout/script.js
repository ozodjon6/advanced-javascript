window.addEventListener('DOMContentLoaded',() => {
    
    function myAnimation() {

        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);

        function frame() {
            if(pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }

    }
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', myAnimation);
})