import styles from "./styles.module.scss";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contacts = (props) => {
  return (
    <footer id={props.id} className={styles.container}>
      <div className={styles.title}>
        {/* <h1>CONTACTS </h1> */}

        <div className={styles.iconTitle}>
          <MdMarkUnreadChatAlt />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h1>LET'S WORK TOGETHER</h1>

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
