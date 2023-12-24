import {UserType} from "../types";

// type Props = {
//     items: UserType[]
// }

type Props<T> = {
    items: T[]
}

function List<T extends {name: string}>({items}: Props<T>) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.name}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default List;