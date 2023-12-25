import {createAsyncThunk, createSlice, createEntityAdapter, AsyncThunk, configureStore} from "@reduxjs/toolkit";
import {Contact} from "../../types";
import axios from "axios";

interface ContactState {
    contacts: Contact[]
}

export const fetchRecords = createAsyncThunk<Contact[]>('contacts/fetchContacts', async () => {
    const response = await axios.get('http://localhost:3000/records.json');
    return await response.data;
});


export const recordsSlice = createSlice({
    name: 'records',
    initialState: { contacts: [] } as ContactState,
    reducers: {
        addItem: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
            .addCase(fetchRecords.rejected, (state, action) => {
                state.contacts = [];
            })
    }
})

export const {addItem, deleteItem} = recordsSlice.actions;

export const store = configureStore({
    reducer: {
        records: recordsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default recordsSlice.reducer;