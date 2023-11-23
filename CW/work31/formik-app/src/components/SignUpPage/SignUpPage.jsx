import React from 'react';
import {useFormik} from "formik";
import SignUpForm from "./SignUpForm";

function SignUpPage(props) {

    // const formik = useFormik({
    //     initialValues: {
    //         login,
    //         password,
    //         email,
    //         fullname,
    //         age,
    //     },
    //     validationSchema,
    //     onSubmit: () => {
    //
    //     }
    // })

    const signUpFinish = (values) => {
        console.log(values);
    }

    return (
        <div>
            <h2>Sign Up Page</h2>
            <SignUpForm finishSignUp={signUpFinish}></SignUpForm>
        </div>
    );
}

export default SignUpPage;