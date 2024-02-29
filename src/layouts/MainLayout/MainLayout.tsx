import {Suspense} from "react";

import {MyAppBar} from "components/MyAppBarContainer/MyAppBar";
import {Outlet} from "react-router-dom";

import {SwipeableEdgeDrawer} from "../../components/SwipeableEdgeDrawer";

const MainLayout = () => {
    return (
        <>
            <MyAppBar/>
            <SwipeableEdgeDrawer/>
            <Suspense fallback={"<h1>Loading ...</h1>"}>
                <Outlet/>
            </Suspense>
        </>
    );
};

export {MainLayout};