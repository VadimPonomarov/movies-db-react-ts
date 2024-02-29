import * as React from "react";
import {FC} from "react";

import {ButtonGroup, Stack} from "@mui/material";
import {v4} from "uuid";

import {myMenuItems} from "./constants";
import {MyMainMenuItem} from "./SubComponents/MyMainMenuItem";


const MyMainMenu: FC = React.memo(() => {
    return (
        <ButtonGroup variant="text" sx={{pt: 3}}>
            <Stack direction={"row"} spacing={2}>
                {myMenuItems &&
                    myMenuItems.map(item =>
                        Object.keys(item).map(key =>
                            <MyMainMenuItem key={v4()}
                                props={{...Object(item)[key].props}}
                            />
                        ))}
            </Stack>
        </ButtonGroup>
    );
});

export {MyMainMenu};