import React from "react";
import { useFormik } from "formik";
import { userFormSchema } from "../schema";

const UserForm = () =>{

    const onSubmit = () =>{
        setTimeout(() =>{
            console.log('submitted')
        }, 3000)

        setSubmitting(false)
    }

    const {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched} = useFormik({
       initialValues:{
        email: '',
        age: '',
        password:'',
        confirm: ''
       },
       validationSchema: userFormSchema,
       onSubmit 
    })
 
    console.log(errors)

    return(
        <>
        <div className="form-area">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email" 
                            style={errors.email && touched.email ? {borderColor: "rgb(245, 98, 98)"}: {}}
                            />
                        {errors.email && touched.email ? <p className="error-message">{errors.email}</p> : ''}
                    </div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Age"
                            style={errors.age && touched.age ? {borderColor: "rgb(245, 98, 98)"}: {}}
                            />
                        {errors.age && touched.age ? <p className="error-message">{errors.age}</p> : ''}
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                            style={errors.password && touched.password ? {borderColor: "rgb(245, 98, 98)"}: {}}
                            />
                            {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ''}
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="confirmPassword"
                            name="confirm"
                            value={values.confirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Confirm Password" 
                            style={errors.confirm && touched.confirm ? {borderColor: "rgb(245, 98, 98)"}: {}}
                            />
                            {errors.confirm && touched.confirm ? <p className="error-message">{errors.confirm}</p> : ''}
                    </div>
                    <br/>
                    <button disabled={isSubmitting} className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserForm