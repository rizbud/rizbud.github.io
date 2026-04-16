// Get section elements
const experienceSection = document.getElementById("experience");
const projectSection = document.getElementById("projects");
const hireMeSection = document.getElementById("hire-me");

let experienceAlreadyAnimated = false;
let projectAlreadyAnimated = false;
let hireMeAlreadyAnimated = false;

const animateExperience = () => {
  const items = document.querySelectorAll(".experience-data");
  items.forEach((el, i) => {
    setTimeout(() => el.classList.add("revealed"), i * 100);
  });
  experienceAlreadyAnimated = true;
};

const animateProjects = () => {
  const children = Array.from(projectEl.children);
  children.forEach((el, i) => {
    setTimeout(() => el.classList.add("revealed"), i * 100);
  });
  projectAlreadyAnimated = true;
};

const animateHireMe = () => {
  const hireInner = hireMeSection.querySelector(".hire-inner");
  if (hireInner) setTimeout(() => hireInner.classList.add("revealed"), 100);
  hireMeAlreadyAnimated = true;
};

const checkAnimations = () => {
  const threshold = window.innerHeight * 0.9;

  if (
    !experienceAlreadyAnimated &&
    experienceSection.getBoundingClientRect().top < threshold
  ) {
    animateExperience();
  }

  if (
    !projectAlreadyAnimated &&
    projectSection.getBoundingClientRect().top < threshold
  ) {
    animateProjects();
  }

  if (
    !hireMeAlreadyAnimated &&
    hireMeSection.getBoundingClientRect().top < threshold
  ) {
    animateHireMe();
  }
};

window.addEventListener("scroll", checkAnimations, { passive: true });
window.addEventListener("load", checkAnimations);
