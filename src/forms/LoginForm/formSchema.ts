import * as yup from "yup";

const formSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export {formSchema};