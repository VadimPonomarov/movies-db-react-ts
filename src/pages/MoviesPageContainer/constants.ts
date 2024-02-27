import {ReactElement} from "react";

import {MotionProps} from "framer-motion";

export const initMotion: MotionProps = {
    initial: {opacity: 0},
    whileHover: {
        opacity: .6,
        background: "black",
        overflow: "hidden",
        borderRadius: "5%",
    },
};


