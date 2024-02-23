import React, {FC} from 'react';

import {Box, Button, ButtonGroup} from '@mui/material';

import css from "./index.module.scss"
import {IBGProps} from "./interfaces";

const EpisodesButtonGroup: FC<IBGProps> = ({props}) => {
    const {info, prevPage, nextPage} = props
    return (
        <Box className={css.Ep__BG_Box}>
            <Box className={css.Ep__BG_Box_Container}>
                <ButtonGroup size={"small"}>
                    <Button disabled={!Object(info)["prev"]} onClick={prevPage}>Prev</Button>
                    <Button disabled={!Object(info)["next"]} onClick={nextPage}>Next</Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
};

export {EpisodesButtonGroup};