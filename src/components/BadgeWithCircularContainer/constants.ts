import {IBadgeGr} from "./interfaces";

export const defaultProps: Partial<IBadgeGr> = {
    btn: {
        bgColor: "default",
        bgHoverColor: "default"
    },
    progress: {
        color: "default",
        size: 55,
    },
    fab: {
        fabColor: "default"
    },
    content: {
        initial_: "",
        whileLoading: "",
        success_: "",
    },
    rate: 75
};