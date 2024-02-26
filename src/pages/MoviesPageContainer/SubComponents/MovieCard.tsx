import * as React from "react";
import {FC} from "react";

import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {MyInitMotion} from "common/hocs/MyInitMotion";
import {motion} from "framer-motion";
import moment from "moment";
import {useNavigate} from "react-router-dom";

import {BadgeWithCircular} from "../../../components/BadgeWithCircularContainer";
import css from "../index.module.scss";
import {ICardProps} from "../interfaces";

const MovieCard: FC<ICardProps> = ({props}) => {
    const {
        item: {
            id,
            backdrop_path,
            poster_path,
            release_date,
            title,
            original_title,
            popularity,
            vote_average,
            vote_count
        }
    } = props;
    const navigate = useNavigate();

    const handleOnClick = () => {

    };


    return (
        <MyInitMotion>
            <Card className={css.Ep__Card}>
                <Button
                    className={css.Ep__Card_Button} onClick={() => handleOnClick()}>
                    <Box className={css.Ep__Card_Box}
                         sx={{
                             backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
                             backgroundSize: "contain",
                             backgroundRepeat: "no-repeat",
                             overflow: "hidden",
                         }}
                    >
                        <CardContent
                            className={css.Ep__Card_Content}>
                            <Typography
                                component="div" variant="h5">
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileHover={{
                                        opacity: .6,
                                        background: "black",
                                        overflow: "hidden",
                                        borderRadius: "5%",
                                    }}
                                >
                                    {original_title}
                                </motion.div>
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {title}
                            </Typography>
                        </CardContent>
                        <Box className={css.Ep__Card_Box_Box}>
                            <Typography className={css.Ep__Card_Box_Box_T} variant={"caption"}>
                                {moment(release_date).format("DD.MM.YYYY")}
                            </Typography>
                        </Box>
                    </Box>
                </Button>
                <BadgeWithCircular/>
            </Card>
        </MyInitMotion>
    )
        ;
};

export {MovieCard};