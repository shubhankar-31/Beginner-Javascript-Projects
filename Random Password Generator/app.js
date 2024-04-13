const password_box=document.getElementById("password");

const password_len=12;
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower=upper.toLowerCase();
const number="0123456789";
const symbols="@#$^+";

const main_string=upper+lower+number+symbols;

const btn=document.getElementById("generate_btn");
const copy_btn=document.getElementById("copy_btn");
const reset_btn=document.getElementById("reset_btn");
btn.addEventListener("click",()=>{
    let password="";
    while(password.length<password_len){
        let rand_ind=Math.floor(Math.random()*main_string.length);
       password+=main_string[rand_ind];
        
    }
    password_box.value=password;
});

copy_btn.addEventListener("click",()=>{
    if(password_box.value!="")
        navigator.clipboard.writeText(password_box.value);
});

// Reset button will basically clear you clipboard
// and password input field will reset to it's default placeholder value

reset_btn.addEventListener("click",()=>{
    password_box.value=password_box.defaultValue;
    navigator.clipboard.writeText("");
})

