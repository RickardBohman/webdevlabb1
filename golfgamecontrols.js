/*// Utan Class
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    
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
    
    update()
})

*/
/*  // Med Class
window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    
    var window_height = window.innerHeight;
    var window_width = window.innerWidth;




    // canvas.width = window_width;
    // canvas.height = window.height;

    class Golfball {
        constructor(xpos, ypos, radius, color, speed){
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.color = color;
            this.speed = speed;

            this.dx = 1 * this.speed;
            this.dy = 1 * this.speed;
        }

        draw(context){
            context.beginPath();
            context.moveTo(110, 645)
            context.arc(x, y, ballradius, 0, Math.PI * 2);
            context.fillStyle = "black";
            context.fill();
            context.closePath();
        }

        update(){

            context.clearRect(0, 0, window_width, window_height);

            this.draw(context);
            this.xpos += this.dx;
            this.ypos += this.dy;
        }

        
    }
    addEventListener("keydown", function(e){
        console.log(e)

        if(e.code == 'KeyD'){
            this.dx = 5;
        } 
        if(e.code == 'KeyA'){
            this.dx = -5;
        } 
        if(e.code == 'KeyW'){
            this.dy = -5,
            grounded = false;
        } 
        console.log(e.code)
    })
    
    addEventListener("keyup", function(e){
        if(e.code == 'KeyD'){
            this.dx = 0;
        } 
        if(e.code == 'KeyA'){
            this.dx = 0;
        } 
        if(e.code == 'KeyW'){
            this.dy = 0;
        } 
        console.log(e.code)
    })
    

    let x = 110;
    let y = 645; 
    const ballradius = 5;




let myGolfBall = new Golfball(x, y, ballradius, "black", 1);

myGolfBall.draw(context);

let updateGolfBall = function(){
    requestAnimationFrame(updateGolfBall);
    myGolfBall.update();
}






})
*/