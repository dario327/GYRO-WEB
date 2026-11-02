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
var dO = 0, dF = 0;
window.addEventListener("touchstart",e=>{
    if (e.touches.length === 2){
        console.log("Has usado los dos dedos");
        
        //Dedo 1
        let x1 = e.touches[0].clientX;
        let y1 = e.touches[0].clientY;

        //Dedo 2
        let x2 = e.touches[1].clientX;
        let y2 = e.touches[1].clientY;
        
        dO = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    }
});
window.addEventListener("touchmove",e=>{
    if (e.touches.length === 2){
        console.log("Has usado los dos dedos");
        
        //Dedo 1
        let x1 = e.touches[0].clientX;
        let y1 = e.touches[0].clientY;

        //Dedo 2
        let x2 = e.touches[1].clientX;
        let y2 = e.touches[1].clientY;

        dF = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

        let escala = dF/dO;
        if (dF > dO){
            document.getElementById("divImagen").style.transform = "scale(3)";
        } else if (dF < dO){
            document.getElementById("divImagen").style.transform = "scale(0.5)";
        }
    }
});
