canvas= document.getElementById("myCanvas") 
var mouseevent="empty"
var lastpositionx,lastpositiony;
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    posicaoxatual=e.clientX-canvas.offsetLeft;
    posicaoyatual=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=4;
        ctx.moveTo(lastpositionx,lastpositiony);
        ctx.lineTo(posicaoxatual,posicaoyatual)
        ctx.stroke();
    }
    lastpositionx=posicaoxatual;
    lastpositiony=posicaoyatual;
    
}
ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 2;
ctx.arc(mousex, mousey, 40 ,0 ,2 * Math.PI);
ctx.stroke()
