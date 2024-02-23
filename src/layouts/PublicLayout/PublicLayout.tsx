import * as React from "react";
import {FC} from "react";

import { Box } from "@mui/material";
import {Outlet} from "react-router-dom";


const PublicLayout: FC = () => {
    return (
        <Box>
            <Outlet/>
        </Box>
    );
};

export {PublicLayout};