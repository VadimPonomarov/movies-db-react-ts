import {
    BaseTextFieldProps,
} from "@mui/material/TextField/TextField";
import {string} from "yup";

import {formSchema} from "./formSchema";

export interface IFormFields<T> {
    [key: string]: {
        props?: { [key in keyof T]?: string };
    };
}

export interface IProps {
    props: {
        formLabel?: string;
        animate?: boolean;
    };
}

export interface IAuthCredentials {
    name: string,
    password: string,
    rePassword?: string,
    token?: string
}

export type formInputType = Partial<typeof formSchema>

export type FormTextFieldProps = BaseTextFieldProps

