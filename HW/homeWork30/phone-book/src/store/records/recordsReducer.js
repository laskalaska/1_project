import {ADD_RECORD, DELETE_RECORD} from "./actions";

const initialState = {
    data: [
        {
            id: 1,
            firstName: "Leanne",
            lastName: "Graham",
            phone: "110-692-6593",
        },
        {
            id: 2,
            firstName: "Ervin",
            lastName: "Howell",
            phone: "310-545-6582",
        },
        {
            id: 3,
            firstName: "John",
            lastName: "Doe",
            phone: "520-542-1462",
        }
    ]
};

export default function recordsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RECORD:
            const newState = {
                data: [
                    ...state.data,
                    action.payload
                ]
            }
            return newState;

        case DELETE_RECORD:
            const filteredState = state.data.filter(record => record.id !== action.payload);
            return {data: filteredState};


        default:
            return state;
    }
}