import {MotionProps} from "framer-motion";

export const initMotion: MotionProps = {
    initial: {opacity: 0},
    whileHover: {
        opacity: .6,
        backgroundColor: "rgba(0,0,0,.8)",
        overflow: "hidden",
        borderRadius: "5%",
    },
};



