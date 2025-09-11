import styles from './App.module.css'

function App() {
  return (
    <div className={styles.calculator}>
      <input id="display" type="text" readOnly />
      <div className={styles.buttonsContainer}>
        <button>C</button>
      </div>
    </div>
  )
}

export default App
