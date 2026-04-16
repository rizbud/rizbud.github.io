const experiences = [
  {
    title: "Fullstack Engineer",
    company: "Tabist Co., Ltd.",
    date: "2023 - Present",
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    date: "2021 - Present",
  },
  {
    title: "Frontend Developer",
    company: "PT. Sejahtera Murti Lestari (RubyH)",
    date: "2022 - 2023",
  },
  {
    title: "Fullstack Developer (Freelance)",
    company: "PT. Famindo Kunci Sukses",
    date: "2022 - 2023",
  },
  {
    title: "Fullstack Developer (Freelance)",
    company: "INTERNET & TELECOM TRANSACTIONS INTERNATIONAL, LLC.",
    date: "2021 - 2022",
  },
  {
    title: "Mobile Engineer",
    company: "PT. Sarana Media Seluler",
    date: "2021 - 2022",
  },
  {
    title: "React Native Developer (Freelance)",
    company: "PT. Vorta Siber Indonesia",
    date: "2021 - 2022",
  },
  {
    title: "Frontend Engineer",
    company: "PT. Anugerah Raya Teknologi",
    date: "2021",
  },
  {
    title: "React Native Developer",
    company: "CloudGakkai",
    date: "2020 - 2021",
  },
];

// Get experience element from the DOM
const experienceEl = document.getElementById("my-experience");

// Loop through experience data and render it to the DOM
experiences.forEach((exp, i) => {
  experienceEl.innerHTML += `
    <div class="exp-item">
      <div class="exp-line">
        <div class="exp-dot"></div>
        ${i < experiences.length - 1 ? '<div class="exp-connector"></div>' : ""}
      </div>
      <div class="experience-data exp-body reveal">
        <p class="exp-role">${exp.title}</p>
        <p class="exp-company">${exp.company}</p>
        <p class="exp-date">${exp.date}</p>
      </div>
    </div>
  `;
});
