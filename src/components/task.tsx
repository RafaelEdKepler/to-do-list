import { Circle, Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskProps {
  content: string,
  concluded: boolean
}

export function Task({ content, concluded }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskStatus}>
        <Circle width={24} height={24} />
      </div>
      <span className={styles.taskInformation}>
        {content}
      </span>
      <div className={styles.trembleAnimation}>
        <button type="button" className={styles.deleteTaskButton}>
          <Trash width={24} height={24} />
        </button>
      </div>
    </div>
  )
}