import styles from "./styles.module.scss"

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div>
          <h2>LOGO</h2>
        </div>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contacts">Contato</a></li>
        </ul>

      </nav>
    </header>
  )
}