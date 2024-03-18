import styles from "./styles.module.scss";
import project1 from "../../assets/project1.png"

export const ProjectCard = (props) => {
  return (
    <article className={styles.container}>
      <div className={`${styles.contentTextImgWrapper}`}>
        <div className={styles.contentTextWrapper}>
          <div className={styles.titleWrapper}>
            <h1>01</h1>
            <h2>OnFocus</h2>
          </div>

          <p>As vezes manter o foco pode ser difícil, por isso, essa aplicação foi pensada para poder cronometrar o tempo que o usuário deve passar focado, e o tempo que deve descansar, pois a vida é um constante equilibrio, não é mesmo?</p>

          <div className={styles.stacks}>
            <h4>Stack:</h4>
            <span>React, Vercel</span>
          </div>

          <div className={styles.links}>
            <a href="" target="_blank">Visit Site</a>
            <a href="" target="_blank">Go To GitHub</a>
          </div>
        </div>


        <img src={project1} alt="" />
      </div>
    </article>
  );
};
