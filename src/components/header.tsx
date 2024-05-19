import styles from "./header.module.css";

import ToDoListLogo from "../assets/Logo.svg";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={ToDoListLogo} alt="Logo da aplicação" />
    </div>
  )
}