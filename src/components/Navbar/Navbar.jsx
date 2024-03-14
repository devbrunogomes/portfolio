import styles from "./styles.module.scss"

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div>
          <h2>LOGO</h2>
        </div>
        <ul>
          <li><a href="">Sobre</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Contato</a></li>
        </ul>

      </nav>
    </header>
  )
}