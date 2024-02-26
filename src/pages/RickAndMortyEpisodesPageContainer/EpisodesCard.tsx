import * as React from "react";
import {FC} from "react";

import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {InitMotion} from "common/hocs/initMotion";
import moment from "moment";
import {useNavigate} from "react-router-dom";

import {BadgeWithCircular} from "../../components/BadgeWithCircularContainer";

import css from "./index.module.scss";
import {ICardProps} from "./interfaces";

const EpisodesCard: FC<ICardProps> = ({props}) => {
    const {item: {id,release_date, title, original_title, popularity, vote_average, vote_count}} = props;
    const navigate = useNavigate();

    const handleOnClick = () => {

    };


    return (
        <InitMotion>
            <Card className={css.Ep__Card}>
                <Button className={css.Ep__Card_Button} onClick={() => handleOnClick()}>
                    <Box className={css.Ep__Card_Box}>
                        <CardContent className={css.Ep__Card_Content}>
                            <Typography component="div" variant="h5">
                                {original_title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {title}
                            </Typography>
                        </CardContent>
                        <Box className={css.Ep__Card_Box_Box}>
                            <Typography className={css.Ep__Card_Box_Box_T} variant={"caption"}>
                                {moment(release_date).format("DD.MM.YYYY HH:mm:ss")}
                            </Typography>
                        </Box>
                    </Box>
                </Button>
                <BadgeWithCircular/>
            </Card>
        </InitMotion>
    );
};

export {EpisodesCard};