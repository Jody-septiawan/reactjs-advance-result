import styles from "./CssModule.module.css";
function CssModular() {
  return (
    <div className={styles.textCenter}>
      <p className={styles.textBigAqua}>This is Blue</p>
      <p className={styles.textMediumTomato}>This is Orange</p>
      <p className={styles.textColorViolet}>This is Chocolate</p>
    </div>
  );
}

export default CssModular;
