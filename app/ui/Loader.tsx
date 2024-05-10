import styles from "./spinner.module.css";

export default function Loader() {
  return (
    <div className="grid place-items-center">
      <div className={styles.spinner}></div>
    </div>
  );
}
