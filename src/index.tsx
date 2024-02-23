import React from "react";

import {MyQueryClientProvider} from "common/hocs";
import {AuthContextProvider} from "common/hocs/authContextProvider";
import {ThemeProviderMain} from "common/hocs/themeProviderMain";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import {Router} from "./router";

import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <AuthContextProvider>
        <ThemeProviderMain>
            <MyQueryClientProvider>
                <RouterProvider router={Router}/>
            </MyQueryClientProvider>
        </ThemeProviderMain>
    </AuthContextProvider>
);
