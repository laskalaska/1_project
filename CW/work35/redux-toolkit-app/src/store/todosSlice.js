import {createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const todosAdapter = createEntityAdapter();

// const initialState = {
//     data: [],
// };

const initialState = todosAdapter.getInitialState();


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const response = await axios.get('http://localhost:3000/data.json');
        return response.data;
    }
);


export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: todosAdapter.addOne,
        deleteItem: todosAdapter.removeOne,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, todosAdapter.upsertMany
            )
            .addCase(fetchTodos.rejected, todosAdapter.removeAll)
    },
})
    // export const todosSlice = createSlice({
    // name: 'todos',
    // initialState,
    // reducers: {
    //     addItem: (state, action) => {
    //         state.data.push(action.payload);
    //     },
    //     deleteItem: (state, action) => {
    //         state.data = state.data.filter(item => item.id != action.payload.id);
    //     },
    // },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchTodos.fulfilled, (state, action) => {
    //             state.data = action.payload
    //         })
    //         .addCase(fetchTodos.rejected, (state, action) => {
    //             state.data = []
    //         })
    // },
    // extraReducers: {
    //     [fetchTodos.fulfilled]: (state, action) => {
    //         state.data = action.payload
    //     },
    //     [fetchTodos.rejected]: (state, action) => {
    //         state.data = []
    //     }
    // }
    // })

export const {addItem, deleteItem} = todosSlice.actions;

export default todosSlice.reducer;
