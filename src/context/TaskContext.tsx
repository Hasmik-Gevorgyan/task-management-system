import { createContext } from "react";

const TaskContext = createContext({} as any);

const TaskProvider = ({value, children}: any) => {
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider };