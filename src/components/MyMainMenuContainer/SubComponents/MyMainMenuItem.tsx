import React, {FC} from "react";

import {Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

import {IProps} from "../interfaces";

const MyMainMenuItem: FC<IProps> = ({props}) => {
    const defaults = {props: {caption: "asd", elementProps: {type: "button"}}};
    const {caption, uri, elementProps} = {...defaults, ...props};

    return (
        <Button>
            <NavLink to={uri} {...elementProps} >
                <Typography variant={"subtitle2"}>
                    {caption}
                </Typography>
            </NavLink>
        </Button>
    );
};

export {MyMainMenuItem};