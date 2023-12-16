import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItem, fetchTodos} from "./store/todosSlice";
import {selectAllTodos, selectTodoEntities} from "./store/todosSelectors";

function Todos(props) {
    const newItem = useRef();
    const dispatch = useDispatch();

    const todosList = useSelector(selectAllTodos);
    // const todosList = useSelector(state => state.todos.entities);
    const todosMap = useSelector(selectTodoEntities);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    const handleSaveTodo = () => {
        const newValue = newItem.current.value;
        if (newValue) {
            dispatch(addItem({ id: Date.now(), value: newValue}));
        }
    }

    const handleOneItemClick = (id) => {
        console.log(todosMap[id]);
        console.log(todosList)
    }

    return (
        <div>
            <h2>Todos</h2>
            <form>
                <input type="text" ref={newItem}/>
                <input type="button" value="Save item" onClick={handleSaveTodo}/>
            </form>
            <ul>
                {todosList.map(item => (<li key={item.id} onClick={() => handleOneItemClick(item.id)}>{item.value}</li>))}
                {/*{Object.values(todosList).map(item => (<li key={item.id}>{item.value}</li>))}*/}
            </ul>
        </div>
    );
}

export default Todos;