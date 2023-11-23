import { useFormik } from 'formik';
const validate = values => {
    const errors = {};
    // const loginRegEx = /^\w{1,}/i; // using regex
    // if (!(loginRegEx.test(values.login)))
    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length > 15) {
        errors.login = 'Must be 15 characters or less';
    }

    return errors;
};

export default function SignInForm() {
    const formik = useFormik({
        initialValues: {
            login: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form>
            {formik.errors.login ? <div>{formik.errors.login}</div> : null}
            <input
                type="text"
                name="login"
                placeholder="Login"
                value={formik.values.login}
                onChange={formik.handleChange}
            />
            <input type="button" value="Sign in" onClick={formik.handleSubmit} />
        </form>
    );
}
