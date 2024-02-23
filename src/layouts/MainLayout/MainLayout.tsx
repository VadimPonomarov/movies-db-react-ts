import {Suspense} from "react";

import {Box} from "@mui/material";
import {MyAppBar} from "components/myAppBarContainer/MyAppBar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <Box>
            <MyAppBar/>
            <Suspense fallback={"<h1>Loading ...</h1>"}>
                <Outlet/>
            </Suspense>
        </Box>
    );
};

export {MainLayout};