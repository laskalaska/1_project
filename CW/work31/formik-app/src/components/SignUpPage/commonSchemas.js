import {string, number, object} from "yup";

export const signUpFormSchema = object({
    login: string().min(2, "2 or more characters").max(10, "too long").required(),
    password: string().required(),
    email: string().email().required(),
    fullname: string().required(),
    age: number().integer().min(18, "must be 18+").required(),
    // card: string().length(16, 'Enter a valid card number'),
})