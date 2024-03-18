import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import { FaFileCode } from "react-icons/fa";

export const Projects = (props) => {
  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.title}>
        <div className={styles.iconTitle}>
          <FaFileCode />
        </div>

        <h1>PROJECTS</h1>
      </div>
      <ProjectCard/>
    </section>
  );
};
