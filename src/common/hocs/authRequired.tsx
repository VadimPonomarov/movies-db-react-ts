import React, {FC, ReactNode, useContext} from 'react';

import {Navigate} from 'react-router-dom';

import {AuthContext} from './authContextProvider';

export interface IProps {
    children?: ReactNode;
}

const AuthRequired: FC<IProps> = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return (
        <>
            {children}
        </>
    )
};

export {AuthRequired};
