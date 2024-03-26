import styles from "./styles.module.scss";
import { TbDeviceDesktopHeart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/LanguageReducer/languageSlice";
import { showStartSlice } from "../../redux/LanguageReducer/showStartSlice";

export const Navbar = () => {
  //Para trazer o estado que determina o idioma
  const language = useSelector(
    (rootReducer) => rootReducer.languageReducer.isEnglish
  );
  const dispatch = useDispatch();

  //Para trazer o estado que determina se a section Start deve ser exibida
  const showStart = useSelector(
    (rootReducer) => rootReducer.showStartReducer.isShowStart
  );

  return (
    <header className={styles.container}>
      <nav>
        <div>
          <h2>BG.</h2>
          <TbDeviceDesktopHeart />
          {/* <a href="#aboutStart">
            <button
              onClick={() => {
                dispatch(showStartSlice.actions.showStart({}));
              }}
            >
              Restart
            </button>
          </a> */}
        </div>

        <div>
          

          <ul>
            <li>
              <a href="#aboutInfo">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>

          <button
            onClick={() => {
              dispatch(toggleLanguage({}));
            }}
          >
            {language ? "PT/BR" : "EN/US"}
          </button>
        </div>
      </nav>
    </header>
  );
};
