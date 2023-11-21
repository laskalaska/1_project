import logo from '../../logo.svg';
import './App.css';
import Counter from "../Counter/Counter";
import Course from "../Course/Course";
import SignIn from "../SignIn/SignIn";
import Calculator from "../Calculator/Calculator";
import Comp from "../tmp/Comp";
import {useState} from "react";
import TodoList from "../TodoList/TodoList";
import AddForm from "../AddForm/AddForm";

const defaultTasks = [
    {
        value: 'Buy milk',
        priority: 'low',
        status: 'not started'
    },
    {
        value: 'Do homework',
        priority: 'high',
        status: 'not started'
    }
]

function App() {
    const [tasks, setTasks] = useState(defaultTasks);

    const handleTaskAdd = (newTask) => {
        setTasks([
            ...tasks,
            newTask
        ]);
        console.log(tasks)
    }

    const handleClickDelete = (taskKey) => {
        // const index = tasks.findIndex(task => task.value === taskKey);
        // if (index !== -1) {
        //     setTasks();
        // }
        const newTasks = tasks.filter(task => task.value !== taskKey);
        setTasks(newTasks);
    }

    return (
        <div className="App">
            <div>
                <AddForm onAdd={handleTaskAdd}></AddForm>
                {!(tasks.length) && <div>No tasks yet...</div>}
                {!!(tasks.length) && <TodoList items={tasks} onDelete={handleClickDelete}></TodoList>}
            </div>

            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}

            {/*<Counter></Counter>*/}
            {/*<Course></Course>*/}

            {/*<SignIn></SignIn>*/}
            {/*<Calculator></Calculator>*/}
            {/*<Comp></Comp>*/}
        </div>
    );
}

export default App;
