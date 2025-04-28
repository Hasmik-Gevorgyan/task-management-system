import { TaskContext } from '../../context/TaskContext';
import { TaskType } from '../../types/task';
import TaskCard from '../TaskCard';
import { useContext } from 'react';

interface TaskColumnProps {
  status: {name: string, id: string};
  tasks: TaskType[];
  onCardClick?: (task: TaskType) => void;
}

const TaskColumn = ({status, tasks,onCardClick}: TaskColumnProps) => {
    const { dispatch } = useContext(TaskContext);

    const addTask = () => {
        dispatch({ type: 'add_task', payload: { id: Date.now(), title: 'Task Name', description: 'some description', status: status.id, assignedTo: '', priority: '' } });
    }
    
    return (
        <div className="task-column" >
            <h2>{status.name}</h2>
            {tasks.map((task: any) => (
                <TaskCard key={task.id} {...task} onCardClick={onCardClick}/>
            ))}
            <button className="add-task-button" onClick={addTask}>
                Add Task +
            </button>
        </div>
    );
}

export default TaskColumn;