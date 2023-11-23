import React, {useRef, useState} from 'react';
import {func} from 'prop-types';
import {useFormik} from "formik";
import {addFormSchema} from "./AddFormSchema";
import './AddForm.css'

function AddForm({onSave, onBack}) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
        },
        validationSchema: addFormSchema,
        onSubmit: () => handleSaveUser()
    })

    let {firstName, lastName, phoneNumber} = formik.values;

    // const firstName = useRef();
    // const lastName = useRef();
    // const phoneNumber = useRef();

    // const [buttonState, setButtonState] = useState(false);
    const [error, setError] = useState('');

    function handleSaveUser() {
        const newContact = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
        }

        console.log(newContact);
        console.log(formik);


        // if (!firstName | !lastName | !phoneNumber) {
        //     setError('Please, complete all input fields.');
        // } else {
        formik.resetForm();

        setError('');
        const routeState = 'list';
        onSave(newContact, routeState);
        // }

        //  USING REF HOOK
        // const newContact = {
        //     id: Date.now(),
        //     firstName: firstName.current.value,
        //     lastName: lastName.current.value,
        //     phone: phoneNumber.current.value,
        // }
        //
        //
        // if (!firstName.current.value | !lastName.current.value | !phoneNumber.current.value) {
        //     setError('Please, complete all input fields.');
        // } else {
        //     firstName.current.value = firstName.current.defaultValue;
        //     lastName.current.value = lastName.current.defaultValue;
        //     phoneNumber.current.value = phoneNumber.current.defaultValue;
        //
        //     setError('');
        //     const routeState = 'list';
        //     onSave(newContact, routeState);
        // }
    }

    const handleGoBack = () => {
        const routeState = 'list';
        onBack(routeState);
    }

    return (
        <form>
            <div>First Name:
                <input type="text" name="firstName" value={firstName} onChange={formik.handleChange}
                    // ref={firstName}
                />
                {formik.errors.firstName && <div className="error">{formik.errors.firstName}</div>}
            </div>
            <div>Last Name:
                <input type="text" name="lastName" value={lastName} onChange={formik.handleChange}
                    // ref={lastName}
                />
                {formik.errors.lastName && <div className="error">{formik.errors.lastName}</div>}
            </div>
            <div>Phone Number:
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={formik.handleChange}
                    // ref={phoneNumber}
                />
                {formik.errors.phoneNumber && <div className="error">{formik.errors.phoneNumber}</div>}
            </div>
            {error && <div className="error">{error}</div>}
            <input type="button" value="Submit new contact" onClick={formik.handleSubmit}/>
            <input type="button" value="Back to the list" onClick={handleGoBack}/>
        </form>
    );
}

AddForm.propTypes = {
    onSave: func.isRequired,
    onBack: func.isRequired
}

export default AddForm;