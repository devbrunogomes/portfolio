import styles from "./styles.module.scss";
import fotoPerfil from "../../assets/foto-perfil.jpeg";
import { BsFileEarmarkPerson } from "react-icons/bs";

import { GrDocumentDownload } from "react-icons/gr";



export const About = (props) => {
  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.nameLogoWrapper}>
        <div className={styles.titlesWrapper}>
          <h1>BRUNO</h1>
          <h2>GOMES</h2>
          <hr />
          <h3>DEV FRONTEND</h3>
          <a href="https://drive.google.com/file/d/1ciCbSlOgc_f0q03QHVxMVs7BT8rl12Y_/view?usp=sharing" target="_blank">
            Curriculo <GrDocumentDownload />
          </a>
        </div>
        <div className={styles.imagem}>
          <img src={fotoPerfil} alt="" />
        </div>
      </div>
      <div className={styles.apresentation}>
        <div className={styles.iconTitle}>
          <BsFileEarmarkPerson />
        </div>

        <p>
          {" "}
          <span>Olá,</span>
          <br /> Estou à procura de minha primeira oportunidade no mundo da
          programação, onde eu consiga colocar em prática meus conhecimentos em
          HTML, CSS, Javascript e React, afim de desenvolver interfaces de
          usuário que sejam eficientes, interativas e responsivas. Me sinto
          extremamente motivado a integrar uma equipe dinámica e ágil,
          contribuindo de forma ativa, ao passo que aprimoro meus conhecimentos
          de acordo com as experiências práticas.
        </p>
      </div>
    </section>
  );
};
