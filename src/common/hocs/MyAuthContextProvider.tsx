import React, {createContext, FC, useState} from "react";

import {IAuthContext, IProps} from "./interfaces";


const AuthContext = createContext<IAuthContext>(null);

const MyAuthContextProvider: FC<IProps> = ({children}) => {
    const [userName, setUserName] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [isInit, setIsInit] = useState(true);
    const [isDrawer, setIsDrawer] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <AuthContext.Provider value={{userName, setUserName, isAuth, setIsAuth, theme, setTheme, isDrawer, setIsDrawer, isInit, setIsInit}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, MyAuthContextProvider};