import {Suspense} from "react";

import {MyAppBar} from "components/myAppBarContainer/MyAppBar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <MyAppBar/>
            <Suspense fallback={"<h1>Loading ...</h1>"}>
                <Outlet/>
            </Suspense>
        </>
    );
};

export {MainLayout};