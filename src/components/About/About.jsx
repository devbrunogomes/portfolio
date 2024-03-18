import styles from "./styles.module.scss";
import fotoPerfil from "../../assets/foto-perfil.jpeg";

export const About = (props) => {
  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.nameLogoWrapper}>
        <div className={styles.titlesWrapper}>
          <h1>BRUNO</h1>
          <h2>GOMES</h2>
          <hr />
          <h3>DEV FRONTEND</h3>
        </div>
        <div className={styles.imagem}>
          <img src={fotoPerfil} alt="" />
        </div>
      </div>
      <div className={styles.apresentation}>
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
