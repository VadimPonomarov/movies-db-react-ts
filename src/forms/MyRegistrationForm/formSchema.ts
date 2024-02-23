import * as yup from "yup";

const formSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    rePassword: yup.string().oneOf([yup.ref("password")], "Not the same !!!"),
});

export {formSchema};

