import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';


function Auth(props) {

  const [login, setlogin] = useState('login')

  let login1 = {

    email: yup.string().email("plaese enter valid  email ").required("plz enter email id"),
    password: yup.string().required("enter filed ")
  }

  let schema = yup.object().shape(login1);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

   console.log(formik.errors.email);




  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          {
            login === 'login' ?
              <div className="section-title">
                <h2> login</h2>
              </div>
              :
              <div className="section-title">
                <h2> sign up </h2>
              </div>
          }
          <Formik value={Formik}>

            <Form onSubmit={formik.handleSubmit} className="php-email-form">
              {
                login === 'sign-in' ?
                  <div className="col-md-4 form-group">
                    <input type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                      onChange={formik.handleChange}
                    />

                    <div className="validate" />
                  </div>
                  : null
              }
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="email"
                  className="form-control" 
                  name="email" id="email"
                   placeholder="Your Email"
                    data-rule="email" 
                    onChange={formik.handleChange} />
                  <div className="validate" />
                  {
                    formik.errors.email ? <p> {formik.errors.email}</p> : null
                  }
                </div>
                <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text"
                   name="password" 
                   className="form-control" 
                   id="password"
                    placeholder="Your password"
                     data-rule="minlen:4"
                     onChange={formik.handleChange} />
                  <div className="validate" />
                  {
                    formik.errors.password ? <p> {formik.errors.password}</p> : null
                  }
                </div>

                <div><button className="text-center" type="submit" onClick={() => setlogin('login')}>login</button></div>
                <div className="text-center"><button className="text-center" type="submit" onClick={() => setlogin('sign-in')}>sign-in</button></div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>

    </>
  );
}


export default Auth;