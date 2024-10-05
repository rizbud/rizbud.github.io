const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/rizbud",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rizbud",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ri_zbud",
    icon: "fab fa-x-twitter",
  },
  {
    name: "Email",
    url: "mailto:rizkibudi513@gmail.com",
    icon: "fas fa-envelope",
  },
];

// Get social media element from the DOM
const socialMediaEl = document.getElementById("social-media");

// Loop through social media data and render it to the DOM
socialMedia.forEach((item) => {
  socialMediaEl.innerHTML += `
    <a
      href="${item.url}"
      target="_blank"
      rel="noopener nofollow"
      title="${item.name}"
      alt="${item.url}"
      onclick="gtag('event', 'select_content', { content_type: 'social_media',  content_id: '${item.name}' })"
      class="hover:text-blue-500 hover:scale-125 transition duration-300 ease-in-out"
    >
      <i class="${item.icon} fa-lg"></i>
    </a>
  `;
});
