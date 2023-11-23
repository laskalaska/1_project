import logo from '../../logo.svg';
import './App.css';
import SignInForm from "../SignInForm/SignInForm";
import SignInFormComp from "../SignInFormComp/SignInFormComp";
import SignInFormCompSchema from "../SignInFormCompSchema/SignInFormCompSchema";
import SignUpPage from "../SignUpPage/SignUpPage";

function App() {
    return (
        <div className="App">
            {/*<SignInForm></SignInForm>*/}
            {/*<SignInFormComp></SignInFormComp>*/}
            {/*<SignInFormCompSchema></SignInFormCompSchema>*/}
            <SignUpPage></SignUpPage>
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
