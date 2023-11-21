import React from 'react';

function Task({ item, onDelete }) {
    const handleDelete = () => {
        onDelete(item.value);
    }

    return (
        <li>{item.value} | Status: {item.status} | Priority: {item.priority}
            <input type="button" value="X" onClick={handleDelete}/>
        </li>
    );
}

export default Task;