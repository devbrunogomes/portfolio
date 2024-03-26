import styles from "./styles.module.scss";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const Contacts = (props) => {
  const  language  = useSelector((rootReducer) => rootReducer.languageReducer.isEnglish);
  const dispatch = useDispatch();

  return (
    <footer id={props.id} className={styles.container}>
      <div className={styles.title}>
        {/* <h1>CONTACTS </h1> */}

        <div className={styles.iconTitle}>
          <MdMarkUnreadChatAlt />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h1>{language ? "LET'S WORK TOGETHER" : "ENTRE EM CONTATO"}</h1>

        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/bruno-gomes-bsg97/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/devbrunogomes" target="_blank">
            <FaGithub />
          </a>
          <a href="https://wa.me/5571999382109" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};
