// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");


navToggleBtn.addEventListener("click",()=>{

    // Naive Method
//    if(links.classList.contains("show-links")==false)
//         links.classList.add("show-links");
//     else
//         links.classList.remove("show-links");

    //best method
    links.classList.toggle("show-links");
})