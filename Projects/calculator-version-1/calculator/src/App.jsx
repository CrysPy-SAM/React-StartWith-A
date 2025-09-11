import styles from './App.module.css'

function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" readOnly />
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonsContainer}>C</button>
        <button className={styles.buttonsContainer}>D</button>
        <button className={styles.buttonsContainer}>E</button>
        <button className={styles.buttonsContainer}>F</button>
      </div>
    </div>
  )
}

export default App
