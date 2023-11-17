import {useState} from "react";
import './Button.css';

export default function Button(props) {
    const {text} = props;
    const [amount, setAmount] = useState(0);
    const [color, setColor] = useState('black');

    function handleClick() {
        console.log('Hello World');

        setAmount(amount + 1)

        if (color === 'black') {
            setColor('green');
        } else {
            setColor('black');
        }
    }

    return (
        <div>
            <input className={color} type="button" value={text} onClick={handleClick}/>
            {amount}
        </div>
    );
}