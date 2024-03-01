import * as React from "react";
import {FC, SyntheticEvent} from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Box, Button, Card, CardContent, CardMedia, Modal, Rating, Stack, Typography} from "@mui/material";
import moment from "moment";
import {useNavigate} from "react-router-dom";

import {baseImagesUrl, ImageSizeEnum} from "../../../common";
import {movieService} from "../../../common/services";
import {BadgeWithCircular} from "../../../components";

import css from "./index.module.scss";
import {IProps} from "./interfaces";


const MovieDetailsCard: FC<IProps> = ({props}) => {
    const {
        movieDetails: {
            id,
            imdb_id,
            backdrop_path,
            poster_path,
            release_date,
            original_title,
            title,
            original_language,
            spoken_languages,
            popularity,
            vote_average,
            vote_count,
            budget,
            genres,
            adult,
            overview,
            revenue,
            runtime,

        }
    } = props;

    const navigate = useNavigate();

    const handleSetRating = (e: SyntheticEvent, value: number | null) => {
        const response = movieService.getSessionId()
            .then(({guest_session_id}) =>
                movieService.postRating(id, {value}, guest_session_id)
                    .then(data => console.log(data))
            );
    };

    return (
        <Box
            className={css.MDC__Box_Container}
            sx={{
                backgroundImage: `url(${baseImagesUrl}${ImageSizeEnum.original}${backdrop_path})`,
            }}
        >
            <Button className={css.MDC__Box_Button} variant={"text"}>
                <Typography variant={"h3"} onClick={() => navigate(-1)}>
                    👈
                </Typography>
            </Button>
            <Card className={css.MDC__Box_Card}>
                <Rating
                    className={css.MDC__Rating}
                    precision={0.5}
                    onChange={handleSetRating}
                    name="customized-10"
                    defaultValue={0}
                    max={10}
                />
                <Box className={css.MDC__Box_Card_Box}>
                    <CardContent sx={{flex: "1 0 auto"}}>
                        <Stack direction={"row"}>
                            <CardMedia
                                className={css.MDC__CardContent_Stack_CM}
                                component="img"
                                image={`${baseImagesUrl}${ImageSizeEnum.w300}${poster_path}`}
                                alt="Live from space album cover"
                            />
                            <Stack direction={"column"} spacing={10}>
                                <Box sx={{padding: "40px"}}>
                                    <Typography variant="h4" color="text.secondary" component="div">
                                        {title} ({moment(release_date).format("YYYY")})
                                    </Typography>
                                    <Typography
                                        className={css.MDC__CardContent_Stack_Stack_T_T}
                                        variant="h6"
                                        color="text.secondary"
                                        component="div"
                                    >
                                        <Box
                                            className={css.MDC__CardContent_Stack_Stack_T_T_Box}
                                            component={"span"}>
                                            {Math.floor(Math.random() * 100)}
                                        </Box>
                                        {moment(release_date).format("DD/MM/YYYY")}
                                        ({original_language.toUpperCase()})

                                        <FiberManualRecordIcon
                                            sx={{fontSize: "small"}}
                                        />
                                        {genres.map(item => item.name).join(",")}

                                        <FiberManualRecordIcon
                                            sx={{fontSize: "small"}}
                                        />
                                        {moment().hours(runtime / 60).format("H")}h
                                        {moment().hours((runtime % 60) / 60).format("mm")}m
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    padding: "40px",
                                    maxWidth: "800px",
                                    display: "flex",
                                    alignContent: "flex-start",
                                    flexWrap: "wrap",
                                }}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        component="div"
                                    >
                                        {overview}
                                    </Typography>
                                </Box>
                            </Stack>
                            <Box className={css.MDC__CardContent_Stack_Stack_Box}>
                                <BadgeWithCircular
                                    props={
                                        {
                                            rate: +vote_average * 10,
                                            progress: {size: 90},
                                            content: {
                                                initial_: `${Math.floor(vote_average * 10)}%`,
                                                whileLoading: `${Math.floor(vote_average * 10)}%`,
                                                success_: `${Math.floor(vote_average * 10)}%`,

                                            }
                                        }
                                    }
                                />

                            </Box>
                        </Stack>

                    </CardContent>
                </Box>
            </Card>
        </Box>

    );
};

export {MovieDetailsCard};