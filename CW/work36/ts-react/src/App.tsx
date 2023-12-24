import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import {CityType, UserType} from "./types";
import List from "./components/List";


const users: UserType[] = [
    {
        name: "John",
        age: 19
    },
    {
        name: "Guy",
        age: 19
    }
]

const cities: CityType[] = [
    {
        name: "Odesa",
        country: 'UA'
    },
    {
        name: "Kyiv",
        country: 'UA'
    }
]

function App() {
    return (
        <div className="App">
            <Counter value={4}/>
            <List items={users}/>
            <List items={cities}/>
        </div>
    );
}

export default App;
