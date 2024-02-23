import * as React from "react";
import {FC} from "react";

import {LoginForm} from "../../forms";

import styles from "./index.module.scss";

const LoginPage: FC = () => {
    return (
        <div className={styles.loginPage}>
            <LoginForm props={{formLabel: "Login Form"}}/>
        </div>
    );
};

export {LoginPage}