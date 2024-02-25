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
        query,
        setQuery
    } = useAppEpisodesEffect();

    const nextPage = () => {
        setQuery({page: (+query.get("page") + 1).toString()});
    };

    const prevPage = () => {
        setQuery({page: (+query.get("page") - 1).toString()});
    };

    return (
        <>
            <EpisodesButtonGroup props={{info, prevPage, nextPage}}/>
            <Box className={css.Ep__Container}>
                {!!results.length &&
                    results.map(episode =>
                        <EpisodesCard key={episode.id} props={{episode}}/>
                    )
                }
            </Box>
        </>
    );
};

export {RickAndMortyEpisodesPage};