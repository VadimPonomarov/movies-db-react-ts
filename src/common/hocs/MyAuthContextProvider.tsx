import React, {createContext, FC, useState} from "react";

import {IAuthContext, IProps} from "./interfaces";


const AuthContext = createContext<IAuthContext>(null);

const MyAuthContextProvider: FC<IProps> = ({children}) => {
    const [userName, setUserName] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [isInit, setIsInit] = useState(true);
    const [isDrawer, setIsDrawer] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">();
    const [backDropImgPath, setBackDropImgPath] = useState<string>();
    const initContext: IAuthContext = {
        userName,
        setUserName,
        isAuth,
        setIsAuth,
        theme,
        setTheme,
        isDrawer,
        setIsDrawer,
        isInit,
        setIsInit,
        backDropImgPath,
        setBackDropImgPath
    };

    return (
        <AuthContext.Provider value={initContext}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, MyAuthContextProvider};