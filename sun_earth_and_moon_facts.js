var sunEarthAndMoonSimCanvas=document.querySelector('canvas');
var sunImg=new Image();
var moonImg=new Image();
var earthImg=new Image();

function init() {
    sunImg.src='https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moonImg.src='https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earthImg.src='https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(drawSunEarthAndMoonSim);
}

function drawSunEarthAndMoonSim(){
    var sunEarthAndMoonSimCanvasContext2D=sunEarthAndMoonSimCanvas.getContext('2d'); 
    
    sunEarthAndMoonSimCanvasContext2D.globalCompositeOperation='destination-over';
    sunEarthAndMoonSimCanvasContext2D.clearRect(0, 0, 300, 300);
    sunEarthAndMoonSimCanvasContext2D.fillStyle='rgba(0, 0, 0, 0.4)';
    sunEarthAndMoonSimCanvasContext2D.strokeStyle='rgba(0, 153, 255, 0.4)';
    sunEarthAndMoonSimCanvasContext2D.save();
    sunEarthAndMoonSimCanvasContext2D.translate(150, 150);

    var time=new Date();
    
    sunEarthAndMoonSimCanvasContext2D.rotate(((2*Math.PI)/60)*time.getSeconds()+((2 * Math.PI)/60000)* time.getMilliseconds());
    sunEarthAndMoonSimCanvasContext2D.translate(105, 0);
    sunEarthAndMoonSimCanvasContext2D.fillRect(0, -12, 40, 24); // Shadow
    sunEarthAndMoonSimCanvasContext2D.drawImage(earthImg, -12, -12);
    sunEarthAndMoonSimCanvasContext2D.save();
    sunEarthAndMoonSimCanvasContext2D.rotate(((2*Math.PI)/6)*time.getSeconds()+((2 * Math.PI)/6000) * time.getMilliseconds());
    sunEarthAndMoonSimCanvasContext2D.translate(0, 28.5);
    sunEarthAndMoonSimCanvasContext2D.drawImage(moonImg, -3.5, -3.5);
    sunEarthAndMoonSimCanvasContext2D.restore();
    sunEarthAndMoonSimCanvasContext2D.restore();
    sunEarthAndMoonSimCanvasContext2D.beginPath();
    sunEarthAndMoonSimCanvasContext2D.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    sunEarthAndMoonSimCanvasContext2D.stroke();
    sunEarthAndMoonSimCanvasContext2D.drawImage(sunImg, 0, 0, 300, 300);
    window.requestAnimationFrame(drawSunEarthAndMoonSim);
}

init();