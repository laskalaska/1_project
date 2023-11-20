import logo from '../logo.svg';
import './App.css';
import Button from "../Button";
import Counter from "../Counter/Counter";
import SmileCard from "../SmileCard";
import Voting from "../Voting/Voting";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
            {/*  <p>*/}
            {/*    /!*<Button text="Click me"></Button>*!/*/}
            {/*    <Button>Click me</Button>*/}
            {/*  </p>*/}
            {/*  <Counter></Counter>*/}
            {/*</header>*/}
            <Voting></Voting>
        </div>
    );
}

export default App;
