const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const g=0.5;
class Ball{
    constructor(startX,startY){
     this.r = 10;
     this.x = startX;
     this.y = startY;
     this.vy = 0;
   }
     draw(){           
       ctx.fillStyle='white';
       ctx.beginPath();
       ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
       ctx.fill();
     }
 }

 function drawCanvas(){
    requestAnimationFrame(drawCanvas);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    ball.y+=ball.vy;
    ball.vy+=g;
    if (ball.y>canvas.height-2*ball.r){
      if(ball.vy<1){
        ball.vy=0;
      }
        ball.vy*=-0.8;
    }
    ball.draw();
 }  
 let ball=new Ball(200,100);
 drawCanvas();