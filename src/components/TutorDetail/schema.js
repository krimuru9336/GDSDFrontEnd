import * as yup from 'yup';

export const initialValues = {
    days_of_the_week: "",
    start_time: "",
    end_time: ""
}

export const schemaValidation =  yup.object().shape({
    days_of_the_week: yup.string().required("days_of_the_week is required"),
        start_time: yup.string().required("start_time is required"),
        end_time: yup.string().required("end_time is required"),

  });