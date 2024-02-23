import {FormTextFieldProps, IFormFields} from "./formTypes";

const formFields: IFormFields<FormTextFieldProps> = {
    email: {
        props: {
            variant: "standard",
        },
    },
    password: {
        props: {
            variant: "standard",
            type: "password"
        },
    }
};

export {formFields};