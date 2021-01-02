const GameArea=document.querySelector(".game");
const button=document.querySelector("button");
const message=document.querySelector(".message");
let GamePlay=false;
let score=0;
button.addEventListener("click",function (){
  if(!GamePlay)  {
    GamePlay=true;
    GameArea.innerHTML=" ";
      score=0;
      maker(7);
    button.innerHTML="Check Combo";
    message.innerHTML="Guess the Combo";
  }else {
      console.log("Chekcer")
      const number = document.querySelectorAll(".numb")
      score++;
      message.innerHTML="Guesses"+score;
      let WinCondition=0;
      console.log(number)
      for(let i=0;i<number.length;i++){
         // console.log(number[i].value);
         // console.log(number[i].correct);
          if(number[i].value==number[i].correct){
              number[i].style.backgroundColor="green";
              number[i].style.color="white";
              console.log("Match");
              WinCondition++;
          }
          else{
              let color = (number[i].value<number[i].correct) ? "blue" : "red";
              number[i].style.backgroundColor=color;
              number[i].style.color="black";
              console.log("No Match");
          }
          if(WinCondition==number.length){
             gameEnd();
          }
      }
  }
});
 function gameEnd(){
    message.innerHTML="You Solved The Combo"+score+"Guesses";
    GamePlay=false;
    button.innerHTML="Restart Game";

}
function maker(num){
    for(let i=0;i<4;i++) {


        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        el.correct=Math.floor(Math.random()*10)
        el.value=0;
        el.order = 1;
        console.log(el);
        GameArea.appendChild(el);
    }
}

