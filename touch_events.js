/*
//1 Área sensible
document.getElementById("caja").addEventListener("touchstart",()=>{ 
    document.getElementById("caja").style.backgroundColor = "green";
});
document.getElementById("caja").addEventListener("touchmove",(dedo)=>{ 
    const x = dedo.touches[0].clientX;
    const y = dedo.touches[0].clientY;
    document.getElementById("caja").innerHTML = `Coordenada X: ${x}<br>Coordenada Y: ${y}`;
    document.getElementById("caja").style.backgroundColor = "yellow";
});
document.getElementById("caja").addEventListener("touchend",()=>{
    document.getElementById("caja").style.backgroundColor = "red";
});

//2 Círculo perseguidor
const circulo = document.getElementById("circulo");
window.addEventListener("touchmove",(event)=>{
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    circulo.style.top = y+"px"
    circulo.style.left = x+"px";
});

//3 Gesto Swipe
var xO = 0;
var yO = 0;
window.addEventListener("touchstart",(e)=>{
    let toque = e.touches[0];
    xO = toque.clientX;
    yO = toque.clientY;
});
var xF = 0;
var yF = 0;
window.addEventListener("touchend",(e)=>{
    let toque = e.changedTouches[0];
    xF = toque.clientX;
    yF = toque.clientY;
    var ejeX = xF - xO;
    var ejeY = yF - yO;
    document.getElementById("divTexto").innerHTML = "";
    if (ejeX>0){
        document.getElementById("divTexto").innerHTML += "Has deslizado hacia la derecha";
    } else if(ejeX<0){
        document.getElementById("divTexto").innerHTML += "Has deslizado hacia la izquierda";
    }
    if (ejeY>0){
        document.getElementById("divTexto").innerHTML += "<br>Has deslizado hacia abajo";
    } else if(ejeY<0){
        document.getElementById("divTexto").innerHTML += "<br>Has deslizado hacia arriba";
    }
});
*/
//4 Multitouch
window.addEventListener("touchstart",e=>{
    if (e.touches.length === 2){
        alert("Has tocado con los dos dedos");
    }
})

