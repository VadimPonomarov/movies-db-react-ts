import * as React from "react";
import {FC, useContext, useState} from "react";

import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {MyInitMotion} from "common/hocs/MyInitMotion";
import {motion} from "framer-motion";
import {slice} from "lodash";
import moment from "moment";
import {useNavigate} from "react-router-dom";

import {baseImagesUrl, ImageSizeEnum} from "../../../common";
import {AuthContext} from "../../../common/hocs";
import {BadgeWithCircular} from "../../../components/BadgeWithCircularContainer";
import {initMotion} from "../constants";
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
    const {backDropImgPath, setBackDropImgPath} = useContext(AuthContext);
    const [isFullTitle, setIsFullTitle] = useState<boolean>(false);

    const handleOnClick = () => {
        navigate(`${id}`);
    };

    const handleOriginalTitleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setBackDropImgPath(backdrop_path);
    };
    const handleTitleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setIsFullTitle(!isFullTitle);
    };


    return (
        <MyInitMotion>
            <Card className={css.Ep__Card}>
                <Button
                    className={css.Ep__Card_Button}
                    onClick={handleOnClick}
                >
                    <Box className={css.Ep__Card_Box}
                         sx={{
                             backgroundImage: `url(${baseImagesUrl}${ImageSizeEnum.w300}${poster_path})`,
                             overflow: !isFullTitle ? "hidden" : "standart"
                         }}
                    >
                        <CardContent
                            className={css.Ep__Card_Content}
                        >
                            <Typography
                                variant="h5"
                                onClick={
                                    (e) =>
                                        handleOriginalTitleClick(e)
                                }

                            >
                                <motion.div
                                    {...initMotion}
                                >
                                    {original_title}
                                </motion.div>
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                onClick={
                                    (e) => handleTitleClick(e)
                                }
                            >
                                {isFullTitle ?
                                    title :
                                    slice(title
                                        .split(" "), 0, 3)
                                        .join(" ")
                                        .trim() + " ..."
                                }
                            </Typography>
                        </CardContent>
                        <Box
                            className={css.Ep__Card_Box_Box}
                        >

                            <Typography
                                className={css.Ep__Card_Box_Box_T}
                                variant={"caption"}
                            >
                                {moment(release_date).format("DD.MM.YYYY")}
                            </Typography>
                        </Box>
                    </Box>
                </Button>
                <BadgeWithCircular
                    props={{
                        rate: vote_average * 10,
                        content: {
                            initial_:
                                Math.floor(vote_average * 10),
                            whileLoading:
                                <Typography
                                    variant={"h6"} color={"blue"}
                                >
                                    UA
                                </Typography>,
                            success_:
                                <h2>
                                    {Math.floor(vote_average * 10)}
                                </h2>
                        }
                    }}
                />
            </Card>
        </MyInitMotion>
    );
};

export {MovieCard};