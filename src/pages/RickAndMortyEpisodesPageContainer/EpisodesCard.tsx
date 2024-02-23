import * as React from "react";
import {FC} from "react";

import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {motion} from "framer-motion";
import moment from "moment";
import {useNavigate} from "react-router-dom";

import css from "./index.module.scss";
import {ICardProps} from "./interfaces";


const EpisodesCard: FC<ICardProps> = ({props}) => {
    const {episode: {name, air_date, characters, created}} = props;
    const navigate = useNavigate();
    const handleOnClick = () => {
        const iDs =
            characters.map(item =>
                item.split("/").slice(-1)).join(",");
        navigate(`/characters/${iDs}`);
    };

    return (
        <motion.span
            initial={{height: 0}}
            animate={{height: "auto", rotateX:360, rotateZ:360}}
            exit={{height: 0}}
            transition={{duration: 5, delay: Math.random()*2}}
        >
            <Card className={css.Ep__Card}>
                <Button className={css.Ep__Card_Button} onClick={() => handleOnClick()}>
                    <Box className={css.Ep__Card_Box}>
                        <CardContent className={css.Ep__Card_Content}>
                            <Typography component="div" variant="h5">
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {air_date}
                            </Typography>
                        </CardContent>
                        <Box className={css.Ep__Card_Box_Box}>
                            <Typography className={css.Ep__Card_Box_Box_T} variant={"caption"}>
                                {moment(created).format("DD.MM.YYYY HH:mm:ss")}
                            </Typography>
                        </Box>
                    </Box>
                </Button>
            </Card>
        </motion.span>
    );
};

export {EpisodesCard};