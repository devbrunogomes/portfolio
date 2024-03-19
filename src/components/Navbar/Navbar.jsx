import styles from "./styles.module.scss";
import { TbDeviceDesktopHeart } from "react-icons/tb";


export const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div>
          <h2>BG.</h2>
          <TbDeviceDesktopHeart />

        </div>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contacts">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
