import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import recordsReducer from "./store/records/recordsSlice";
export const store = configureStore({
    reducer: {
        records: recordsReducer,
    },
});



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



root.render(
    <Provider store={store}>
        <App />
    </Provider>
);