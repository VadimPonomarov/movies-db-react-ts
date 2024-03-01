import  {useEffect, useState} from "react";

import {getCredentials} from "../../common/services";

const UseAppToolBar = () => {
    const [registered, setIsRegistered] = useState<boolean>();

    useEffect(() => {
       setIsRegistered(!!getCredentials())
    }, [registered]);

    return {registered};
};

export {UseAppToolBar};