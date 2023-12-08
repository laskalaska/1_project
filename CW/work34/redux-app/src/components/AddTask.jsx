import React, {useRef} from 'react';
import {ADD_TASK} from "../store/tasks/actions";
import {useDispatch} from "react-redux";

function AddTask(props) {
    const title = useRef();
    const dispatch = useDispatch();

    const handleSaveTask = () => {
        const titleValue = title.current.value;
        if (!titleValue) {
            return;
        }

        const saveAction = {
            type: ADD_TASK,
            payload: {
                id: Date.now(),
                title: titleValue
            }
        };

        dispatch(saveAction);
    }

    return (
        <div>
            <form>
                <input type="text" name="title" ref={title}/>
                <input type="button" value="Save" onClick={handleSaveTask}/>
            </form>
        </div>
    );
}

export default AddTask;