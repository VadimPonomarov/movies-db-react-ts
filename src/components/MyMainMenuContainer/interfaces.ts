import {ComponentsProps} from "@mui/material";

export interface IProps {
    props?: {
        caption: string,
        uri: string,
        elementProps?: ComponentsProps
    };
}