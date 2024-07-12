import React from "react";
import { Formik, useFormik } from "formik";
import { studentFormSchema } from "../schema";

const StudentForm = () => {

    const onSubmit = (values, {setSubmitting, resetForm}) => {
        console.log('submitted')
        setSubmitting(false)
        resetForm()
    }

    const{values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched} = useFormik({
        initialValues:{
            firstname: '',
            secondname: '',
            yearOfBirth: '',
            email: '',
            course: '',
            county: ''
        },
        validationSchema: studentFormSchema,
        onSubmit
    })

    return(
        <>
        <div className="form-area">
                <form onSubmit={handleSubmit}>
                    <div className="input-info">
                        <div className="form-group">
                            <label for="firstname">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                onBlur={handleBlur}
                                placeholder="First Name" 
                                style={errors.firstname && touched.firstname ? {borderColor: "rgb(245, 98, 98)"}: {}}
                                />
                            {errors.firstname && touched.firstname ? <p className="error-message">{errors.firstname}</p> : ''}
                        </div>
                        <div className="form-group">
                            <label for="secondname">Second Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="secondname"
                                name="secondname"
                                value={values.secondname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Second Name"
                                style={errors.secondname && touched.secondname ? {borderColor: "rgb(245, 98, 98)"}: {}}
                                />
                                {errors.secondname && touched.secondname ? <p className="error-message">{errors.secondname}</p> : ''}
                        </div>
                    </div>
                    <div className="input-info">
                        <div className="form-group">
                            <label for="yearOfBirth">Y.O.B</label>
                            <input
                                type="date"
                                className="form-control"
                                id="yearOfBirth"
                                name="yearOfBirth"
                                value={values.yearOfBirth}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Year of Birth"
                                style={errors.yearOfBirth && touched.yearOfBirth ? {borderColor: "rgb(245, 98, 98)"}: {}}
                                />
                                {errors.yearOfBirth && touched.yearOfBirth ? <p className="error-message">{errors.yearOfBirth}</p> : ''}
                        </div>
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
                    </div>
                    <div className="input-info">
                        <div className="form-group">
                            <label for="course">Course</label>
                            <input
                                type="text"
                                className="form-control"
                                id="course"
                                name="course"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.course}
                                placeholder="Course"
                                style={errors.course && touched.course ? {borderColor: "rgb(245, 98, 98)"}: {}}
                                />
                                {errors.course && touched.course ? <p className="error-message">{errors.course}</p> : ''}
                        </div>
                        <div className="form-group">
                            <label for="county">County</label>
                            <input
                                type="text"
                                className="form-control"
                                id="county"
                                name="county"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.county}
                                placeholder="County" 
                                style={errors.county && touched.county ? {borderColor: "rgb(245, 98, 98)"}: {}}
                                />
                                {errors.county && touched.county ? <p className="error-message">{errors.county}</p> : ''}
                        </div>
                    </div>
                    <br/>
                    <button disabled={isSubmitting} className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default StudentForm