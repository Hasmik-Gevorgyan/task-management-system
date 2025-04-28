import { STATUSES, PRIORITIES, ASSIGNEES } from "../../constants";
import { TaskContext } from "../../context/TaskContext";
import { useContext, useState } from "react";
import Dropdown from "../Dropdown";

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    assignedTo: string;
}

const TaskCard = ({ id, title, description, priority, status, assignedTo }: TaskCardProps) => {
    const { dispatch } = useContext(TaskContext);
    const [editingField, setEditingField] = useState<"title" | "description" | null>(null);
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);

    const onEditTask = (payload: any) => {
        dispatch({ type: 'edit_task', payload});
    }
    const onPriorityChange = (value: string) => {
        onEditTask({ id, priority: value });
    }
    const onStatusChange = (value: string) => {
        onEditTask({ id, status: value });
    }
    const onAssigneeChange = (value: string) => {
        onEditTask({ id, assignedTo: value });
    }

    return (
        <div className="task-card">
            <div className="task-card-title">
                {editingField === "title" ? (
                    <input
                        type="text"
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                        onBlur={() => {
                            dispatch({ type: 'edit_task', payload: { id, title: titleValue }});
                            setEditingField(null);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch({ type: 'edit_task', payload: { id, title: titleValue }});
                                setEditingField(null);
                            }
                            if (e.key === "Escape") {
                                setTitleValue(title);
                                setEditingField(null);
                            }
                        }}
                        autoFocus 
                    />
                ) : (
                    <h3 onClick={() => setEditingField("title")}>{title}</h3>
                )}
            </div>
            <div className="task-card-description">
                {editingField === "description" ? ( 
                    <textarea
                        value={descriptionValue}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                        onBlur={() => {
                            dispatch({ type: 'edit_task', payload: { id, description: descriptionValue }});
                            setEditingField(null);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch({ type: 'edit_task', payload: { id, description: descriptionValue }});
                                setEditingField(null);
                            }
                            if (e.key === "Escape") {
                                setDescriptionValue(description);
                                setEditingField(null);
                            }
                        }}
                        autoFocus
                    />
                ) : (
                    <p onClick={() => setEditingField("description")}>{description}</p>
                )}
            </div>
            <Dropdown options={PRIORITIES} defaultValue={priority} label="Priority" onChange={onPriorityChange} />
            <Dropdown options={STATUSES} defaultValue={status} label="Status" onChange={onStatusChange} />
            <Dropdown options={ASSIGNEES} defaultValue={assignedTo} label="Assignee" onChange={onAssigneeChange} />
            <div className="task-card-button">
                <button onClick={()=> dispatch({type: 'delete_task', payload: {id}})}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;