import * as yup from 'yup';

export const initialValues = {
    email: "",
    password: "",
    first_name:"",
    last_name: "",
    address: "",
    dob:"",
    phone:"",
    role:"student",
    profile_pic: "",
    cv:""
}

export const schemaValidation =  yup.object().shape({
    email: yup.string().required("Email is required")
        .email("Enter valid email"),
    password: yup.string().required("Password is required")
    .min(8, "Minimum 8 characters allowed")
    .max(40, "Maximum 40 characters allowed"),
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone: yup.number().required("Phone is required"),
  });