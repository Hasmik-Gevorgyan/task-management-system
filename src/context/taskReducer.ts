import { ACTIONS, initialState } from "../constants";

const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.ADD_TASK:
            return [...state, payload];
        case ACTIONS.EDIT_TASK:
            return state.map((task: any) =>
                    task.id === payload.id ? { ...task, ...payload } : task
                );
        case ACTIONS.MOVE_TASK:
            return state.map((task: any) =>
                    task.id === payload.id ? { ...task, status: payload.status } : task
                );
        case ACTIONS.DELETE_TASK:
            console.log('delete task', payload);
            return state.filter((task: any) => task.id !== payload.id);
        default:
            return state;
    }
}

export { reducer, initialState };