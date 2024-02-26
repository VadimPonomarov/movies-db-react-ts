import * as React from "react";
import {FC, memo, useContext} from "react";


import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, Container, FormLabel, Paper, Stack} from "@mui/material";
import {myFormAnimateDefaultProps} from "common/constants/myFormAnimateDefaultProps";
import {AuthContext} from "common/hocs/MyAuthContextProvider";
import {useContainerWidthResponsive} from "common/hooks/useContainerWidthResponsive";
import {FormProvider, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {v4} from "uuid";

import {getCredentials, isAuthWithCredentials} from "../../common/services";
import {IAuthCredentials} from "../MyRegistrationForm/formTypes";

import {FormField} from "./FormField";
import {formFields} from "./formFields";
import {formSchema} from "./formSchema";
import {formInputType, IProps} from "./formTypes";
import css from "./index.module.scss";


const LoginForm_: FC<IProps> = ({props}) => {
    const {formLabel = "Form", animate = true} = props;
    const [maxWidth] = useContainerWidthResponsive({});
    const {setIsAuth, setUserName} = useContext(AuthContext);
    const navigate = useNavigate();

    const {...methods} =
        useForm<formInputType | unknown>({
            resolver: yupResolver(formSchema),
            mode: "onBlur"
        });
    const onSubmit = (data: IAuthCredentials) => {
        const isAuth = isAuthWithCredentials(data);
        if (isAuth) {
            setIsAuth(true);
            const {name} = getCredentials();
            setUserName(name);
        }
        navigate("/");
    };

    return (
        <FormProvider {...methods}>
            <Box style={css} {...animate && {...myFormAnimateDefaultProps}}>
                <Container>
                    <Container maxWidth={maxWidth}>
                        <Paper>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Stack direction={"column"}>
                                    <FormLabel>{formLabel}</FormLabel>
                                    {formFields &&
                                        Object.keys(formFields).map(
                                            item =>
                                                <FormField
                                                    key={v4()}
                                                    name={item}
                                                    extraProps={formFields[item].props}
                                                />
                                        )
                                    }
                                    <Button
                                        type={"submit"}
                                        variant={"text"}
                                        disabled={!methods.formState.isValid}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Container>
                </Container>
            </Box>
        </FormProvider>
    );
};

export const LoginForm = memo(LoginForm_);