var alice = document.getElementsByClassName('alice')[0];
var step = 10;


function keyPressed(event) {
    event = event || window.event;
    if (event.keyCode == '38') { // up arrow
        // console.log('up')
        console.log(alice);
        alice.style.top = alice.style.top - step;
    } else if (event.keyCode == '40') { // down arrow
        alice.style.top = alice.style.top + step;
    } else if (event.keyCode == '37') { // left arrow
       alice.style.top = alice.style.left - step;
    } else if (event.keyCode == '39') { // right arrow
        alice.style.top = alice.style.left + step;
    }
}
document.onkeydown = keyPressed;
