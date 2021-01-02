const endDate=document.querySelector("input[name='endDate']");
const clock=document.querySelector(".clock");
let timeInterval;
let timeStop=true;
const savevalue=localStorage.getItem( "countdown")||false;
if(savevalue){
    startclock(savevalue);
    let inputvalue=new Date(savevalue);
    endDate.valueAsDate=inputvalue;
}
endDate.addEventListener("change",function (e) {
e.preventDefault();
clearInterval(timeInterval);
const temp=new Date(endDate.value);
localStorage.setItem("countdown",temp);
startclock(temp);
timeStop=true;
});
function startclock(d){
    function updatecounter() {


        let tl = (timeleft(d));
        if(tl.total<=0){
          timeStop=false;
    }
        for (let pro in tl) {
            let el = clock.querySelector("." + pro);
            if (el) {
                el.innerHTML = tl[pro];
            }
        }

    }
    updatecounter();

    if(timeStop){
        timeInterval=setInterval(updatecounter,1000);
    }
    else{
        clearInterval(timeInterval);
    }
}
function timeleft(d){
    let currentDate=new Date();
    console.log(d);
     let t=Date.parse(d)-Date.parse(currentDate);
    console.log(t);
    let seconds=Math.floor((t/1000)%60);
    let minutes=Math.floor(((t/1000)/60)%60);
    let hours=Math.floor((t/(1000*60*60))%24);
    let days=Math.floor(t/(1000*60*60*24));

    return{
        "total":t,
        "days" :days,
        "hours": hours,
        "minutes": minutes,
        "seconds" : seconds
    };
}