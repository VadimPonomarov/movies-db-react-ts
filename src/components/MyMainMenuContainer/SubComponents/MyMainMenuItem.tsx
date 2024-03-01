import React, {FC, useContext} from "react";

import {Button, Typography} from "@mui/material";
import _ from "lodash";
import {NavLink} from "react-router-dom";

import {MovieCategoryEnum} from "../../../common";
import {AuthContext} from "../../../common/hocs";
import {IProps} from "../interfaces";

const MyMainMenuItem: FC<IProps> = ({props}) => {
    const {caption, uri, elementProps} = props;
    const {searchParams: {with_genres}} = useContext(AuthContext);

    return (
        <Button sx={{width: "130px"}}>
            <NavLink to={uri} {...elementProps} >
                <Typography variant={"subtitle1"}>
                    {
                        (caption === MovieCategoryEnum.discover && !!with_genres.length)
                        && caption
                    }
                    {
                        caption !== MovieCategoryEnum.discover
                        && _.replace(caption, "_", " ")
                    }
                </Typography>
            </NavLink>
        </Button>
    );
};

export {MyMainMenuItem};