const experiences = [
  {
    title: "Frontend Engineer",
    company: "Tabist Co., Ltd.",
    date: "2023 - Present",
  },
  {
    title: "Frontend Developer",
    company: "RubyH",
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
    <div class="flex gap-4">
      <div class="flex flex-col items-center">
        <div class="w-3 h-3 bg-slate-800 rounded-full"></div>
        <div class="w-[1px] flex flex-grow ${
          i < experiences.length - 1 ? "bg-slate-800" : ""
        }"></div>
      </div>

      <div class="experience-data flex flex-col pb-4 -mt-2 translate-x-12 opacity-0">
        <h3 class="text-lg font-semibold">${exp.title}</h3>
        <h4>${exp.company}</h4>
        <p class="text-xs font-light text-slate-500">${exp.date}</p>
      </div>
    </div>
  `;
});
