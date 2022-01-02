var box = document.getElementById('box');
var pos = 0;
var vpos = 0;
setInterval(move, 5);
function move() {
    if(pos > 400){
        pos = 0;
        vpos += 100;
    }
    if(vpos > 400) {
        vpos = 0;
    }
    pos += 1;
    box.style.left = pos + "px";
    box.style.top = vpos + "px";
}