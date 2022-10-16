// jshint maxerr:200
//global variables
let diceNumber=[1,2,3,4,5,6,7,8,9,1,1,2,3,4,5,6];
const volumeText = document.getElementById(`volumeText`);
const rollBtn = document.getElementById(`rollBtn`);
const audio = document.getElementById('music');
const eventTxt = document.getElementById('eventTxt');
const achieveNumTxt = document.getElementById('achieveNumTxt');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const dice5 = document.getElementById('dice5');
const dice6 = document.getElementById('dice6');
const dice7 = document.getElementById('dice7');
const dice8 = document.getElementById('dice8');
const dice9 = document.getElementById('dice9');
const dice10 = document.getElementById('dice10');
const dice11 = document.getElementById('dice11');
const dice12 = document.getElementById('dice12');
const dice13 = document.getElementById('dice13');
const dice14 = document.getElementById('dice14');
const dice15 = document.getElementById('dice15');
const dice16 = document.getElementById('dice16');

const easter1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const easter2 = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
const easter3 = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
const easter4 = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
const easter5 = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
const easter6 = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
const easter7 = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4];
const easter8 = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
const easter9 = [3,1,4,1,5,3,2,6,5,3,5,2,3,1,3,3];
let checkedIndex=[];
let achieve=[];







function rollDices(){
  for (let i in checkedIndex){
    let dice = document.getElementById(`dice${checkedIndex[i]+1}`);
    let random = Math.floor(Math.random()*6)+1;
    switch (random) {
      case 1:
        dice.innerHTML=`<div class="dot_wrapper">　</div>
                    <div class="dot_wrapper"><span>　</span><span>●</span><span>　</span></div>
                    <div class="dot_wrapper">　</div>`;
        
        break;
      case 2:
        dice.innerHTML=`<div class="dot_wrapper"><span>　</span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper">　</div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>　</span></div>`;
        break;
      case 3:
        dice.innerHTML=`<div class="dot_wrapper"><span>　</span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper"><span>　</span><span>●</span><span>　</span></div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>　</span></div>`;
        break;
      case 4:
        dice.innerHTML=`<div class="dot_wrapper">●<span></span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper"><span>　</span><span>　</span><span>　</span></div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>●</span></div>`;
        break;
      case 5:
        dice.innerHTML=`<div class="dot_wrapper">●<span></span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper"><span>　</span><span>●</span><span>　</span></div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>●</span></div>`;
        break;
      case 6:
        dice.innerHTML=`<div class="dot_wrapper">●<span></span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>●</span></div>
                    <div class="dot_wrapper"><span>●</span><span>　</span><span>●</span></div>`;
        break;
      default:
        console.log(`Sorry, we are out of randomrange.`);
    }
    //주사위 눈 저장
    diceNumber[checkedIndex[i]]=random;
  }
}
function checkEvent(){
  if (diceNumber.toString()==easter1.toString()){
    eventTxt.innerHTML=`업적달성 No.1`;
    setTimeout(function() {eventTxt.innerHTML=`1. 조용히 해!`;}, 3000);
    achieve[0]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter2.toString()){
    eventTxt.innerHTML=`업적달성 No.2`;
    setTimeout(function() {eventTxt.innerHTML=`2.왜왜두두번번써써지지지지??`;}, 3000);
    achieve[1]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter3.toString()){
    eventTxt.innerHTML=`업적달성 No.3`;
    setTimeout(function() {eventTxt.innerHTML=`3. 삼위일체`;}, 3000);
    achieve[2]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter4.toString()){
    eventTxt.innerHTML=`업적달성 No.4`;
    setTimeout(function() {eventTxt.innerHTML=`4. 死死死死`;}, 3000);
    achieve[3]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter5.toString()){
    eventTxt.innerHTML=`업적달성 No.5`;
    setTimeout(function() {eventTxt.innerHTML=`5. FiveStars`;}, 3000);
    achieve[4]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter6.toString()){
    eventTxt.innerHTML=`업적달성 No.6`;
    setTimeout(function() {eventTxt.innerHTML=`6. 볼륨 최대로!`;}, 3000);
    achieve[5]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter7.toString()){
    eventTxt.innerHTML=`업적달성 No.7`;
    setTimeout(function() {eventTxt.innerHTML=`7. RAINBOW`;}, 3000);
    achieve[6]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter8.toString()){
    eventTxt.innerHTML=`업적달성 No.8`;
    setTimeout(function() {eventTxt.innerHTML=`8. 완벽주의자`;}, 3000);
    achieve[7]=1;
    saveArray();
    updateAchieveNumber();
  }
  else if (diceNumber.toString()==easter9.toString()){
    eventTxt.innerHTML=`이스터에그 발견`;
    doRainbow();
  }
  else{
    let random = Math.floor(Math.random()*21)+1;
    
    switch (random) {
      case 1:
        eventTxt.innerHTML=`안녕하세요 개발자입니다.`;
        break;
      case 2:
        eventTxt.innerHTML=`last update: 22.5.17`;
        break;
      case 3:
        eventTxt.innerHTML=`세렌디피티 아프라시아시타!`;
        break;
      case 4:
        eventTxt.innerHTML=`kavinking@naver.com <br>
        버그제보 또는 러브레터`;
        break;
      case 5:
        eventTxt.innerHTML=`개발자 전역일: 22.10.5`;
        break;
      case 6:
        eventTxt.innerHTML=`재밌어?`;
        break;
      case 7:
        eventTxt.innerHTML=`Rock And Roll!`;
        break;
      case 8:
        eventTxt.innerHTML=`이스터에그? 글쎄...`;
        break;
      case 9:
        eventTxt.innerHTML=`집가고 싶다...`;
        break;
      case 10:
        eventTxt.innerHTML=`랜덤다이스 해봤어?`;
        break;
      case 11:
        eventTxt.innerHTML=`독립시행! 과거에 얽매여서는 안돼!`;
        break;
      case 12:
        eventTxt.innerHTML=` '2,821,109,907,456 분의 1'`;
        break;
      case 13:
        eventTxt.innerHTML=`신은 주사위놀이를 하지 않는다.`;
        break;
      case 14:
        eventTxt.innerHTML=`주사위 두개를 굴려 13이 나올 확률?`;
        break;
      case 15:
        eventTxt.innerHTML=`주사위의 반대말은? 주며느리...`;
      break;
        case 16:
        eventTxt.innerHTML=`마주보는 숫자의 합은 7`;
        break;
      case 17:
        eventTxt.innerHTML=`1,2,3은 모서리에서 봤을때 반시계방향`;
        break;
      case 18:
        eventTxt.innerHTML=`<a href="https://www.gucci.com/kr/ko/pr/decor-lifestyle/lifestyle/games/cards-dice/dice-set-with-interlocking-g-p-6622932ZRAG1093">구찌 인터로킹 G 주사위 세트</a>`;
        break;
      case 19:
        eventTxt.innerHTML=`주사위 컨트롤 없습니다...`;
        break;
      case 20:
        eventTxt.innerHTML=`주사위는 던져졌다!!!`;
        break;
      case 21:
        eventTxt.innerHTML=`업적은 총 8개`;
        break;
      default:
        console.log(`Sorry, we are out of randomrange.`);
        break;
    }
  }
  
}
function doRoll(){
  
  rollBtn.disabled=true;
  checkedIndex=[];
  let check;
  for(let i=0;i<16;i++){
     // 체크박스 확인 1. checkbox element를 찾습니다.
    check = document.getElementById(`checkBox${i+1}`);
    
    // 2. checked 속성을 체크합니다.
    let is_checked = check.checked;
    if(!is_checked){
      checkedIndex.push(i);
      
    }
    
  }

  //주사위 돌리기
  setTimeout(function() {rollDices();}, 100);
  setTimeout(function() {rollDices();}, 200);
  setTimeout(function() {rollDices();}, 300);
  setTimeout(function() {rollDices();}, 400);
  setTimeout(function() {rollDices();}, 500);
  setTimeout(function() {rollDices();}, 600);
  setTimeout(function() {rollDices();}, 700);
  setTimeout(function() {rollDices();}, 800);
  setTimeout(function() {rollDices();}, 900);
  //열번째는 음량 숫자 조절 까지
  setTimeout(function() {
    rollDices();
    //print amount of dices
    let result = diceNumber.reduce(function add(sum, currValue) { return sum + currValue; }, 0);
    //이벤트 체크
    checkEvent();
    //볼륨 txt 변경
    volumeText.innerHTML=`Volume:${result}`;
    //볼륨 조절
    audio.volume=(result-13)/(83);
    //버튼 활성화
    rollBtn.disabled = false;
    }, 1000);
}
//인터넷에서 가져온 쿠키저장함수
function setCookie(name, value, days) {
        if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
        } else {
               var expires = "";
        }
        
        document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cName) {
  cName = cName + '=';
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';
  if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
  }
      //쿠키저장함수
    	function saveArray(){
    	  setCookie('volume_saved_array',achieve,365);
    	}
    	function loadArray(){
    	  if(getCookie('volume_saved_array')){//저장된게 있으면
        achieve=getCookie('volume_saved_array').split(",");
        
        for(let i=0;i<8;i++){
            achieve[i]=parseInt(achieve[i]);
          }
        
        }
        else{
          for(let i=0;i<8;i++){
            achieve.push(0);
          }
        }
    	}
    	
function updateAchieveNumber(){
  let result=0;
  for (let i=0;i<achieve.length;i++){
    if (achieve[i]){
      result++;
    }
  }
  achieveNumTxt.innerHTML=`${result}/8`;
  
}
 	
function audioPlay() { 
     
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0;
    } 
} 
function doRainbow(){
  dice1.style.borderColor = "red";
  dice1.style.color = "red";
  dice2.style.borderColor = "orange";
  dice2.style.color = "orange";
  dice3.style.borderColor = "yellow";
  dice3.style.color = "yellow";
  dice4.style.borderColor = "green";
  dice4.style.color = "green";
  dice5.style.borderColor = "blue";
  dice5.style.color = "blue";
  dice6.style.borderColor = "#0851c7";
  dice6.style.color = "#0851c7";
  dice7.style.borderColor = "purple";
  dice7.style.color = "purple";
  dice8.style.borderColor = "gray";
  dice8.style.color = "gray";
  dice9.style.borderColor = "red";
  dice9.style.color = "red";
  dice10.style.borderColor = "orange";
  dice10.style.color = "orange";
  dice11.style.borderColor = "yellow";
  dice11.style.color = "yellow";
  dice12.style.borderColor = "green";
  dice12.style.color = "green";
  dice13.style.borderColor = "blue";
  dice13.style.color = "blue";
  dice14.style.borderColor = "#01307d";
  dice14.style.color = "#01307d";
  dice15.style.borderColor = "purple";
  dice15.style.color = "purple";
  dice16.style.borderColor = "gray";
  dice16.style.color = "gray";
  
  }
//여기서부터 코드 시작

loadArray();
doRoll();
updateAchieveNumber();

