import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IAuthContext {
    userName?: string,
    setUserName: Dispatch<SetStateAction<string>>
    isAuth: boolean,
    isInit: boolean,
    setIsInit: Dispatch<SetStateAction<boolean>>
    isDrawer: boolean,
    setIsDrawer: Dispatch<SetStateAction<boolean>>
    setIsAuth: Dispatch<SetStateAction<boolean>>
    theme: "light" | "dark",
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

export interface IProps {
    children?: ReactNode;
}
