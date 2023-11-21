import React from 'react';
import Task from "../Task/Task";

function TodoList({ items, onDelete }) {
    return (
        <div>
            <ul>
                {items.map(item => (<Task key={item.value} item={item} onDelete={onDelete}></Task>))}
            </ul>
        </div>
    );
}

export default TodoList;