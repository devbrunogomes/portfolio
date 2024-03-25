import styles from "./styles.module.scss";
import { TbDeviceDesktopHeart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/LanguageReducer/languageSlice";

export const Navbar = () => {
  const  language  = useSelector((rootReducer) => rootReducer.languageReducer.isEnglish);
  const dispatch = useDispatch();

  console.log(language);

  return (
    <header className={styles.container}>
      <nav>
        <div>
          <h2>BG.</h2>
          <TbDeviceDesktopHeart />
        </div>

        <div>
        <button
          onClick={() => {
            dispatch(toggleLanguage({}));
          }}
        >
          {language ? "PT/BR" : "EN/US"}
        </button>

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
        </div>
      </nav>
    </header>
  );
};
