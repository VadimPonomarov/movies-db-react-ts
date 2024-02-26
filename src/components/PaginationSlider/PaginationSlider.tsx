import * as React from "react";
import {FC, useEffect, useRef, useState} from "react";

import {Grid, Slider, TextField} from "@mui/material";
import {motion} from "framer-motion";

import {useAppMoviesEffect} from "../../common/hooks/useAppMoviesEffect";

import {mSpan, pSlider, pTextField} from "./constants";
import {IProps} from "./interfaces";
import {useAppState} from "./useAppState";


const PaginationSlider: FC<IProps> = React.memo(({props}) => {
    const {step, min, max, current = 1, nextPage} = props;
    const {query} = useAppMoviesEffect();
    const page_ = query.get("page");

    const {
        value,
        handleSliderChange,
        handleInputChange,
    } = useAppState(current);

    return (
        <motion.span
            {...mSpan}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        {...pSlider}
                        defaultValue={1}
                        min={1}
                        max={+max <= 100 ? +max : 100}
                        value={value}
                        onChange={handleSliderChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...pTextField}
                        value={page_}
                        onChange={handleInputChange}
                        onBlur={nextPage}
                        inputProps={{
                            step,
                            min,
                            max,
                            type: "number",
                        }}
                    />
                </Grid>
            </Grid>
        </motion.span>
    );
});

export {PaginationSlider};