const message=document.querySelector(".message");
const guess=document.querySelector("input");
const button=document.querySelector("button");
const MyArray=["Iman","Reza","Ali","Ahmad","Kimia"];
let InPlay=false;
let Scramble="";
let Scrambled="";
let score=0;
button.addEventListener("click",function (){
    console.log("clicked");
    if(!InPlay){
        InPlay=true;
        button.innerHTML="Guess";
        guess.classList.toggle("Hidden");
        console.log(createworld);
        Scrambled=randomarray(Scrambled.split("")).join(" ");
        Scramble=createworld();
        message.innerHTML=Scrambled;
    }
    else {
        let tempGuess=guess.value;
        score++;
        if(tempGuess==Scramble){
InPlay=false;
message.innerHTML="Correct. It was fun"+Scramble+"It look "+score+"guesses";
button.innerHTML="Start";
guess.classList.toggle("hidden");
    }
        else{
message.innerHTML="Wrong"+Scrambled;
        }
    }
});
function createworld() {
    let randomIndex = math.floor(math.random() * MyArray.length);
    let tempword = MyArray[randomIndex]
   // console.log(tempword);
    let rand = randomarray(tempword.split(" "));
    console.log(rand.join(" "));
    message.innerHTML=rand.join(" ");
    return tempword;
}
function randomarray(arr ){
    for(let i=arr.length-1;i>0;i--){
let temp=arr[i];
console.log(temp);
let j=math.floor(math.random()*(i+1));
arr[i]=arr[j];
arr[j]=temp;

    }
    return arr;
}
