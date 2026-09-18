import { Link } from 'react-router'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/chi-siamo" className={styles.link}>Chi siamo</Link>
      <Link to="/contatti" className={styles.link}>Contatti</Link>
    </nav>
  )
}
