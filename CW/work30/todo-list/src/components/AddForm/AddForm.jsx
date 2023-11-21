import React, {useRef} from 'react';

const STATUSES = {
    NOT_STARTED: 'not started',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
}

const PRIORITIES = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
}

function AddForm({ onAdd }) {
    const task = useRef();
    const status = useRef();
    const priority = useRef();

    const handleAddTask = () => {
        // console.log(task.current.value);
        // console.log(status.current.value);
        // console.log(priority.current.value);

        const formValue = {
            value: task.current.value,
            status: STATUSES[status.current.value],
            priority: PRIORITIES[priority.current.value],
        }
        onAdd(formValue);

        task.current.value = task.current.defaultValue; // clean input value to default

    }

    return (
        <form>
            Task: <input type="text" ref={task}/>
            <br/>
            Status:
            <select ref={status}>
                {/*<option value="NOT_STARTED">Not started</option>*/}
                {/*<option value="NOT_STARTED">In progress</option>*/}
                {/*<option value="NOT_STARTED">Done</option>*/}
                {Object.entries(STATUSES).map(([key, text]) => <option key={key} value={key}>{text}</option>)}
            </select>
            <br/>
            Priority:
            <select ref={priority}>
                {Object.entries(PRIORITIES).map(([key, text]) => <option key={key} value={key}>{text}</option>)}
            </select>

            <input type="button" value="Add" onClick={handleAddTask}/>
        </form>
    );
}

export default AddForm;