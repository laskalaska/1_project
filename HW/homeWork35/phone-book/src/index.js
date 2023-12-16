import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import recordsReducer from "./store/records/recordsReducer";


const root = ReactDOM.createRoot(document.getElementById('root'));

const reducers = combineReducers({
    records: recordsReducer,
});

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals