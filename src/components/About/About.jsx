import styles from "./styles.module.scss";
import fotoPerfil from "../../assets/foto-perfil.jpeg";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { GrDocumentDownload } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/LanguageReducer/languageSlice";
import { showStartSlice } from "../../redux/LanguageReducer/showStartSlice";

export const About = (props) => {
  const language = useSelector(
    (rootReducer) => rootReducer.languageReducer.isEnglish
  );
  const dispatch = useDispatch();

  //Para trazer o estado que determina se a section Start deve ser exibida
  const showStart = useSelector(
    (rootReducer) => rootReducer.showStartReducer.isShowStart
  );

  return (
    <section id={props.id} className={styles.container}>
      {/* <div
        id="aboutStart"
        className={`${showStart ? styles.start : styles.displayNone}`}
      >
        <div>
          <a
            href="#aboutInfo"
            onClick={() => {
              setTimeout(() => {
                dispatch(showStartSlice.actions.hideStart({}));
              }, 600);
            }}
          >
            {language ? "START" : "INICIAR"}
          </a>
        </div>
      </div> */}
      <div className={styles.aboutContainer}>
        <div className={styles.nameLogoWrapper} id="aboutInfo">
          <div className={styles.titlesWrapper}>
            <h1>BRUNO</h1>
            <h2>GOMES</h2>
            <hr />
            <h3>DEV FRONTEND</h3>
            <div className={styles.downloadCV}>
              <a
                href="https://drive.google.com/file/d/1ciCbSlOgc_f0q03QHVxMVs7BT8rl12Y_/view?usp=sharing"
                target="_blank"
              >
                <span>
                  Curriculo <GrDocumentDownload />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.imagem}>
            <img src={fotoPerfil} alt="" loading="lazy" />
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
            programação, onde eu consiga colocar em prática meus conhecimentos
            em HTML, CSS, Javascript e React, afim de desenvolver interfaces de
            usuário que sejam eficientes, interativas e responsivas. Me sinto
            extremamente motivado a integrar uma equipe dinámica e ágil,
            contribuindo de forma ativa, ao passo que aprimoro meus
            conhecimentos de acordo com as experiências práticas.
          </p>
        </div>
      </div>
    </section>
  );
};
