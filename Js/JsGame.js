    const coinarray=['Heads','Tails'];
    let score=[0,0];
    const message=document.querySelector(".message");
    const buttons=document.querySelectorAll("button");
    console.log(buttons);
    for(let i=0;i<buttons.length;i++)
{
    console.log(buttons[i]);
    buttons[i].addEventListener("click",tosscoin);
}
    function tosscoin(e){
        let PlayerGuess=e.target.innerText;
        let ComputerToss=Math.floor(Math.random()*2);
        let ComputerGuess=coinarray[ComputerToss];
        message.innerHTML="Computer Selected"+ComputerGuess;
        let output;
        if(PlayerGuess===ComputerGuess){
            output="Player Won";
            score[0]++;
                                        }
        else{
            
            output="Computer Won";
            score[1]++;
        }
        message.innerHTML+=output+"<br/> Player : "+score[0]+ " Computer : "+score[1];
                        }
