import * as React from "react";
import {FC} from "react";

import {Box} from "@mui/material";
import {useAppEpisodesEffect} from "common/hooks/useAppEpisodesEffect";

import {EpisodesButtonGroup} from "./EpisodesButtonGroup";
import {EpisodesCard} from "./EpisodesCard";
import css from "./index.module.scss";

const RickAndMortyEpisodesPage: FC = () => {
    const {
        info,
        results,
        prevPage,
        nextPage
    } = useAppEpisodesEffect();

    return (
        <>
            {info && <EpisodesButtonGroup props={{info, prevPage, nextPage}}/>}
            <Box className={css.Ep__Container}>
                {!!results.length &&
                    results.map(item =>
                        <EpisodesCard key={item.id} props={{item}}/>
                    )
                }
            </Box>
        </>
    );
};

export {RickAndMortyEpisodesPage};