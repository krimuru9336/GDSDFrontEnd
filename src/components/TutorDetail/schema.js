import * as yup from 'yup';
const moment = require("moment");


export const initialValues = {
    days_of_the_week: "",
    start_time:"",
    end_time:""
}

export const schemaValidation =  yup.object().shape({
    days_of_the_week: yup.string().required("days_of_the_week is required"),
        start_time: yup.string().required("Start Time is required").matches(/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/ , 'Please enter time in HH:MM:SS'),
        end_time: yup.string().required("End Time is required").matches(/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/ , 'Please enter time in HH:MM:SS'),
        
  });
