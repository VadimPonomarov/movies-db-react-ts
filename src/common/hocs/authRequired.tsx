import React, {FC, useContext, useEffect} from "react";

import {Navigate, useNavigate} from "react-router-dom";

import {getCredentials} from "../services";

import {AuthContext} from "./authContextProvider";
import {IProps} from "./interfaces";


const AuthRequired: FC<IProps> = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const isRegistered = getCredentials();
        if (!isRegistered) navigate("/registration");
    }, [navigate]);

    if (!isAuth) return <Navigate to="/login"/>;

    return (
        <>
            {children}
        </>
    );
};

export {AuthRequired};
