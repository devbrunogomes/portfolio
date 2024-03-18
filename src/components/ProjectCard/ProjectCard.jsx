import styles from "./styles.module.scss";

export const ProjectCard = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.contentTextImgWrapper}>
        <div className={styles.contentTextWrapper}>
          <div className={styles.titleWrapper}>
            <h1>01</h1>
            <h2>School of Walk</h2>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet, cum sit aspernatur quas veritatis? Illo ex maxime quasi qui accusamus praesentium odit aliquid fuga exercitationem quidem asperiores, placeat nihil?</p>
        </div>
        <div className={styles.imagem}></div>
      </div>
    </article>
  );
};
