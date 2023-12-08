import {ADD_TASK} from "../tasks/actions";

const initialState = {
    user: {
        id: 1,
        name: 'John',
        assignedTasks: []
    }
};

export default function currentUserReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            const newState = {
                user: {
                    ...state.user,
                    assignedTasks: [
                        ...state.user.assignedTasks,
                        action.payload.id
                    ]
                }
            }
            return newState;

        default:
            return state;
    }
}