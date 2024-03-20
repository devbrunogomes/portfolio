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
      </nav>
    </header>
  );
};
