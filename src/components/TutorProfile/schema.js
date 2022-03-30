import * as yup from 'yup';

export const initialValues = {
    email: "",
    password: "",
    first_name:"",
    last_name: "",
    address: "",
    DOB:"",
    phone_number:"",
    profileImage: "",
    cv:"",
    passwordNew: "",
    skillsNew: "",
    price_hourly_in_eur: ""
}

export const schemaValidation =  yup.object().shape({
  /*   email: yup.string().required("Email is required")
        .email("Enter valid email").test(
            'hs-email',
            'Only Hochshule Fulda email allowed',
            function(value) {
             
                if(value?.includes("hs-fulda")){
                return true
            } else {
              return false
            }
            }
          ), */
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone_number: yup.number().required("Phone is required"),
    
  });