import React from 'react';
import { Formik } from 'formik';
// import { data } from '../../constant';

const data = { email: 'demo1@gmail.com', password: 'Demo@123' }


const Form = (props) => (
  <>
  <div className='form-body'>
  {/* <h1 className='form-head'>Welcome to LiciousFasta!!</h1> */}
  <div className='form-container'>
    <h1>Sign In</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        // }, 400);
        if(values.email === data.email && values.password === data.password)
          { 
            // console.log("You are logged in");
            setTimeout(() => {
              props.SetIsLoggedIn(true);
              setSubmitting(false);
            }, 1200);
        }
        // data.forEach((data)=>{
        //   if(values.email === data.email && values.password === data.password)
        //   { 
        //     // console.log("You are logged in");
        //     setTimeout(() => {
        //       props.SetIsLoggedIn(true);
        //       setSubmitting(false);
        //     }, 1200);
        //     // console.log(values)
        //   }
        // })

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-field">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          </div>
          {errors.email && touched.email && errors.email}
          <div className="form-field">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          </div>
          {errors.password && touched.password && errors.password}
          <div className='button-container'>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
  </div>
  </>
);

export default Form;