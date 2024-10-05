const skills = [
  {
    name: "JavaScript",
    image: "https://img.icons8.com/color/64/000000/javascript.png",
  },
  {
    name: "TypeScript",
    image: "https://img.icons8.com/color/64/000000/typescript.png",
  },
  {
    name: "Dart",
    image: "https://img.icons8.com/color/64/000000/dart.png",
  },
  {
    name: "React.js",
    image: "https://img.icons8.com/color/64/000000/react-native.png",
  },
  {
    name: "React Native",
    image: "https://img.icons8.com/color/64/000000/react-native.png",
  },
  {
    name: "Next.js",
    image: "https://img.icons8.com/color/64/000000/nextjs.png",
  },
  {
    name: "Vue.js",
    image: "https://img.icons8.com/color/64/000000/vue-js.png",
  },
  {
    name: "Nuxt.js",
    image: "https://img.icons8.com/?size=64&id=nvrsJYs7j9Vb&format=png",
  },
  {
    name: "Flutter",
    image: "https://img.icons8.com/color/64/000000/flutter.png",
  },
  {
    name: "Node.js",
    image: "https://img.icons8.com/color/64/000000/nodejs.png",
  },
  {
    name: "Express.js",
    image: "https://img.icons8.com/color/64/000000/express-js.png",
  },
  {
    name: "Fastify",
    image: "/assets/images/fastify.png",
  },
  {
    name: "Nest.js",
    image: "https://img.icons8.com/color/64/000000/nestjs.png",
  },
  {
    name: "PostgreSQL",
    image: "https://img.icons8.com/?size=64&id=38561&format=png",
  },
  {
    name: "MySQL",
    image: "https://img.icons8.com/color/64/000000/mysql-logo.png",
  },
  {
    name: "SQLite",
    image: "https://www.nuget.org/profiles/SQLite/avatar?imageSize=64",
  },
  {
    name: "Git",
    image: "https://img.icons8.com/color/64/000000/git.png",
  },
  {
    name: "Vercel",
    image: "/assets/images/vercel.png",
  },
  {
    name: "GitHub Actions",
    image: "https://img.icons8.com/color/64/000000/github.png",
  },
  {
    name: "Gitlab CI/CD",
    image: "https://img.icons8.com/color/64/000000/gitlab.png",
  },
  {
    name: "Docker",
    image: "https://img.icons8.com/color/64/000000/docker.png",
  },
];

// Get skills element from the DOM
const skillsEl = document.getElementById("my-skills");

// Loop through skills data and render it to the DOM
skills.forEach((item) => {
  skillsEl.innerHTML += `
    <div class="flex flex-col items-center justify-center rounded-lg bg-slate-100 gap-0.5 shadow-lg aspect-square w-[120px] h-[120px]">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain" />
      <span class="text-sm text-center">${item.name}</span>
    </div>
  `;
});
