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
