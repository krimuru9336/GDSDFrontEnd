import * as yup from 'yup';

export const initialValues = {
    email: "",
    password: ""
}

export const schemaValidation =  yup.object().shape({
    email: yup.string().required("Email is required")
        .email("Enter valid email"),
    password: yup.string().required("Password is required"),

  });