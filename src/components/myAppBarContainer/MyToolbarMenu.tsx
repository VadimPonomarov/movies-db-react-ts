import React, {FC, useContext} from 'react';

import Menu from "@mui/material/Menu";
import { AuthContext } from 'common/hocs/authContextProvider';
import { useNavigate } from 'react-router-dom';

import {menuProps} from "./constants";
import {IMenuProps as IProps} from "./interfaces";
import {MyToolBarMenuItem} from "./MyToolBarMenuItem";

const MyToolbarMenu: FC<IProps> = ({props}) => {
    const {anchorEl, setAnchorEl} = props

    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)

    const handleRegister = () => {
        setAnchorEl(null);
        navigate("/registration")

    };
    const handleLogin = () => {
        setAnchorEl(null);
        navigate("/login")
    };
    const handleLogout = () => {
        setAnchorEl(null);
        setIsAuth(false)
    };

    return (
        <Menu
            anchorEl={anchorEl}
            {...menuProps}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
        >
            <MyToolBarMenuItem props={{caption: "Register", onClick: handleRegister}}/>
            <MyToolBarMenuItem props={{caption: "Login", onClick: handleLogin}}/>
            <MyToolBarMenuItem props={{caption: "Logout", onClick: handleLogout}}/>
        </Menu>
    );
};

export {MyToolbarMenu};