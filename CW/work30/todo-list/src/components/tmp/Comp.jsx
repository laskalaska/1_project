import { useCallback, useState } from "react"
import Button from "./Button";

export default function Comp() {
    const [value, setValue] = useState(1);
    const [dummy, setDummy] = useState(0);

    // const handleClick = () => {
    //     console.log('do render when button clicked')
    // };
    const handleClick = useCallback(() => {
        console.log('do render when button clicked')
        console.log(value)
    }, [value]); // will not re-render handleClick ever, no deps [], so it won't trigger useEffect in Button if anything was changed here within state or props

    return (
        <div>
            <p onClick={() => setValue(value+1)}>value: {value}</p>
            <p onClick={() => setDummy(dummy+1)}>dummy: {dummy}</p>
            <Button onClick={handleClick} />
        </div>
    )
}
