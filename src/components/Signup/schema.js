import * as yup from 'yup';

export const initialValues = {
    email: "",
    password: "",
    first_name:"",
    last_name: "",
    confirmPassword: "",
    address: "",
    dob:"",
    phone_number:"",
    profile_pic: "",
    cv:"",
    skills_present: ""
}

export const schemaValidation =  yup.object().shape({
    email: yup.string().required("Email is required")
        .email("Enter valid email"),
    password: yup.string().required("Password is required")
    .min(8, "Minimum 8 characters allowed")
    .max(40, "Maximum 40 characters allowed")
    .notOneOf(
        [yup.ref("currentPassword")],
        "New Password cannot be same as current password"
      ),
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone_number: yup.number().required("Phone is required"),
    address: yup.string().required("Address is required"),
  confirmPassword: yup.string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password did not match")
    .min(8, "Minimum 8 characters allowed")
    .max(40, "Maximum 40 characters allowed"),
    skills_present: yup.array().nullable(),
  });