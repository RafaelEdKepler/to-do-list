import { Header } from './components/header';

import { PlusCircle } from 'phosphor-react';
import Clipboard from './assets/Clipboard.svg';

import styles from "./app.module.css";
import './global.css';
import { Task } from './components/task';
import { ChangeEvent, useState } from 'react';

interface TasksInterface {
  id: number;
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
      id: tasks.length,
      content: newTaskText,
      concluded: false
    }])
    setNewTaskText("");
  }

  const concludeATask = (id: number) => {
    const tasksArray = tasks;
    tasksArray[id].concluded = !tasksArray[id].concluded;
    setTasks([...tasksArray]);
  }

  const deleteATask = (id: number) => {
    const tasksArray = tasks.filter(task => task.id !== id);
    setTasks([...tasksArray]);
  }

  const contConcludedTasks = () => {
    return tasks.filter((task) => task.concluded).length;
  }

  const handleIfConfirmed = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      handleCreateNewTask();
    }
  }

  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <div className={styles.inputContainer}>
          <input
            value={newTaskText}
            onKeyDown={handleIfConfirmed}
            onChange={handleNewTaskText}
            placeholder='Adicione uma nova tarefa'
          />
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
            <span>{tasks.length}</span>
          </div>
          <div>
            <strong>Concluídas</strong>
            <span>{contConcludedTasks()} de {tasks.length}</span>
          </div>
        </div>
        <div className={styles.taskBoardContainer}>
          {tasks && tasks.length > 0 ? tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              concluded={task.concluded}
              onConcludeATask={concludeATask}
              onDeleteATask={deleteATask}
            />
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
