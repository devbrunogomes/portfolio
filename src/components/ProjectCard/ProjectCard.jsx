import styles from "./styles.module.scss";
import project1 from "../../assets/project1.png";

export const ProjectCard = (props) => {
  return (
    <article className={styles.card}>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div
          className={
            props.reverse
              ? `${styles.reverse} ${styles.contentTextImgWrapper}`
              : `${styles.contentTextImgWrapper}`
          }
        >
          <div className={styles.contentTextWrapper}>
            <div className={styles.titleWrapper}>
              <h1>{props.id < 10 ? `0${props.id}` : `${props.id}`}</h1>
              <h2>{props.title}</h2>
            </div>

            <p>{props.description}</p>

            <div className={styles.stacks}>
              <h4>Stack:</h4>
              <span>{props.stack}</span>
            </div>

            <div className={styles.links}>
              <a href={props.site} target="_blank" id={styles.visitSite}>
                 <span>Visit Site</span>
              </a>
              <a href={props.github} target="_blank">
                Go To GitHub
              </a>
            </div>
          </div>

          <img src={props.image} alt="" loading="lazy" />
        </div>
      </div>
    </article>
  );
};
