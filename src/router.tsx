import React from "react";

import {MyAuthRequired} from "common/hocs/MyAuthRequired";
import {LoginPage, RegistrationPage} from "pages";
import {MoviePage} from "pages/MoviePageContainer";
import {MoviesPage} from "pages/MoviesPageContainer";
import {NotFound404} from "pages/NotFound_404";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PrivateLayout, PublicLayout} from "./layouts";


const Router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <NotFound404/>,
        children: [
            {
                element: <MyAuthRequired><PrivateLayout/></MyAuthRequired>, children: [
                    {index: true, element: <Navigate to={"/popular"}/>},
                    {path: "/:category", element: <MoviesPage/>},
                    {path: "/:category/:movieId", element: <MoviePage/>},
                ],

            },
            {
                element: <PublicLayout/>, children: [
                    {path: "/login", element: <LoginPage/>},
                    {path: "/registration", element: <RegistrationPage/>},
                ]
            }

        ],
    }])
;


export {Router};