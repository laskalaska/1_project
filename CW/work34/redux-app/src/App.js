import logo from './logo.svg';
import './App.css';
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import UserTasksList from "./components/UserTasksList";

function App() {
  return (
    <div className="App">
      Hello World
        <AddTask/>
        <TasksList />
      <UserTasksList />
    </div>
  );
}

export default App;
