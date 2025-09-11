import styles from "./Display.module.css";

const buttonsContainer = () =>{
    return(
    <div className={styles.buttonsContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>D</button>
        <button className={styles.button}>E</button>
        <button className={styles.button}>F</button>
      </div>
    );
}

export default buttonsContainer; 