// initial state (store)

import {ADD_TASK, DELETE_TASK} from "./actions";

const initialState = {
    data: [
        {
            id: 1,
            title: 'Buy milk'
        }
    ],
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            const newState = {
                data: [
                    ...state.data,
                    action.payload
                ]
            }
            return newState;

        case DELETE_TASK:
            //.....

        default:
            return state;
    }
}