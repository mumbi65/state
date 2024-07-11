import React from "react";
import { useFormik } from "formik";

const StudentForm = () => {

    const onSubmit = () => {
        console.log('submitted')
    }

    const{values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting} = useFormik({
        initialValues:{
            firstname: '',
            secondname: '',
            yearOfBirth: '',
            email: '',
            course: '',
            county: ''
        },
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
                                placeholder="First Name" />
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
                                placeholder="Second Name" />
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
                                placeholder="Year of Birth" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                placeholder="Email" />
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
                                value={values.course}
                                placeholder="Course" />
                        </div>
                        <div className="form-group">
                            <label for="county">County</label>
                            <input
                                type="text"
                                className="form-control"
                                id="county"
                                name="county"
                                onChange={handleChange}
                                value={values.county}
                                placeholder="County" />
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