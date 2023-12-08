import React from 'react';
import {useSelector} from "react-redux";

function UserTasksList(props) {
    const tasksAmount = useSelector(state => state.currentUser.user.assignedTasks.length);
    return (
        <div>
            tasks for current user: {tasksAmount}
        </div>
    );
}

export default UserTasksList;