import * as yup from 'yup';

let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

export const userFormSchema = yup.object().shape({
    email: yup.string().email("Not a valid email").required("Required"),
    age: yup.number("Must be a number").positive("Invalid Age").required("Required"),
    password: yup.string().min(8).matches(passwordRegEx, {message: "Invalid Password"}).required("Required"),
    confirm: yup.string().oneOf([yup.ref("password")], "Must match Password")

})

export const studentFormSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    secondname: yup.string().required("Required"),
    yearOfBirth: yup.date().required("Required"),
    email: yup.string().email("Not a valid email").required("Required"),
    course: yup.string().required("Required"),
    county: yup.string().required("Required"),
})