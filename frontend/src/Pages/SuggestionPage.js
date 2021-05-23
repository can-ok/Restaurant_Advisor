import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Suggestion = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Suggestion</h1>
      </div>
        <div className="form">
          <Formik
            initialValues={{ name: "", email: "", issue: "", agree: false ,msg:""}}
            validationSchema={Yup.object({
              name: Yup.string().required("İsim Boş olamaz"),
              email: Yup.string().email("Email uygun değil"),
              agress: Yup.boolean().required("Koşulları Kabul Etmelisi"),
              issue: Yup.string().required("Konu boş olamaz"),
              msg: Yup.string().required("Mesaj boş olamaz"),
            })}
        
            onSubmit={(values,{resetForm,setSubmitting})=>{
                console.log(values);

                setTimeout(()=>{
                    resetForm()

                },2000)
            }}

          >
            {({ values, errors, handleSubmit, handleReset, handleChange,dirty ,isSubmitting}) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="İsim"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />


                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                />

                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="input"
                  value={values.issue}
                  onChange={handleChange}
                />


                <label htmlFor="message">Message</label>
                <textarea 
                    id="message"
                    placeholder="Message"
                    className="input"
                    value={values.msg}
                    onChange={handleChange}
                  />

                  <div className="agreement">
                    <input id="agree" type="checkbox" value={values.agree} onChange={handleChange} className="checkbox"/>
                    <label htmlFor="agree" className="agreement-label">
                        I have read and accept the agreement.
                    </label>
                </div>
                <button type="submit" disabled={!dirty}>Submit</button>
              </form>
            )}
          </Formik>
        </div>
    
    </div>
  );
};

export default Suggestion;
