import {SliderProps, TextFieldProps} from "@mui/material";
import {MotionProps} from "framer-motion";

export const mSpan: MotionProps = {
    initial: {height: 0, opacity: 0},
    whileHover: {height: "auto", opacity: 1},
    transition: {duration: .5, delay: .2}
};

export const pSlider: SliderProps = {
    color: "secondary",
};

export const pTextField: TextFieldProps = {
    size: "small",
    sx: {border: null},
};