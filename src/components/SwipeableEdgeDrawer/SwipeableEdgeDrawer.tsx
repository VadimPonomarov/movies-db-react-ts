import * as React from "react";
import {FC, useContext, useState} from "react";

import {Global} from "@emotion/react";
import {Box, Button, Container, CssBaseline, styled, SwipeableDrawer, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useParams} from "react-router-dom";

import {AuthContext} from "../../common/hocs";
import {BadgeGroup} from "../BadgeGroup";

import {drawerBleeding, pullerProps, rootProps} from "./constants";
import css from "./index.module.scss";
import {IProps} from "./interfaces";

const Root =
    styled("div")(({theme}) => ({
        rootProps,
        backgroundColor:
            theme.palette.mode === "light" ? grey[100] : theme.palette.background.default,
    }));

const StyledBox =
    styled("div")(({theme}) => ({
        backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
    }));

const Puller =
    styled("div")(({theme}) => ({
        pullerProps,
        backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    }));

const SwipeableEdgeDrawer: FC<IProps> = (props) => {
    const {window} = props;
    const {isAuth} = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Root>
            <CssBaseline/>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <Box>
                {isAuth &&
                    <Button
                        className={css.Sed__Box_Button}
                        variant={"text"}
                        onClick={toggleDrawer(true)}
                    >
                        Genres
                    </Button>
                }
            </Box>

            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true
                }}
            >
                <StyledBox
                    className={css.Sed__StyledBox}
                    sx={{
                        top: -drawerBleeding
                    }}
                >
                    <Puller/>
                    <Typography sx={{p: 2, color: "text.secondary"}}>
                        "Genres"
                    </Typography>
                </StyledBox>
                <Container className={css.Sed__BG_Container}>
                    <BadgeGroup/>
                </Container>
            </SwipeableDrawer>
        </Root>
    );
};

export {SwipeableEdgeDrawer};