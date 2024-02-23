import React, {FC} from 'react';

import {Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from '@mui/material';

import css from "./index.module.scss"
import {IPropsCharacters} from "./interfaces";

const RickAndMortyCharactersCard: FC<IPropsCharacters> = ({props}) => {
    const {character: {id, name, image}} = props
    return (
        <Card className={css.Ch__Card} variant={"elevation"}>
            <CardActionArea>
                <Stack direction={"row"}>
                    <CardMedia
                        className={css.Ch__Card_media}
                        component="img"
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {name}
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    );
};

export {RickAndMortyCharactersCard}