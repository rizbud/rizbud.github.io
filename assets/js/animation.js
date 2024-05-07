// Get experience element from the DOM
const experienceSection = document.getElementById("experience");

// Get project element from the DOM
const projectSection = document.getElementById("projects");

// Get experience data from the DOM
const experienceData = document.querySelectorAll(".experience-data");

let experienceAlreadyAnimated = false;
let projectAlreadyAnimated = false;

const animateExperience = async () => {
  // Add class to animate experience section
  experienceSection.classList.add(
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "translate-x-0",
    "opacity-100"
  );
  experienceSection.classList.remove("translate-y-full", "opacity-0");

  for (let i = 0; i < experienceData.length; i++) {
    setTimeout(() => {
      // Add class to animate each experience data
      experienceData[i].classList.add(
        "transition-all",
        "duration-1000",
        "delay-500",
        "ease-in-out",
        "translate-x-0",
        "opacity-100"
      );
      experienceData[i].classList.remove("translate-x-12", "opacity-0");
    }, i * 100);
  }

  experienceAlreadyAnimated = true;
};

const animateProject = async () => {
  const children = projectEl.children;

  // Add class to animate project section
  projectSection.classList.add(
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "translate-x-0",
    "opacity-100"
  );
  projectSection.classList.remove("translate-y-full", "opacity-0");

  await delay(500);

  for (let i = 0; i < children.length; i++) {
    setTimeout(() => {
      // Add class to animate each project
      children[i].classList.add(
        "transition-opacity",
        "duration-1000",
        "ease-in-out",
        "opacity-100"
      );
      children[i].classList.remove("opacity-0");
    }, i * 100);
  }
  projectAlreadyAnimated = true;
};

// Animates experience and project sections when user scrolls
window.onscroll = async () => {
  const scrollY = Math.min(window.scrollY, window.innerHeight);

  if (
    scrollY > experienceSection.getBoundingClientRect().top &&
    !experienceAlreadyAnimated
  ) {
    animateExperience();
  }

  if (
    scrollY > projectSection.getBoundingClientRect().top &&
    !projectAlreadyAnimated
  ) {
    animateProject();
  }
};

// Animates experience and project sections when page loads and fragments are present
window.onload = async () => {
  const scrollY = Math.min(window.scrollY, window.innerHeight);

  if (
    scrollY > experienceSection.getBoundingClientRect().top &&
    !experienceAlreadyAnimated
  ) {
    animateExperience();
  }

  if (
    scrollY > projectSection.getBoundingClientRect().top &&
    !projectAlreadyAnimated
  ) {
    animateProject();
  }
};
