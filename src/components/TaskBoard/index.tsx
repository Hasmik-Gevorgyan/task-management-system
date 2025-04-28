import { TaskContext } from "../../context/TaskContext";
import {STATUSES} from "../../constants";
import TaskColumn from "../TaskColumn";
import { useContext } from "react";

const TaskBoard = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-board">
      {STATUSES.map((column) => (
        <TaskColumn
          key={column.id}
          status={column}
          tasks={tasks.filter((task: any) => task.status === column.id)}
        />
      ))}
    </div>
  );
}

export default TaskBoard;