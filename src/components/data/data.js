const projects = [
  {
    name: "Large Social Media",
    url: "https://github.com/vlsalina/large-social-media-app-client",
    date: "January 2022",
    description:
      "Constructed a full-stack open publishing platform where users can read, write, favorite, and like articles from an array of different topics.",
    bullets: [
      "Leveraged the use of JSON web tokens to authenticate user actions after successful log in.",
      "Employed the use of Redux to maintain and update user and articles states.",
      "Utilized React-Draft-WYSIWYG editor to allow extensive customization of article content as desired by users.",
    ],
  },
  {
    name: "Audiophile",
    url: "https://github.com/vlsalina/audiophile-ecommerce-client",
    date: "February 2022",
    description:
      "E-commerce website where users can browse a selection of the latest audio technologies, add them to a cart, and experience the entire checkout process upon ordering.",
    bullets: [
      "Constructed using mobile-first approach to emphasize development of core functionalities first and foremost.",
      "Employed the use of Mongoose on top of MongoDB to make the process of designing product models much easier and extendable.",
      "Made extensive use of flex-box to support responsive design, especially for the order form component upon checkout.",
    ],
  },
  {
    name: "Pet Rescue",
    url: "https://github.com/vlsalina/pet-rescue-website",
    date: "February 2022",
    description:
      "A non-profit pet rescue website with the goal of creating an attractive, animated, yet simple front page design.",
    bullets: [
      "Made use of popular design tools such as Figma to bring website from concept design to production.",
      "Leveraged the use of GSAP to create a more delightful and refreshing user experience.",
      "Implemented fade-in and fade-out effects for sponsor logos with the help of IntersectionObserver.",
    ],
  },
];

const skills = {
  frontend: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "React.js" },
    { name: "Redux" },
    { name: "GSAP" },
  ],
  backend: [
    { name: "MongoDB" },
    { name: "Express.js" },
    { name: "Node.js" },
    { name: "Mongoose" },
    { name: "JSON Web Tokens" },
  ],
  tools: [{ name: "Git" }],
};

const mailTo = `mailto:vincent.salinas.2022@googlemail.com`;

export { projects, skills, mailTo };
