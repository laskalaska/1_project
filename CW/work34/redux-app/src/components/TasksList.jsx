import React from 'react';
import {useSelector} from "react-redux";

function TasksList(props) {
    const tasks = useSelector((state) => state.tasks.data);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
}

export default TasksList;