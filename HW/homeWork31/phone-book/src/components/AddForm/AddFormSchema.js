import { string, number, object} from "yup";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const addFormSchema = object({
    firstName: string().min(2, 'Enter valid value').max(40, 'Too long').required('Required'),
    lastName: string().min(2, 'Enter valid value').max(40, 'Too long').required('Required'),
    phoneNumber: string().matches(phoneRegExp, 'Must match format (786)-307-3615').required('Required'),
});