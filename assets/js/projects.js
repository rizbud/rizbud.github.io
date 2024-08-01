const projects = [
  {
    name: "Tabist.co.jp",
    image: "assets/images/tabist.png",
    techstack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Native",
      "MobX",
      "Fastify",
      "Vercel",
    ],
    url: {
      web: "https://tabist.co.jp",
      playstore:
        "https://play.google.com/store/apps/details?id=com.tabist.booking",
      appstore: "https://apps.apple.com/app/id1621250313",
    },
  },
  {
    name: "Goozone Sports",
    image: "assets/images/goozone.webp",
    techstack: ["TypeScript", "React Native"],
    url: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.goozonesports.android",
      appstore: "https://apps.apple.com/id/app/id6480057470",
    },
  },
  {
    name: "Melaka.app",
    image: "assets/images/melaka.png",
    techstack: [
      "Next.js",
      "TypeScript",
      "NX",
      "Tailwind CSS",
      "XState",
      "Vercel",
    ],
    url: {
      web: "https://melaka.app",
      playstore:
        "https://play.google.com/store/apps/details?id=app.melaka.dashboard.twa",
    },
  },
  {
    name: "KunciPlay",
    image: "assets/images/kunciplay.jpg",
    techstack: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Prisma",
      "tRPC",
      "Vercel",
    ],
    url: {
      playstore:
        "https://web.archive.org/web/20221222071020/https://play.google.com/store/apps/details?id=com.kunciplayer.app",
      appstore:
        "https://web.archive.org/web/20230108174929/https://apps.apple.com/id/app/kunciplay/id6443617692",
    },
  },
  {
    name: "Sebarin",
    image: "assets/images/sebarin.png",
    techstack: ["Nuxt.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: {
      web: "https://sebarin.id",
    },
  },
  {
    name: "KunciNFT",
    image: "assets/images/kuncinft.png",
    techstack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3", "Vercel"],
    url: {
      web: "https://web.archive.org/web/20230606122945/https://kuncinft.com/",
    },
  },
  {
    name: "Nolu Dating App",
    image: "assets/images/nolu.jpg",
    techstack: [
      "React Native",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "In-App Purchase",
    ],
    url: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.dating.adate4u",
      appstore: "https://apps.apple.com/us/app/nolu/id1594380997",
    },
  },
  {
    name: "HBBL",
    image: "assets/images/hbbl.png",
    techstack: ["Gatsby.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: {
      web: "https://web.archive.org/web/20230321145614/https://www.hbbl.site/",
    },
  },
  {
    name: "Wispay",
    image: "assets/images/wispay.jpg",
    techstack: ["Flutter", "Dart", "GetX"],
    url: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.wispayoutlet",
    },
  },
  {
    name: "VCON",
    image: "assets/images/vcon.webp",
    techstack: ["React Native", "TypeScript", "MobX", "Jitsi Meet"],
    url: {
      web: "https://www.vorta.tech/vcon",
    },
  },
  {
    name: "One21",
    image: "assets/images/one21.webp",
    techstack: ["React Native", "JavaScript", "Redux"],
    url: {
      playstore: "https://play.google.com/store/apps/details?id=com.one21",
      appstore: "https://apps.apple.com/id/app/one21/id1540220733",
    },
  },
  {
    name: "7Desk",
    image: "assets/images/7desk.png",
    techstack: ["React Native", "JavaScript", "Redux"],
  },
  {
    name: "Karma Group",
    image: "assets/images/karma.webp",
    techstack: ["React Native", "JavaScript", "Redux"],
    url: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.karmagroups",
      appstore: "https://apps.apple.com/in/app/karma-group/id1296156992",
    },
  },
];

// Get project element from the DOM
const projectEl = document.getElementById("my-projects");

// Loop through project data and render it to the DOM
projects.forEach((project) => {
  projectEl.innerHTML += `
    <div class="flex flex-col bg-slate-500 bg-opacity-25 rounded-lg shadow-lg gap-2 overflow-hidden opacity-0">
      <div class="relative overflow-hidden">
        <img
          src="${project.image}"
          alt="${project.name}"
          class="w-full h-64 object-cover rounded-t-lg bg-slate-200 hover:object-contain"
        />
      </div>

      <div class="flex flex-col px-4 pb-4 gap-4">
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-slate-200">${project.name}</h3>
          <p class="text-slate-400 text-sm">${project.techstack.join(", ")}</p>
        </div>
        
        <div class="flex gap-4">
          ${
            project.url?.web
              ? `<a href="${project.url?.web}" name="${project.name}" target="_blank" title="Website" alt="${project.url?.web}" class="text-slate-400 hover:scale-125 hover:text-blue-500"><i class="fas fa-globe fa-lg"></i></a>`
              : ""
          }
          ${
            project.url?.playstore
              ? `<a href="${project.url?.playstore}" name="${project.name}" target="_blank" title="Google Play Store" alt="${project.url?.playstore}" class="text-slate-400 hover:scale-125 hover:text-blue-500"><i class="fab fa-google-play fa-lg"></i></a>`
              : ""
          }
          ${
            project.url?.appstore
              ? `<a href="${project.url?.appstore}" name="${project.name}" target="_blank" title="Apple App Store" alt="${project.url?.appstore}" class="text-slate-400 hover:scale-125 hover:text-blue-500"><i class="fab fa-app-store fa-lg"></i></a>`
              : ""
          }
        </div>
      </div>
    </div>
  `;
});
