import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecords = createAsyncThunk(
    'records/fetchRecords',
    async () => {
        const response = await axios.get('http://localhost:3000/records.json');
        return response.data;
    }
);

export const recordsAdapter = createEntityAdapter();

const initialState = recordsAdapter.getInitialState();

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        addItem: recordsAdapter.addOne,
        // addItem: (state, action) => {
        //     state.data.push(action.payload);
        // },
        deleteItem: recordsAdapter.removeOne,
        // deleteItem: (state, action) => {
        //     state.data = state.data.filter(item => item.id !== action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.fulfilled, recordsAdapter.upsertMany)
        //     .addCase(fetchRecords.fulfilled, (state, action) => {
        //         state.data = action.payload;
        // })
            .addCase(fetchRecords.rejected, (state, action) => {
                state.data = [];
            })
    }
})

    export const { addItem, deleteItem } = recordsSlice.actions;

    export default recordsSlice.reducer;