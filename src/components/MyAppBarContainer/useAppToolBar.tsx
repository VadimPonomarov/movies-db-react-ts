import React, {useContext, useEffect, useState} from "react";

import {AuthContext} from "../../common/hocs";
import {getCredentials} from "../../common/services";

const UseAppToolBar = () => {
    const [registered, setIsRegistered] = useState<boolean>();

    useEffect(() => {
       setIsRegistered(!!getCredentials())
    }, [registered]);

    return {registered};
};

export {UseAppToolBar};