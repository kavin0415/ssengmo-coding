
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const w=canvas.width/30;

let brickArr=[];
let ballArr=[];
let xMin=0;
let yMin=0;
const ballSpeed=5;
class Ball{
   constructor(startX,startY,startVX,startVY){
    this.r = w/2;
    this.x = startX;
    this.y = startY;
    this.vx = startVX*ballSpeed;
    this.vy = startVY*ballSpeed;
  }
    draw(){           
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
}

class Bar{
  constructor(){
    this.width=70;
    this.height=10;
    this.x = window.innerWidth / 2 -25;
    this.y = window.innerHeight - 50;
  }
    draw(){
      ctx.fillStyle='black';
      
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move(e){
      this.x=e.touches[0].clientX;
    }
  }
function drawCanvas(){
  requestAnimationFrame(drawCanvas);
  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bar.draw();
  ballArr.forEach((a,i,o)=>{//모든 공에 대하여
    
    
    
    a.y+=a.vy;      //y좌표를 위쪽 방향으로 이동시킨다. 
    a.x+=a.vx;      //x좌표를 vx만큼 이동시킨다. 
    if (a.x < a.r || a.x > canvas.width-a.r){ //벽에 부딪히면
      a.vx*=-1;
    }
    if (a.y < a.r){ //천장에 부딪히면
      a.vy*=-1;
    }
    if ((a.y+a.r > bar.y && a.y < bar.y+a.r+bar.height)&&
    a.x>bar.x&&a.x<bar.x+bar.width){ //바에 부딪히면
      a.vy=-ballSpeed;
      a.vx=(a.x-bar.x-bar.width/2)*ballSpeed*2/bar.width;
    }
    if (a.y>canvas.height){
      o.splice(i,1);
    }
    a.draw();
    });
    brickArr.forEach((a,i,o)=>{ //모든 벽돌에 대하여
      if (a[2]===1){
        ctx.fillStyle='gray';
        ctx.fillRect(a[0]*w+1,a[1]*w+1,w-2,w-2);
      }
      if (a[2]===2){
        ctx.fillStyle='lightgreen';
        ctx.fillRect(a[0]*w+1,a[1]*w+1,w-2,w-2);
      }
      
    });
    brickArr.forEach((a,i,o)=>{ //모든 벽돌에 대하여
      for(let j=0;j<ballArr.length;j++){ //모든 공
        
        if (a[2]==1){
          if((ballArr[j].x<a[0]*w+w&&ballArr[j].x>a[0]*w)
          &&(ballArr[j].y<a[1]*w+w&&ballArr[j].y>a[1]*w)){
            
            let xMin=Math.abs(a[0]*w-ballArr[j].x);
            let yMin=Math.abs(a[1]*w-ballArr[j].y);
            if(xMin>yMin){
              ballArr[j].vx*=-1;
              ballArr[j].x+=ballArr[j].vx;
              
            }
            else{
              ballArr[j].vy*=-1;
              ballArr[j].y+=ballArr[j].vy;
            }
          }
          break;
          
        }
        else if (a[2]>=2){
            if((ballArr[j].x<a[0]*w+w&&ballArr[j].x>a[0]*w)
            &&(ballArr[j].y<a[1]*w+w&&ballArr[j].y>a[1]*w)){
              
              xMin=Math.abs(a[0]*w+w/2-ballArr[j].x);
              yMin=Math.abs(a[1]*w+w/2-ballArr[j].y);
              if(xMin>yMin){
                
                ballArr[j].vx*=-1;
                a[2]=0;
              }
              else{
                
                ballArr[j].vy*=-1;
                a[2]=0;
              }
              break;
            }
            
          }
        
      }
    });
    
  
  /*bubbleArr.forEach((a,i,o)=>{
    
    
    bar.draw();
    a.y-=ySpeed;    //y좌표를 위쪽 방향으로 이동시킨다. 
    a.x+=a.vx;      //x좌표를 vx만큼 이동시킨다. 
    a.r+=rSpeed;    //비눗방울을 크게 만들어 준다. 
    if (a.timer<0){   //timer가 0이 되면 비눗방울을 지운다.
      o.splice(i,1);
    }
    });
  */
    
}

canvas.addEventListener('touchmove',(e)=>{
  
  bar.x = e.touches[0].clientX-25;
  });
canvas.addEventListener('touchstart',(e)=>{
  
  bar.x = e.touches[0].clientX-25;
    
  });
document.addEventListener('mousemove', (e) => {
	bar.x = e.clientX-25;
});
window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
  }
);
window.addEventListener('onload', ()=>{
   

    
  }
);
  let bar = new Bar();//bar 생성
  let ball = new Ball (bar.x,bar.y-50,1,-1);//ball 생성
  ballArr.push(ball);
  for (let i=0;i<30;i++){
    for (let j=5;j<30;j++){
      if(i<18&&i>12){
        brickArr.push([i,j,0]);
      }
      else{
        brickArr.push([i,j,2]);
      }
    }
  }
  drawCanvas();