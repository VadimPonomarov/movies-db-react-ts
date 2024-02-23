import * as React from "react";
import {FC, useEffect, useState} from "react";

import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import {CharacterType} from "common";
import {characterService} from "common/services";
import {useNavigate, useParams} from "react-router-dom";

import css from "./index.module.scss";
import {IProps} from "./interfaces";
import {RickAndMortyCharactersCard} from "./RickAndMortyCharactersCard";


const RickAndMortyCharactersPage: FC<IProps> = ({props}) => {
    const {iDs} = useParams()
    const [items, setItems] =
        useState<CharacterType[] | []>([])
    const navigate = useNavigate()

    useEffect(() => {
        characterService.getByds(iDs).then((data) => {
                const mapped =
                    data.map(item =>
                        ({id: item.id, name: item.name, image: item.image})
                    )
                setItems(mapped)
            }
        )
    }, [iDs]);

    return (
        <Box>
            <ButtonGroup variant={"text"} size={"small"}>
                <Button onClick={() => navigate(-1)}>
                    <h2>👈 Back </h2>
                </Button>
            </ButtonGroup>
            <Stack spacing={1}>
                <Box className={css.Ch__Stack_Box}>
                    {items.length &&
                        items.map(item =>
                            <RickAndMortyCharactersCard
                                key={item.id}
                                props={{character: item}}
                            />
                        )}
                </Box>
            </Stack>
        </Box>
    );
};

export {RickAndMortyCharactersPage}