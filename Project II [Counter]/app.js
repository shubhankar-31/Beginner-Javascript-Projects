 let cnt=0;

 // button selection 1 by 1

//  const dec=document.querySelector(".decrease");
//  const inc=document.querySelector(".increase");
//  const reset=document.querySelector(".reset");
//  const value=document.querySelector("#value");

//  reset.addEventListener("click",(event)=>{
//     value.textContent=0;
//     cnt=0;
//  });
//  dec.addEventListener("click",(event)=>{
//     cnt--;
//     value.textContent=cnt;
//  });
//  inc.addEventListener("click",(event)=>{
//     cnt++;
//     value.textContent=cnt;
//  });


const value=document.querySelector("#value");
//Selecting all buttons now 
const btns=document.querySelectorAll(".btn");


btns.forEach((btn)=>{
    
    btn.addEventListener("mouseover",(event)=>{
        const Target=event.currentTarget.classList;
        
        if(Target.contains("decrease"))
            cnt--;
        else if(Target.contains("increase"))
            cnt++;
        else 
            cnt=0;
        
        value.textContent=cnt;
    })
});