import React, {FC, ReactElement} from "react";

import {SvgIconComponent} from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import {Box, CircularProgress, Fab} from "@mui/material";
import {blue, green, grey, orange, red, yellow} from "@mui/material/colors";

export type MuiColorType =
    string
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | typeof red
    | typeof blue
    | typeof green
    | typeof yellow
    | typeof grey
    | typeof orange

export type FabColorType = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | "default"
export type FuncType = () => string | number | ReactElement<SvgIconComponent>
export type ContentType = string | number | ReactElement<SvgIconComponent> | FuncType

export interface IBadgeGr {
    btn: {
        bgColor: MuiColorType,
        bgHoverColor: MuiColorType
    },
    progress: {
        color: MuiColorType,
        size: number,
    },
    fab: {
        fabColor: FabColorType
    },
    content: {
        initial_: ContentType,
        success_: ContentType,
        whileLoading: ContentType,
    }
}

const defaultProps: IBadgeGr = {
    btn: {
        bgColor: green[500],
        bgHoverColor: green[700]
    },
    progress: {
        color: green[500],
        size: 68,
    },
    fab: {
        fabColor: "primary" as FabColorType
    },
    content: {
        initial_: () => 30,
        success_: 33,
        whileLoading: <SaveIcon/>,
    },

};

export interface IBadgeGrProps {
    props?: IBadgeGr;
}

const BadgeWithCircular: FC<IBadgeGrProps> = ({props = defaultProps}) => {
    const {
        btn: {
            bgColor,
            bgHoverColor
        },
        progress: {color, size},
        fab: {fabColor},
        content: {initial_, success_, whileLoading},

    } = props;

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const timer = React.useRef<number>();

    const buttonSx = {
        ...(success && {
            bgcolor: bgColor,
            "&:hover": {
                bgcolor: bgHoverColor,
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);

            }, 2000);
        }
    };

    const valOrFunc = (val: ContentType): Omit<ContentType, "FuncType"> => {
        if (typeof val === "function") {
            return (() => val())();
        }
        return val;
    };

    return (
        <Box sx={{display: "flex", alignItems: "center", position: "absolute", bottom: "-3%", left: "20%"}}>
            <Box sx={{m: 1}}>
                <Fab
                    aria-label="save"
                    color={fabColor as FabColorType}
                    sx={buttonSx}
                    onClick={handleButtonClick}
                >
                    <>
                        {!(success || loading) && valOrFunc(initial_)}
                        {loading && valOrFunc(whileLoading)}
                        {success && valOrFunc(success_)}

                        {loading && (
                            <CircularProgress
                                size={size}
                                sx={{
                                    color,
                                    position: "absolute",
                                    zIndex: 1,
                                }}
                            />
                        )}
                    </>
                </Fab>
            </Box>
        </Box>
    );
};

export {BadgeWithCircular};