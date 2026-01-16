const button = document.getElementById("button");
const workList = document.querySelector(".work-list");
const buttonLess = document.getElementById("button_less");

const defaultProjects = [
  {
    title: "BMI-Calculator",
    image: "./image/BMI-Calculator.png",
    alt: "Screenshot of BMI Calculator project",
    link: "https://github.com/mousmimukherjee-dev/BMI-Calculator",
  },

  {
    title: "Tic Tac Toe",
    image: "./image/TicTacToe.png",
    alt: "Screenshot of Tic Tac Toe game project",
    link: "https://github.com/mousmimukherjee-dev/Tic-tac-toe-game",
  },

  {
    title: "Tiny Roll",
    image: "./image/TinyRoll.png",
    alt: "Screenshot of Tiny Roll game project",
    link: "https://github.com/mousmimukherjee-dev/Responsive-Web-Game",
  },
];

const createWorkCard = (title, image, link) => {
  const work = document.createElement("div");
  work.classList.add("work");

  work.innerHTML = `
  <img src=${image} alt=${title}>
  <div class="work_content">
  <h2>${title}</h2>
  <a href="${link}" target="_blank" aria-label="View project on GitHub" >View Project</a> 
  `;

  workList.appendChild(work);
};

const showDefaultProjects = () => {
  workList.innerHTML = "";
  defaultProjects.forEach((project) => {
    createWorkCard(project.title, project.image,project.alt, project.link);
  });
};

showDefaultProjects();

const repoImage = "image/github-placeholder.png";

const getWorkData = async () => {
  workList.innerHTML = "";
  try {
    let response = await fetch(
      "https://api.github.com/users/mousmimukherjee-dev/repos"
    );

    if (!response.ok) {
      throw new error("data not found");
    }
    let data = await response.json();

    data.forEach((repo) => {
      createWorkCard(repo.name, repoImage, repo.html_url);
    });
  } catch (error) {
    console.log("error:", error);
  }
};

button.addEventListener("click", () => {
  getWorkData();
  button.classList.add("hide");
  buttonLess.classList.remove("hide");
});

buttonLess.addEventListener("click", () => {
  showDefaultProjects();
  buttonLess.classList.add("hide");
  button.classList.remove("hide");
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

const cursor = document.createElement("img");
cursor.src = "./image/star.png";
cursor.alt = "Star trail";  
cursor.className = "trail-effect";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power3.out",
  });
});
