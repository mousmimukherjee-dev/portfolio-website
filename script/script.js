
$(document).ready(function(){


$('#line1').fadeIn(800,function(){


  $('#line1').fadeOut(800,function(){

    $('#line2').fadeIn(800,function(){

      $('#line2').fadeOut(800,function(){

        $('#line3').fadeIn(800,function(){

          $('#line3').fadeOut(800,function(){

            $('#start-btn').fadeIn(800)
          })
        })
      })
    })
  })
})

 $('#start-btn').on('click',function(){

  $('#intro').fadeOut(800,function(){

    $('#portfolio-wrapper').fadeIn(600)
  })
 })

})

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



const hamburgerMenu = document.querySelector(".hamburger_menu");
const sideMenu = document.getElementById("side_menu");
const closeMenu = document.getElementById("close_menu");
const logo = document.querySelector(".logo");

hamburgerMenu.addEventListener("click", () => {
  console.log("clicked");
  sideMenu.classList.add("show");
  sideMenu.classList.remove("hide");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  sideMenu.classList.add("hide");
});

var typed = new Typed("#element", {
  strings: ["Web Developer", "Problem Solver", "JavaScript Developer"],
  typeSpeed: 60,
  backSpeed:30,
  loop:true,
});

