const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.querySelector("#btn");
const color=document.querySelector(".color");



btn.addEventListener("click",()=>{
    let computed_color=generate_color();
    document.body.style.backgroundColor=computed_color;
    color.textContent=computed_color;
});


const generate_color= ()=>{

    let res="#";
    for (let i = 0; i < 6; i++) {
       res+=hex[Math.floor(Math.random()*hex.length)];
        
    }
    return res
};
   
