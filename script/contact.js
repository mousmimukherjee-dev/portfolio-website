const msg = document.getElementById("msg");
const inputs = document.querySelectorAll("input");
const form = document.forms["submit-to-google-sheet"];



const scriptURL =
  "https://script.google.com/macros/s/AKfycbym96J5tVak_gAEWtxmoeBRIksHOMCdVo7dm7F3IqoJPlWUN7aXZl-WMt2kZ1gbJj-FWg/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 1000);

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


const hamburgerMenu = document.querySelector(".hamburger_menu");
const sideMenu = document.getElementById("side_menu");
const closeMenu = document.getElementById("close_menu");

hamburgerMenu.addEventListener("click", () => {
  console.log("clicked");
  sideMenu.classList.add("show");
  sideMenu.classList.remove("hide");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  sideMenu.classList.add("hide");
});


const cursor=document.createElement('img');
cursor.src="./image/star.png"
cursor.alt = "Star trail";  
cursor.className='trail-effect';
document.body.appendChild(cursor);

window.addEventListener('mousemove',(e)=>{

gsap.to(cursor,{

 
  x:e.clientX,
  y:e.clientY,
  duration:0.15,
  ease:"power3.out"
})


})
