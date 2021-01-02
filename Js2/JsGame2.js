const AnswerArray=["it will work","Maybe,Maybe not","Probably Probably not","Go Ahead"];
const message=document.querySelector(".message");
const question=document.querySelector("input");
const button=document.querySelector("button");

button.addEventListener("click",function () {
    let res=Math.floor(Math.random()*AnswerArray.length);
    message.innerText=question.value+" "+ AnswerArray[res];
    question.value=" ";
});