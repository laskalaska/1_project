import {useEffect, useRef, useState} from 'react';
import {validateName} from "../../helpers/validations";
import './SignIn.css';

export default function SignIn() {
    const [buttonTouched, setButtonTouched] = useState(false); // if you want to know button state
    const [classList, setClassList] = useState('');
    const [login, setLogin] = useState('default');
    const input = useRef('');

    useEffect(() => {
        console.dir(input);
        console.log(input.current);
        console.log('component rendered')
    });

    const handleButtonClick = () => {
        setButtonTouched(true);
        // validation for sign in
        if (validateName(input.current.value)) {
            //...
            console.log(input.current.value)
        }
    }

    const handleLoginChange = () => {
        const login = input.current.value;
        if (buttonTouched && login.length < 3) {
            setClassList(' error');
            console.log('login should contain at least 3 characters');
        } else {
            setClassList('');
        }
    }

    return (
        <div>
            <input ref={input} type="text"
                   className={classList}
                   // value={login} // to use default value from state, require to use onChange prop with changing state func (setLogin)
                   onChange={handleLoginChange}
                   // onChange={event => {
                   //     setLogin(event.target.value);
                   //     // console.log(event)
                   //     console.log(login)
                   // }
                   // }
            />
            {/*<input ref={input} type="text" value={login} onChange={(e) => setLogin(e.target.value)}  />*/}
            <input type="button"
                   value="Login"
                onClick={handleButtonClick}
                //    onClick={() => {
                //        console.log(input.current.value);
                //    }}
            />
        </div>
    )
}
