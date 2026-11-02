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
        document.getElementById("divImagen").style.transform = "scale("+escala+")";
    }
});
