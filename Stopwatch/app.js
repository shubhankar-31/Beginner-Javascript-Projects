let [sec,min,hr]=[0,0,0];
let display_time=document.getElementById("display_time");
let timer=null;
const start=document.getElementById("start_btn");
const stop=document.getElementById("stop_btn");
const reset=document.getElementById("reset_btn");
const stopwatch=()=>{
    sec++;
    if(sec===60){
        min++;
        sec=0;
        
    }
    if(min===60){
        hr++;
        min=0;
    }

    let h= hr<10?`0${hr}`:hr;
    let m= min<10?`0${min}`:min;
    let s= sec<10?`0${sec}`:sec;
    display_time.textContent=`${h}:${m}:${s}`;
}



start.addEventListener("click",()=>{
    if(timer!==null)
        clearInterval(timer);
    timer=setInterval(stopwatch, 1000);
});

stop.addEventListener("click",()=>{
    clearInterval(timer);
})

reset.addEventListener("click",()=>{

    clearInterval(timer);
    sec=min=hr=0;
    display_time.textContent="00:00:00";
})

