import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignInSchema = Yup.object({
    login: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(15, 'Nice try, nobody has a login that long')
        .required('Required'),
});
export default function SignInFormCompSchema() {
    return (
        <Formik
            initialValues={{
                login: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
                console.log(values);
            }}
            render={({
                         errors
                     }) => (
                <Form>
                    <ErrorMessage
                        name="login"
                        component="div"
                        className="field-error"
                    />
                    <Field
                        name="login"
                        placeholder="Login"
                    />
                    <input type="submit" value="Sign in" />
                </Form>
            )}
        />
    );
}
