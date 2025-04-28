export const PRIORITIES = [
    {id: 'low', name: 'Low'},
    {id: 'medium', name: 'Medium'},
    {id: 'high', name: 'High'},
];

export const STATUSES = [
    {id: 'todo', name: 'To Do'},
    {id: 'doing', name: 'Doing'},
    {id: 'done', name: 'Done'},
    {id: 'blocked', name: 'Blocked'},
];

export const ASSIGNEES = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Anna Smith"},
    {id: 3, name: "Sam Wilson"},
    {id: 4, name: "Peter Parker"},
    {id: 5, name: "Clark Kent"},
];

export const ACTIONS = {
    ADD_TASK: 'add_task',
    EDIT_TASK: 'edit_task',
    MOVE_TASK: 'move_task',
    DELETE_TASK: 'delete_task',
};

export const initialState = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description for Task 1',
        status: 'todo',
        assignedTo: 1,
        priority: 'high',
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        status: 'doing',
        assignedTo: 2,
        priority: 'medium',
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description for Task 3',
        status: 'done',
        assignedTo: 3,
        priority: 'low',
    },
    {
        id: 4,
        title: 'Task 4',
        description: 'Description for Task 3',
        status: 'blocked',
        assignedTo: 4,
        priority: 'high',
    },
];
