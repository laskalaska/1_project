import React, {useRef, useState} from 'react';
import {func} from 'prop-types';
import './AddForm.css'
import {useNavigate} from "react-router-dom";

function AddForm({onSave}) {
    const firstName = useRef();
    const lastName = useRef();
    const phoneNumber = useRef();

    const navigate = useNavigate();

    // const [buttonState, setButtonState] = useState(false);
    const [error, setError] = useState('');

    const handleSaveUser = () => {
        const newContact = {
            id: Date.now(),
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            phone: phoneNumber.current.value,
        }


        if (!firstName.current.value | !lastName.current.value | !phoneNumber.current.value) {
            setError('Please, complete all input fields.');
        } else {
            firstName.current.value = firstName.current.defaultValue;
            lastName.current.value = lastName.current.defaultValue;
            phoneNumber.current.value = phoneNumber.current.defaultValue;

            setError('');
            onSave(newContact);
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

AddForm.propTypes = {
    onSave: func.isRequired,
    // onBack: func.isRequired
}

export default AddForm;