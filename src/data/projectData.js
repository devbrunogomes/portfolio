import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"


export const projectData = [
  {
    id: 1,
    title: "OnFocus",
    description:
      "As vezes manter o foco pode ser difícil, por isso, essa aplicação foi pensada para poder cronometrar o tempo que o usuário deve passar focado, e o tempo que deve descansar, pois a vida é um constante equilibrio, não é mesmo?",
    stack: "React, Vercel",
    image: project1,
    site: "",
    github: "",
    reverse: false,
  },
  {
    id: 2,
    title: "ForYou Shop",
    description:
      "Essa é uma página de e-commerce fake, utilizando uma base de dados de uma API de produtos fakes. Possuindo um carrinho de compras funcional onde é possivel remover os produtos, ver o total e esvaziar o carrinho",
    stack: "React, Redux, Styled Components, Vercel",
    image: project2,
    site: "",
    github: "",
    reverse: true,
  },
  {
    id: 3,
    title: "AtmosView",
    description:
      "Aplicação feita para consultar o clima de qualquer lugar do mundo. Consome uma API externa para trazer as informações da localidade inserida pelo usuário, exbindo-as dinamicamente.",
    stack: "Javascript Vanilla, Typescript, Vercel",
    image: project3,
    site: "",
    github: "",
    reverse: false,
  },
  {
    id: 4,
    title: "To Do List",
    description:
      "Pensando em produtividade, nada melhor que uma lista de tarefas. O insere uma tarefa a ser cumprida, a aplicação exibe informações como tarefas concluídas e pendentes. Cada tarefa pode ser marcada como concluída, excluída, sendo tudo funcional.",
    stack: "React, Typescript, SCSS, Vercel",
    image: project4,
    site: "",
    github: "",
    reverse: true,
  },
];
