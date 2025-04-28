import {reducer, initialState} from './context/taskReducer';
import { TaskProvider } from './context/TaskContext'
import TaskBoard from './components/TaskBoard';
import { useEffect, useReducer } from 'react'
import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem("tasks_board");
    return stored ? JSON.parse(stored) : initialState;
  });
  
  useEffect(() => {
    localStorage.setItem("tasks_board", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskProvider value={{tasks, dispatch}}>
      <h1>Task Managment</h1>
      <TaskBoard />
    </TaskProvider>
  )
}

export default App;
