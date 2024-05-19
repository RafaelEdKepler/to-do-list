import { Header } from './components/header';

import { PlusCircle } from 'phosphor-react';
import Clipboard from './assets/Clipboard.svg';

import styles from "./app.module.css";
import './global.css';
import { Task } from './components/task';
import { ChangeEvent, useState } from 'react';

interface TasksInterface {
  content: string;
  concluded: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TasksInterface[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const handleNewTaskText = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  }

  const handleCreateNewTask = () => {
    setTasks([...tasks, {
      content: newTaskText,
      concluded: false
    }])
    setNewTaskText("");
  }

  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <div className={styles.inputContainer}>
          <input value={newTaskText} onChange={handleNewTaskText} placeholder='Adicione uma nova tarefa' />
          <button type='button' onClick={handleCreateNewTask}>
            <div className={styles.buttonContainer}>
              <span>Criar</span>
              <PlusCircle />
            </div>
          </button>
        </div>
        <div className={styles.tasksInfoContainer}>
          <div>
            <strong>Tarefas Criadas</strong>
            <span>0</span>
          </div>
          <div>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
        <div className={styles.taskBoardContainer}>
          {tasks && tasks.length > 0 ? tasks?.map(task => (
            <Task key={task.content} content={task.content} concluded={task.concluded} />
          )) : (
            <>
              <img src={Clipboard} alt="Logo de agenda vazia" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
