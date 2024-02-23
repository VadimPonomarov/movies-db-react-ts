import * as React from "react";

import {MyRegistrationForm} from "../../forms";

import styles from "./index.module.scss";

const RegistrationPage = () => {
    return (
        <div className={styles.registrationPage}>
            <MyRegistrationForm props={{formLabel: "Registration Form"}}/>
        </div>
    );
};

export {RegistrationPage}