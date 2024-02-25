import * as React from "react";
import {FC} from "react";

import {Grid, Slider, TextField} from "@mui/material";
import {motion} from "framer-motion";

import {mSpan, pSlider, pTextField} from "./constants";
import {IProps} from "./interfaces";
import {useAppState} from "./useAppState";


const PaginationSlider: FC<IProps> = React.memo(({props}) => {
    const {step, min, max, current} = props;
    const {
        value,
        handleSliderChange,
        handleInputChange,
        handleBlur
    } = useAppState(current);

    return (
        <motion.span
            {...mSpan}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        {...pSlider}
                        value={typeof value === "number" ? value : current}
                        onChange={handleSliderChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...pTextField}
                        value={current}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
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