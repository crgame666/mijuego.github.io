let moveX, moveY;

document.addEventListener('mousedown', function(evento) {
    if (evento.button === 0 && evento.target.tagName === 'IMG') {
        img = evento.target;
        moveX = evento.clientX - img.getBoundingClientRect().left;
        moveY = evento.clientY - img.getBoundingClientRect().top;
        
        document.addEventListener('mousemove', mover);
    }
});

function mover(evento) {
    if (img) {
        img.style.left = (evento.clientX - moveX) + 'px';
        img.style.top = (evento.clientY - moveY) + 'px';
    }
}

document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mover);
});