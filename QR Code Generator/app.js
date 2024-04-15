//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const btn=document.getElementById("qr_btn");
const img_box=document.getElementById("img_box");
const qr_img=document.getElementById("qr_img");
const qr_text=document.getElementById("qr_text");





btn.addEventListener("click",()=>{
    if(qr_text.value.length>0){
        qr_img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_text.value}`;
        img_box.classList.add("show-img");
    }
    else{
        qr_text.classList.add("error");
        img_box.classList.remove("show-img");

        setTimeout(() => {
           qr_text.classList.remove("error");
        }, 3000);
    }
   
});



