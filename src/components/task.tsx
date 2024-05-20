import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskProps {
  id: number,
  content: string,
  concluded: boolean,
  onConcludeATask: (id: number) => void,
  onDeleteATask: (id: number) => void
}

export function Task({ id, content, concluded, onConcludeATask, onDeleteATask }: TaskProps) {
  return (
    <div className={!concluded ? styles.taskContainer : styles.taskContainerConcluded}>
      <div
        className={!concluded ? styles.taskStatus : styles.taskStatusConcluded}
        onClick={() => onConcludeATask(id)}
      >
        {!concluded ? (
          <Circle width={24} height={24} />
        ) : (
          <CheckCircle width={24} height={24} />
        )}
      </div>
      <span
        className={!concluded ? styles.taskInformation : styles.taskInformationConcluded}
        onClick={() => onConcludeATask(id)}
      >
        {content}
      </span>
      <button
        type="button"
        className={styles.deleteTaskButton}
        onClick={() => onDeleteATask(id)}
      >
        <Trash width={24} height={24} />
      </button>
    </div>
  )
}