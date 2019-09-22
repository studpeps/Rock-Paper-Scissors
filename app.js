let user=0;
let comp=0;
const user_d=document.getElementById("userlabel");
const comp_d=document.getElementById("computerlabel");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const smalluser="user".fontsize(4).sub();
const smallcomp="comp".fontsize(4).sub();
function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function convert(letter){
    if(letter==='r')
      return "Rock";
    else if(letter==='p')
      return "Paper";
    else 
      return "Scissors";
} 


function win(userc,compc)
{
 user++;
 user_d.innerHTML=user;
 comp_d.innerHTML=comp;
 result_div.innerHTML= `${convert(userc)}${smalluser} beats ${convert(compc)}${smallcomp} You Win!`;
 document.getElementById(userc).classList.add('green-glow');
 setTimeout(function(){document.getElementById(userc).classList.remove('green-glow')},300);
}
function lose(userc,compc){
    comp++;
 user_d.innerHTML=user;
 comp_d.innerHTML=comp;
 result_div.innerHTML= `${convert(userc)}${smalluser} loses to ${convert(compc)}${smallcomp} You Lose!`;
 document.getElementById(userc).classList.add('red-glow');
 setTimeout(function(){document.getElementById(userc).classList.remove('red-glow')},300);
}
function draw(userc,compc){
    
    user_d.innerHTML=user;
    comp_d.innerHTML=comp;
    result_div.innerHTML= `${convert(userc)}${smalluser} , ${convert(compc)}${smallcomp} Its a Draw!`;
    document.getElementById(userc).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userc).classList.remove('grey-glow')},300);
}

function game(userChoice){
  const computerChoice=getComputerChoice();
  
  switch(userChoice+computerChoice){
      case "rs":
          case "pr":
              case "sp":
                  win(userChoice,computerChoice);
                  break;
      case "rp":
          case "sr":
              case "ps":
                  lose(userChoice,computerChoice);
                  break;
      case "rr":
             case "ss":
                 case "pp":
                      draw(userChoice,computerChoice);
                         break;
                
  }
}

function main(){

  rock_div.addEventListener("click",function()
  {
    game("r");
  })
  paper_div.addEventListener("click",function()
  {
    game("p");
  })
  scissors_div.addEventListener("click",function()
  { 
    game("s");
  })
}

main();


