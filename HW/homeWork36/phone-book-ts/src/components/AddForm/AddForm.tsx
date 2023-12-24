import React, {useRef, useState} from 'react';
import './AddForm.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/records/recordsSlice";
import {Contact} from "../../types";

function AddForm() {
    const dispatch = useDispatch();

    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const phoneNumber = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    // const [buttonState, setButtonState] = useState(false);
    const [error, setError] = useState<string>('');

    const handleSaveUser = () => {


        if (!firstName.current?.value || !lastName.current?.value || !phoneNumber.current?.value) {
            setError('Please, complete all input fields.');
        } else {
            const newContact: Contact = {
                id: Date.now(),
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                phone: phoneNumber.current.value,
            }

            firstName.current.value = firstName.current.defaultValue || '';
            lastName.current.value = lastName.current.defaultValue || '';
            phoneNumber.current.value = phoneNumber.current.defaultValue || '';

            setError('');

            dispatch(addItem(newContact))

            // onSave(newContact);
            navigate('/list');
        }
    }

    const handleGoBack = () => {
        navigate('/list');
    }

    return (
        <form>
            First Name:
            <input type="text" ref={firstName}/>
            <br/>
            Last Name:
            <input type="text" ref={lastName}/>
            <br/>
            Phone Number:
            <input type="text" ref={phoneNumber}/>
            <br/>
            {error && <div className="error">{error}</div>}
            <input type="button" value="Submit new contact" onClick={handleSaveUser}/>
            <input type="button" value="Back to the list" onClick={handleGoBack}/>
        </form>
    );
}


export default AddForm;