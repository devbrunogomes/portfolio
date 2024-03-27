import styles from "./styles.module.scss";
import fotoPerfil from "../../assets/foto-perfil.jpeg";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { GrDocumentDownload } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa";

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
            <a href="https://drive.google.com/file/d/1zOsAPA5rrtc6_vmXUbjGSuTHhgwHfMzt/view?usp=sharing" target="_blank" >

            <div className={styles.downloadCV}>
              {/* <a
                href="https://drive.google.com/file/d/1ciCbSlOgc_f0q03QHVxMVs7BT8rl12Y_/view?usp=sharing"
                target="_blank"
              > */}
                <span>
                  CV <FaRegFilePdf />

                </span>
              {/* </a> */}
            </div>
            </a>
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
            <span>{language ? "Hello," : "Olá,"}</span>
            <br />{" "}
            {language
              ? "I'm Bruno, 26 years old, and I recently embarked on this journey into the world of programming. I consider myself a creative, dedicated, and self-motivated person. I love sitting at the computer and bringing my ideas to life through the tools I have, which today are HTML, CSS, Javascript, and React. Often, I encounter challenges, which only motivates me further to find new paths and acquire new skills. My mission is to solve problems and make life a little simpler through technology."
              : "Eu sou Bruno, tenho 26 anos, e há pouco tempo embarquei nessa jornada no mundo da programação. Me considero uma pessoa criativa, compromissada e auto motivada. Adoro sentar no computador e colocar em prática minhas ideias através das ferramentas que eu tenho, que hoje são HTML, CSS, Javascript e React. Diversas vezes eu encontro um desafio, o que só me deixa mais motivado a encontrar novos caminhos e adquirir novas habilidades. Minha missão é resolver problemas e deixar a vida um pouco mais simples, através da tecnologia. "}
          </p>
        </div>
      </div>
    </section>
  );
};
