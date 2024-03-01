import * as React from "react";
import {FC} from "react";

import {Box, Chip, Container, Stack} from "@mui/material";
import {indexOf} from "lodash";

import css from "./index.module.scss";
import {useAppBg} from "./useAppBG";


const BadgeGroup: FC = React.memo(() => {

    const {genres, searchParams, handleClick} = useAppBg();

    return (
        <Container className={css.BG__Container}>
            <Stack
                className={css.BG__Stack}
                direction={"row"}
                spacing={1}
            >
                {!!genres.length &&
                    genres.map(item =>
                        <Chip
                            key={item.id}
                            className={css.BG__Chip}
                            style={{
                                backgroundColor: indexOf(searchParams.with_genres, item.id) >= 0 ? "blue" : ""
                            }}
                            label={item.name}
                            variant="outlined"
                            onClick={() => handleClick(item.id)}
                            clickable
                        />
                    )
                }
            </Stack>
        </Container>
    );
});

export {BadgeGroup};