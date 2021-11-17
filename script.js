//lo que hacemos aqui es que, en caso de que el usuario estemas abajo que la animacion, suba y la pueda ver
//solo aplica cuando la pagina es mas larga.
window.scroll({
    top:0,
    left:100,
    behavior:'smooth'
});

function desl(){
    lin.style.animation = "desl 1s";
}
function mantener(){
    dd.style.animation = "mantener 1s infinite";
}
function mantener2(){
    uu.style.animation = "mantener 2s infinite";
}
function mantener3(){
    fondo.style.animation = "mantener 2s infinite";
    document.getElementById("bod").style.cssText = "overflow-y: scroll;";
    document.getElementById("imga").style.cssText = "right: -1.1%;";
}
function opaco1() {
    uu.style.animation = "aparecer1 1s";
    setTimeout(mantener2, 1000);
}
function opaco2() {
    setTimeout(opaco3,0);
    setTimeout(mantener3, 2000);
}
function opaco3() {
    fondo.style.animation = "aparecer2 2s";
}
function aparicion() {
    dd.style.animation = "desl2 0.5s";
    setTimeout(mantener, 500);
    setTimeout(opaco1, 500);
}

setTimeout(opaco2, 4000);
setTimeout(aparicion, 1500);
desl();

// en esta pequeña parte, haremos el efecto de paralaje o parallax que podemos ver en las imagenes

document.addEventListener("mousemove", parallax);
function parallax(e) {
    var ancho = screen.width;
    if(ancho>770){
        document.querySelectorAll(".fond").forEach(function(move) {
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value)/120;
            var y = (e.clientY * moving_value)/120;
            move.style.transform = "translateX("+x+"px) translateY("+y+"px)";
        });
    }
}