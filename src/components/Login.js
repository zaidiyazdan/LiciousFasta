import React from 'react';
import { Formik } from 'formik';
// import { data } from '../../constant';

const data = { email: 'demo1@gmail.com', password: 'Demo@123' }


const Form = (props) => (
  <>
  <div className='bg-gray-200 flex h-screen justify-center items-center'>
  {/* <h1 className='form-head'>Welcome to LiciousFasta!!</h1> */}
  <div className=' shadow-xl shadow-black-500/50 flex flex-col w-[400px] justify-center items-center bg-center p-6 gap-4 text-center'>
    <h1 className='text-xl font-bold bg-black text-white w-[100%] py-6 rounded-lg'>Sign In</h1>
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
          <p className='m-1 text-lg'>Email</p>
          <div className="h-10 w-[100%] text-center">
          <input
            type="email"
            name="email"
            placeholder='demo1@gamil.com'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className='border rounded px-4 py-1'
          />
          </div>
          <p className='m-1 text-lg'>Password</p>
          {errors.email && touched.email && errors.email}
          <div className="h-10 mx-4 ">
          <input
            type="password"
            name="password"
            placeholder='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className='border px-4 py-1'
          />
          </div>
          {errors.password && touched.password && errors.password}
          <div className='button-container'>
          <button type="submit" disabled={isSubmitting} className='bg-stone-950 text-lg w-[90%] px-3 py-2 m-6 text-slate-50 rounded-lg hover:bg-stone-700 active:bg-orange-500:text-black'>
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