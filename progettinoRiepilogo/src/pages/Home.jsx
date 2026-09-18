import useTitolo from '../hooks/useTitolo'
import styles from './Home.module.css'

export default function Home() {
  useTitolo('Home - Mini Sito')

  return (
    <div className={styles.pagina}>
      <h1>Benvenuto</h1>
      <p>Questa è la home page del mini sito.</p>
    </div>
  )
}
