var alice = document.getElementsByClassName('alice')[0];
var step = 10;

function keyPressed(event) {
    event = event || window.event;
    if (event.keyCode == '38') {        // up arrow
        move(alice, 0, -step);
    } else if (event.keyCode == '40') { // down arrow
        move(alice, 0, step);
    } else if (event.keyCode == '37') { // left arrow
        move(alice, -step, 0);
    } else if (event.keyCode == '39') { // right arrow
        move(alice, step, 0);
    }
}
function move(target, x, y) {
    var left = target.getBoundingClientRect().left + x,
        top = target.getBoundingClientRect().top + y;
    target.style.left = left + 'px';
    target.style.top = top + 'px';
}
document.onkeydown = keyPressed;
