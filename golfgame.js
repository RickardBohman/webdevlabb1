
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

//Resizing

window.addEventListener("Resize", resizing())

function resizing() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

addEventListener("keydown", function(e){
    console.log(e)

    if(e.code == 'KeyD'){
        vx = 5;
    } 
    if(e.code == 'KeyA'){
        vx = -5;
    } 
    if(e.code == 'KeyW'){
        vy = -5,
        grounded = false;
    } 
    console.log(e.code)
})

addEventListener("keyup", function(e){
    if(e.code == 'KeyD'){
        vx = 0;
    } 
    if(e.code == 'KeyA'){
        vx = 0;
    } 
    if(e.code == 'KeyW'){
        vy = 0;
    } 
    console.log(e.code)
})



//Making it move
let x = 110;
let y = 645; 

let vx = 0;
let vy = 0;

let speed = 1;

let dx = 2;
let dy = -2;

function updateBallPos(){
    dx = 1 * speed;
    dy = 1 * speed;
}


let grounded = false;

const ballradius = 5;

var window_height = window.height;
var window_width = window_width;



let preLocation = {
    x: x - 5,
    y: y - 15
}




function drawBall(){
    context.beginPath();
    context.moveTo(110, 645)
    context.arc(x, y, ballradius, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}


function draw(){
    drawBall();
    preLocation.x += vx;
    preLocation.y += vy;
    x += vx;
    y += vy;
}

setInterval(function Gravity(){
    if(grounded == false){
        vy += 0.02;
    }
})

function update(){
    checkHole()
    drawshit();
    preLocation.x += vx;
    preLocation.y += vy;
    x += vx;
    y += vy;
    colision()
    draw()
    requestAnimationFrame(update)
}

function colision(){
    if(y >= canvas.height - 70){    
        y = canvas.height - 70
        preLocation.y = canvas.height - 70
        grounded = true;
    }
}

function checkHole(){
    console.log(y)
    if((x >= 1190 && x <= 1220) &&( y <= 650 && y >= 645)){
        alert("Nice Shot!")
        x = 110;
        y = 645;
    }
}

update()






function drawshit(){

    context.fillStyle = "white";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    
    //Marken
    context.beginPath();
    context.fillStyle = "Green";
    context.fillRect(0, 650, 1600, 100);
    context.closePath();
    
    //Trädet
    context.beginPath();
    context.fillStyle = "Brown";
    context.fillRect(1450 , 150, 200, 500);
    context.arc(1410, 50, 150, 0, 2 * Math.PI);
    context.fillStyle = "green"
    context.fill();
    context.strokeStyle = "green";
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(1460, 200, 100, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.stroke();
    context.closePath();
    context.beginPath();
    context.strokeStyle = "Brown";
    context.lineWidth = 30;
    context.moveTo(1500, 450);
    context.lineTo(1350, 350)
    context.stroke();
    context.closePath();
    
    // Flaggan
    context.beginPath();
    context.moveTo(1200, 650)
    context.lineTo(1200, 500)
context.lineWidth = 5;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(1200,500)
context.fillStyle = "red";
context.fillRect(1198,500, -50, 20)
context.closePath();
//hålet
context.beginPath();
context.arc(1200, 650, 20, 0, Math.PI / 1, false);
context.fillStyle = "black";
context.fill();
context.stroke();
context.closePath();

//moln
context.beginPath();
context.arc(200, 200, 100, 0, Math.PI / 1, true);
context.fillStyle = "#5BC0F8";
context.strokeStyle = "#5BC0F8";
context.fill();
context.stroke();
context.closePath();
context.beginPath();
context.arc(350, 200, 120, 0, Math.PI / 1, true);
context.fillStyle = "#5BC0F8";
context.strokeStyle = "#5BC0F8";
context.fill();
context.stroke();
context.closePath();
//moln 
context.beginPath();
context.arc(800, 150, 100, 0, Math.PI / 1, true);
context.fillStyle = "#5BC0F8";
context.strokeStyle = "#5BC0F8";
context.fill();
context.stroke();
context.closePath();
context.beginPath();
context.arc(950, 150, 120, 0, Math.PI / 1, true);
context.fillStyle = "#5BC0F8";
context.strokeStyle = "#5BC0F8";
context.fill();
context.stroke();
context.closePath();



//vänster ben
context.beginPath();
context.strokeStyle = "black"
context.moveTo(80, 650);
context.lineTo(110, 600);
context.stroke();
context.closePath();
//höger ben
context.beginPath();
context.moveTo(140, 650);
context.lineTo(110, 600);
context.stroke();
context.closePath();
//kroppen
context.beginPath();
context.moveTo(110, 600);
context.lineTo(110, 550);
context.stroke()
context.closePath();
//huvudet
context.beginPath();
context.arc(110, 530, 20, 0, Math.PI * 2, false);
context.fillStyle = "black";
context.stroke();
context.closePath();
//öga vänster
context.beginPath();
context.arc(102, 525, 2, 0, Math.PI * 2, false);
context.fillStyle = "black";
context.stroke();
context.closePath();
//öga höger
context.beginPath();
context.arc(118, 525, 2, 0, Math.PI * 2, false);
context.fillStyle = "black";
context.stroke();
context.closePath();
//mun
context.beginPath();
context.arc(110, 532, 10, 0, Math.PI / 1, false);
context.fillStyle = "black";
context.stroke();
context.closePath();
//armar
context.beginPath();
context.moveTo(80, 600);
context.lineTo(110, 570);
context.stroke();
context.closePath();
//klubban
context.beginPath();
context.moveTo(80, 600);
context.lineTo(40, 550);
context.lineTo(30, 560);
context.lineTo(40, 571);
context.lineTo(50, 560);
context.stroke();
context.closePath();
}
//bollen
/*
context.beginPath();
context.arc(110, 645, 5, 0, Math.PI * 2, false);
context.fillStyle = "black";
context.fill();
context.stroke();
context.closePath();
*/








/*
context.fillStyle = "red";
context.lineWidth = 5;
context.fillRect(50,50, 200, 200); // rektangel ifylld

context.strokeStyle = "Blue";
context.strokeRect(100, 100, 200, 200 ); // rektangel bara kanterna 
*/

/*

// Ritar ut streck från a till b.
context.beginPath(); // start punkten

context.moveTo(100,100); // flyttar startpunkten

context.lineTo(200,200); // från a till b
context.lineTo(100,200); // från a till b
context.closePath(); // stänger från sista punkten till start punkten.

context.stroke(); // gör allting synligt 
*/


/* 
//Ritspel
// variables
let ballPath = false;


function startPosition(e){
    ballPath = true;
    draw(e);
}
function finishedPosition(){
    ballPath = false;
    context.beginPath();
}
function draw(e){
    if(!ballPath){
        return;
    }
    context.lineWidth = 10;
    context.lineCap = "round";
    context.strokeStyle = "red"; // sätter färgen till röd

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);

}
//eventlistners
canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', finishedPosition)
canvas.addEventListener('mousemove', draw)
*/