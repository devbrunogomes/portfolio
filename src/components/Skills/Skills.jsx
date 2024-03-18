import styles from "./styles.module.scss";
import { GiEnergyArrow } from "react-icons/gi";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const Skills = (props) => {
  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.title}>
        <h1>SKILLS </h1>

        <div className={styles.iconTitle}>
          <GiEnergyArrow />
        </div>
      </div>

      <div className={styles.iconsWrapper}>
        <div className={styles.icons}>
          <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <SiTypescript /> <FaReact /> <FaGitAlt />
        </div>
      </div>
    </section>
  );
};
