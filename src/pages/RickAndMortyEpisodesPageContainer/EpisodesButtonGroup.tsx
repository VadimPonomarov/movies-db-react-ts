import React, {FC} from "react";

import {Box, Button, ButtonGroup} from "@mui/material";
import {useLocation} from "react-router-dom";

import {PaginationSlider} from "../../components/PaginationSlider";

import css from "./index.module.scss";
import {IBGProps} from "./interfaces";

const EpisodesButtonGroup: FC<IBGProps> = ({props}) => {
    const {info, prevPage, nextPage} = props;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const paramPage = searchParams.get("page");

    return (
        <Box className={css.Ep__BG_Box}>
            <Box className={css.Ep__BG_Box_Container}>
                <ButtonGroup size={"small"} color={"secondary"}>
                    <Button disabled={!Object(info)["prev"]} onClick={prevPage}>Prev</Button>
                    <Button disabled={!Object(info)["next"]} onClick={nextPage}>Next</Button>
                </ButtonGroup>
            </Box>
            <Box className={css.Ep__BG_Box_Box}>
                <PaginationSlider props={{min: 1, max: 5, current: paramPage ? +paramPage : 1, step: 1}}/>
            </Box>
        </Box>
    );
};

export {EpisodesButtonGroup};