import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttons = [
    "C", "1", "2", "+",
    "-", "3", "4", "5",
    "*", "6", "7", "8",
    "/", "9", "=", ".",
    "0"
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`${styles.button} 
            ${/[+\-*/=]/.test(btn) ? styles.operator : ""} 
            ${btn === "0" ? styles.zero : ""}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
