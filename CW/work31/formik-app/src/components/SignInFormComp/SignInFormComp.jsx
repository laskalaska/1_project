import { Formik, Field, Form } from 'formik';
// ...validate function...
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

export default function SignInFormComp() {
 return (
   <Formik
     initialValues={{
       login: '',
     }}
     validate={validate}
     onSubmit={values => {
       console.log(values);
     }}
     // render={({
     //   errors, values
     // }) => (
     //   <Form>
     //     {errors.login ? <div>{errors.login}</div> : null}
     //     <Field
     //       name="login"
     //       placeholder="Login"
     //     />
     //       <Field type="checkbox" name="languages" value="PHP"/>
     //           PHP
     //       <Field type="checkbox" name="languages" value="JS"/>
     //       JS
     //       <br/>
     //       My languages: {values.languages?.join(',')}
     //       <br/>
     //       My Login: {values.login}
     //     <input type="submit" value="Sign in" />
     //   </Form>
     // )}
   >
       {({errors, values}) => {
           return (
               <Form>
                   {errors.login ? <div>{errors.login}</div> : null}
                   <Field
                       name="login"
                       placeholder="Login"
                   />
                   <Field type="checkbox" name="languages" value="PHP"/>
                   PHP
                   <Field type="checkbox" name="languages" value="JS"/>
                   JS
                   <br/>
                   My languages: {values.languages?.join(',')}
                   <br/>
                   My Login: {values.login}
                   <input type="submit" value="Sign in" />
               </Form>
           )
       }}
       {/*<SignInFormCompS></SignInFormCompS>*/}
   </Formik>
 );
}

function SignInFormCompS(errors = {}, values = {}) {
    return (
        <Form>
            {errors.login ? <div>{errors.login}</div> : null}
            <Field
                name="login"
                placeholder="Login"
            />
            <Field type="checkbox" name="languages" value="PHP"/>
            PHP
            <Field type="checkbox" name="languages" value="JS"/>
            JS
            <br/>
            My languages: {values.languages?.join(',')}
            <br/>
            My Login: {values.login}
            <input type="submit" value="Sign in" />
        </Form>
    );
}

// export default SignInFormComp;
