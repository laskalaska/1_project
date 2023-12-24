import {useEffect, useState} from "react";

type CounterProps = {
    value: number
}

type apiUserType = {
    name: string
}

function Counter({ value }: CounterProps) {
    const [stateValue, setStateValue] = useState<number>(0); // set the type of value
    const [name, setName] = useState<string | null>(null);

    const f = (x: number): number => {
        console.log(x);
        return x + 1
    }

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(res => res.json())
            .then((result: apiUserType[]) => {
                console.log(result[0].name)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            Counter props: {value} <br/>
            Counter state: {stateValue} / {name}<br/>
            <input type="button" value="+" onClick={() => setStateValue(prevState => prevState + 1)}/>
            <input type="button" value="-" onClick={() => setStateValue(prevState => prevState - 1)}/>
        </div>
    );
}

export default Counter;