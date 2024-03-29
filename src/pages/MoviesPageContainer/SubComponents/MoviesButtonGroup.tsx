import React, {FC} from "react";

import {Box, Button, ButtonGroup} from "@mui/material";

import {PaginationSlider} from "../../../components";
import css from "../index.module.scss";
import {IBGProps} from "../interfaces";

const MoviesButtonGroup: FC<IBGProps> = ({props}) => {

    const {
        info: {
            total_pages,
            page,
        }, prevPage, nextPage
    } = props;

    return (
        <Box className={css.Ep__BG_Box}>
            <Box className={css.Ep__BG_Box_Container}>
                <ButtonGroup size={"small"} color={"secondary"}>
                    <Button
                        disabled={page === 1}
                        onClick={prevPage}
                    >
                        Prev
                    </Button>
                    <Button
                        disabled={page === total_pages}
                        onClick={nextPage}
                    >
                        Next
                    </Button>
                </ButtonGroup>
            </Box>
            <Box className={css.Ep__BG_Box_Box}>
                <PaginationSlider
                    props={{
                        min: 1,
                        max: 500,
                        current: !!page ? +page : 1,
                        step: 1,
                        nextPage
                    }}
                />
            </Box>
        </Box>
    );
};

export {MoviesButtonGroup};