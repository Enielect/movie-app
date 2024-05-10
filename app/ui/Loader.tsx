import styles from "./spinner.module.css";

export default function Loader() {
  return (
    <div>
      <div className={styles.spinner}></div>
    </div>
  );
}
