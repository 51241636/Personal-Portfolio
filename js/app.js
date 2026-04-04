const  section=document.querySelector("#exercise-section")
const observer=new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    entries[0].target.classList.add("show")
  }else{
    entries[0].target.classList.remove("show")
  }
}, {threshold : 0.3})
observer.observe(section);

const  section02=document.querySelector("#aboutSection")
const observer02=new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    entries[0].target.classList.add("show")
  }else{
    entries[0].target.classList.remove("show")
  }
}, {threshold : 0.1})
observer02.observe(section02);
const  section03=document.querySelector(".technology-section")
const observer03=new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    entries[0].target.classList.add("show")
  }else{
    entries[0].target.classList.remove("show")
  }
}, {threshold : 0.3})
observer03.observe(section03);
const  section04=document.querySelector(".projectShowcase-section")
const observer04=new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    entries[0].target.classList.add("show")
  }else{
    entries[0].target.classList.remove("show")
  }
}, {threshold : 0.1})
observer04.observe(section04);

function myFunction() {
  let nav = document.getElementById("navigationName");
  if (nav.className === "topNav") {
    nav.className += " responsive";
  } else {
    nav.className = "topNav";
  }
}
