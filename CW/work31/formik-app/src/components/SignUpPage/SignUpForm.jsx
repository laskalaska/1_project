import React, {Fragment} from 'react';
import {useFormik} from "formik";
import {signUpFormSchema} from "./commonSchemas";


const formElementsConfiguration = {
    login: {
        defaultValue: '',
        inputType: 'text',
        labelText: 'Login:'
    },
    password: {
        defaultValue: '',
        inputType: 'password',
        labelText: 'Password:'
    },
    age: {
        defaultValue: 0,
        inputType: 'number',
        labelText: 'Age:'
    },
    fullname: {
        defaultValue: '',
        inputType: 'text',
        labelText: 'Full Name:'
    },
    email: {
        defaultValue: '',
        inputType: 'email',
        labelText: 'Email:'
    },
}

function getInitialValues() {
    let initialValues = {};
    for (let key of Object.keys(formElementsConfiguration)) {
        initialValues[key] = formElementsConfiguration[key].defaultValue;
    }
    return initialValues;
}

function SignUpForm({finishSignUp}) {
    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: signUpFormSchema,
        onSubmit: (values) => {
            finishSignUp(values);
        }
    })



    // const {login, password, email, fullname, age} = formik.values;

    const generateFormElements = () => {
        const formItems = [];
        for (let key of Object.keys(formElementsConfiguration)) {
           const { labelText, inputType } = formElementsConfiguration[key];
           formItems.push((
               <Fragment key={key}>
                   <div>
                       <label htmlFor={key}>{labelText}</label>
                       <input type={inputType} name={key} value={formik.values.key} onChange={formik.handleChange}/>
                   </div>
                   {formik.errors[key] && <div>{formik.errors[key]}</div>}
               </Fragment>
           ))
        }
        return (
            <>
                {formItems}
                <div>
                    <input type="button" value="Save" onClick={formik.handleSubmit}/>
                </div>
            </>
        )
    }

    return (
        <div>
            <form>
                {generateFormElements()}
            </form>
        </div>
    );

    // return (
    //     <div>
    //         <form>
    //             <div>
    //                 <label htmlFor="login">Login:</label>
    //                 <input type="text" name="login" value={login} onChange={formik.handleChange}/>
    //             </div>
    //             {formik.errors.login && <div>{formik.errors.login}</div>}
    //             <div>
    //                 <label htmlFor="password">Password:</label>
    //                 <input type="password" name="password" value={password} onChange={formik.handleChange}/>
    //             </div>
    //             <div>
    //                 <label htmlFor="fullname">Full Name:</label>
    //                 <input type="text" name="fullname" value={fullname} onChange={formik.handleChange}/>
    //             </div>
    //             <div>
    //                 <label htmlFor="age">Age:</label>
    //                 <input type="number" name="age" value={age} onChange={formik.handleChange}/>
    //             </div>
    //             <div>
    //                 <label htmlFor="email">Email:</label>
    //                 <input type="email" name="email" value={email} onChange={formik.handleChange}/>
    //             </div>
    //             <div>
    //                 <input type="button" value="Save" onClick={formik.handleSubmit}/>
    //             </div>
    //         </form>
    //     </div>
    // );
}

export default SignUpForm;