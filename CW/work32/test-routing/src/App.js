import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";
import {paths} from "./common/urls";
import SecureRoutes from "./components/SecureRoutes";
import {useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path={paths.MAIN} element={<MainPage/>}/>
                    <Route path={paths.ABOUT_US} element={<InfoPage/>}/>
                    {/*<Route path="/myaccount/*" element={<SecureRoutes/>}/>*/}
                    {isAuth && <Route path="/myaccount/*" element={<SecureRoutes/>}/>} {/*these routes are reachable when isAuth is true*/}
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
            <footer>
                Footer
            </footer>

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
        </div>
    );
}

export default App;
