import logo from '../../logo.svg';
import './App.css';
import Button from "../Button/Button";
import News from "../News/News";
import SecureBlock from "../SecureBlock/SecureBlock";
import {useState} from "react";
import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import InfoBlock from "../InfoBlock/InfoBlock";

function App() {

    const [x, setX] = useState(1);

    function handleSpanClick() {
        setX(x + 3);
        console.log(x)
    }

    return (
        <div className="App">
            <Header></Header>
            <div className="app-container">
                <LeftNav></LeftNav>
                <div className="content">
                    <InfoBlock title={'First Page'}
                               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}></InfoBlock>
                </div>
            </div>
            {/*<header className="App-header">*/}
            {/*  <News title="Weather" content="It's raining" views={6}></News>*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <SecureBlock isAuthenticated={true}></SecureBlock>*/}
            {/*  <span onClick={handleSpanClick}>{ x % 2 === 0 ? 'hello' : 'bye'}</span>*/}
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
            {/*  <Button text="First Button"></Button>*/}
            {/*  <Button text="Hello"></Button>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
