import pantry from "../assets/images/pantry.png";
import chewview from "../assets/images/chew-view.png";
import nasteroids from "../assets/images/nasteroids.png";

export const info = {
  technologies: [
    {
      icon: "devicon-html5-plain",
      name: "HTML",
      category: "language",
    },
    {
      icon: "devicon-css3-plain",
      name: "CSS",
      category: "language",
    },
    {
      icon: "devicon-javascript-plain",
      name: "JavaScript",
      category: "language",
    },
    {
      icon: "devicon-nodejs-plain",
      name: "NodeJs",
      category: "language",
    },
    {
      icon: "devicon-react-original",
      name: "React",
      category: "framework",
    },
    {
      icon: "devicon-jquery-plain",
      name: "jQuery",
      category: "framework",
    },
    {
      icon: "devicon-express-original",
      name: "Express",
      category: "framework",
    },
    {
      icon: "devicon-bootstrap-plain",
      name: "Bootstrap",
      category: "framework",
    },
    {
      icon: "devicon-handlebars-plain",
      name: "Handlebars",
      category: "framework",
    },
    {
      icon: "devicon-mongodb-plain",
      name: "Mongodb",
      category: "database",
    },
    {
      icon: "devicon-firebase-plain",
      name: "Firebase",
      category: "database",
    },
    {
      icon: "devicon-mysql-plain",
      name: "MySql",
      category: "database",
    },
    {
      icon: "devicon-graphql-plain",
      name: "Graphql",
      category: "database",
    },
    {
      icon: "devicon-figma-plain",
      name: "Figma",
      category: "design",
    },
    {
      icon: "devicon-photoshop-plain",
      name: "Photoshop",
      category: "design",
    },
    {
      icon: "devicon-illustrator-plain",
      name: "Illustrator",
      category: "design",
    },
    {
      icon: "devicon-heroku-original",
      name: "Heroku",
      category: "other",
    },
    {
      icon: "devicon-git-plain",
      name: "Git",
      category: "other",
    },
    {
      icon: "bi bi-code",
      name: "Restful APIs",
      category: "other",
    },
    {
      icon: "devicon-jest-plain",
      name: "Jest",
      category: "other",
    },
  ],
  socials: [
    {
      link: "https://github.com/katiechurchwell/",
      icon: "bi bi-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/katiechurchwell/",
      icon: "bi bi-linkedin",
      label: "linkedin",
    },
    {
      link: "mailto:churchwellcatherine@gmail.com",
      icon: "bi bi-envelope",
      label: "email",
    },
  ],
  portfolio: [
    {
      title: "Pantry",
      live: "https://whispering-reef-71968.herokuapp.com/",
      source: "https://github.com/katiechurchwell/Pantry",
      image: pantry,
      description:
        "Utilizes a back end with servers, databases, advanced APIs and user authentication. Allows the user to search for recipes by ingredient.",
    },
    {
      title: "Chew View",
      live: "https://katiechurchwell.github.io/Chew-View/",
      source: "https://github.com/katiechurchwell/Chew-View",
      image: chewview,
      description:
        "Allows the user to search for local restaurants and movies to watch. Built using the Travel Advisor and TMDB Movie Database APIs, Bootstrap and JavaScript.",
    },
    {
      title: "NASATEROIDS",
      live: "https://nasteroids.herokuapp.com/",
      source: "https://github.com/ChrisKurz098/NASAteroids/",
      image: nasteroids,
      description:
        "A recreation of the 1979 Atari game built in React. This application utilizes MUI components and an NES-style CSS frame work for UI, MongoDB and GraphQL for database models and API queries.",
    },
  ],
};
