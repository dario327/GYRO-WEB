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
var p1inicio = [], p2inicio = [], p1final = [], p2final = [];
window.addEventListener("touchstart",e=>{
    if (e.touches.length === 2){
        console.log("Has usado los dos dedos");
        
        //Dedo 1
        let xO = e.touches[0].clientX;
        let yO = e.touches[0].clientY;
        p1inicio.push(xO,yO);

        //Dedo 2
        xO = e.touches[1].clientX;
        yO = e.touches[1].clientY;
        p2inicio.push(xO,yO);
    }
});
window.addEventListener("touchstart",e=>{
    if (e.touches.length === 2){
        console.log("Has usado los dos dedos");
        
        //Dedo 1
        let xO = e.touches[0].clientX;
        let yO = e.touches[0].clientY;
        p1inicio.push(xO,yO);

        //Dedo 2
        xO = e.touches[1].clientX;
        yO = e.touches[1].clientY;
        p2inicio.push(xO,yO);
    }
});
window.addEventListener("touchmove",e=>{
    if (e.touches.length === 2){
        console.log("Has usado los dos dedos");
        
        //Dedo 1
        let xO = e.changedTouches[0].clientX;
        let yO = e.changedTouches[0].clientY;
        p1final.push(xO,yO);

        //Dedo 2
        xO = e.changedTouches[1].clientX;
        yO = e.changedTouches[1].clientY;
        p2final.push(xO,yO);

        var d1 = Math.sqrt(Math.pow((p1final[0] - p1inicio[0]),2) + Math.pow((p1final[1] - p1inicio[1]),2));
        var d2 = Math.sqrt(Math.pow((p2final[0] - p2inicio[0]),2) + Math.pow((p2final[1] - p2inicio[1]),2));
        if (d1 > 0 || d2 > 0){
            document.getElementById("divImagen").style.transform = `scale(2)`;
        } else if(d1 < 0 || d2 < 0){
            document.getElementById("divImagen").style.transform = `scale(0.5)`;
        }
    }
});
