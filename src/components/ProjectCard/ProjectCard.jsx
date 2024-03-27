import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";

export const ProjectCard = (props) => {
  const  language  = useSelector((rootReducer) => rootReducer.languageReducer.isEnglish);
  const dispatch = useDispatch();


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
                 <span>{language ? "Visit Site" : "Visitar Site"}</span>
              </a>
              <a href={props.github} target="_blank">
                {language ? "Go to Github" : "Ir ao Github"}
              </a>
            </div>
          </div>

          <img src={props.image} alt="" loading="lazy" />
        </div>
      </div>
    </article>
  );
};
