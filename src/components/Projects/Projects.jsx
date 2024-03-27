import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import { FaFileCode } from "react-icons/fa";
import { projectData } from "../../data/projectData"
import { projectDataEn } from "../../data/projectDataEn"
import { useDispatch, useSelector } from "react-redux";

export const Projects = (props) => {
  const  language  = useSelector((rootReducer) => rootReducer.languageReducer.isEnglish);
  const dispatch = useDispatch();

  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.title}>
        <div className={styles.iconTitle}>
          <FaFileCode />
        </div>

        <h1>{language ? "PROJECTS" : "PROJETOS"}</h1>
      </div>
      {!language ?  projectData.map((project) => {
        return (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            site={project.site}
            github={project.github}
            reverse={project.reverse}
            
          />
        )
      }) : projectDataEn.map((project) => {
        return (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            site={project.site}
            github={project.github}
            reverse={project.reverse}
            
          />
        )
      }) }

      {/* {projectData.map((project) => {
        return (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            site={project.site}
            github={project.github}
            reverse={project.reverse}
            
          />
        )
      })} */}
    </section>
  );
};
