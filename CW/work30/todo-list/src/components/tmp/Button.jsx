import {useEffect} from "react"

export default function Button({onClick}) {
    useEffect(() => {
        console.log('button rendered');
    }, [onClick])

    return (
        <div onClick={onClick}>Button</div>
    )
}
