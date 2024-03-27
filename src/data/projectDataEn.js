import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export const projectDataEn = [
  {
    id: 1,
    title: "OnFocus",
    description:
      "Sometimes, maintaining focus can be challenging. That's why this application was designed to allow users to time their focused work sessions and breaks, because life is all about finding that balance, isn't it?",
    stack: "React, Vercel",
    image: project1,
    site: "https://onfocus-timer.vercel.app/",
    github: "https://github.com/devbrunogomes/pomodoro-timer",
    reverse: false,
  },
  {
    id: 2,
    title: "To Do List",
    description:
      "When it comes to productivity, nothing beats a to-do list. You input a task to be completed, and the application displays information such as completed and pending tasks. Each task can be marked as completed or deleted, making everything fully functional.",
    stack: "React, Typescript, SCSS, Vercel",
    image: project4,
    site: "https://todolistbsg.vercel.app/",
    github: "https://github.com/devbrunogomes/todo-list",
    reverse: true,
  },

  {
    id: 3,
    title: "AtmosView",
    description:
      "An application made to check the weather of any place in the world. It consumes an external API to fetch information about the location entered by the user, displaying it dynamically.",
    stack: "Javascript Vanilla, Typescript, Vercel",
    image: project3,
    site: "https://atmosview-bsg.vercel.app/",
    github: "https://github.com/devbrunogomes/condicoes-do-clima",
    reverse: false,
  },

  {
    id: 4,
    title: "ForYou Shop",
    description:
      "This is a fake e-commerce page, utilizing a database from a fake product API. It features a functional shopping cart where users can remove products, view the total, and empty the cart.",
    stack: "React, Redux, Styled Components, Vercel",
    image: project2,
    site: "https://foryoushop.vercel.app/",
    github: "https://github.com/devbrunogomes/ecommerce-page",
    reverse: true,
  },
];
