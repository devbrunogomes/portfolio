import styles from "./styles.module.scss";
import { GiEnergyArrow } from "react-icons/gi";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/LanguageReducer/languageSlice";


export const Skills = (props) => {
  const  language  = useSelector((rootReducer) => rootReducer.languageReducer.isEnglish);
  const dispatch = useDispatch();


  return (
    <section id={props.id} className={styles.container}>
      <div className={styles.title}>
        <h1>{language ? "SKILLS" : "HABILIDADES"} </h1>

        <div className={styles.iconTitle}>
          <GiEnergyArrow />
        </div>
      </div>

      <div className={styles.iconsWrapper}>
        <div className={styles.icons}>
          <div className={styles.htmlLogo}>
            <FaHtml5 />
          </div>
          <div className={styles.cssLogo}>
            <FaCss3Alt />
          </div>
          <div className={styles.jsLogo}>
            <IoLogoJavascript />
          </div>
          <div className={styles.tsLogo}>
            <BiLogoTypescript />
          </div>
          <div className={styles.reactLogo}>
            <FaReact />
          </div>
          <div className={styles.reduxLogo}>
            <SiRedux />
          </div>
          <div className={styles.gitLogo}>
            <FaGitAlt />
          </div>
        </div>
      </div>
    </section>
  );
};
