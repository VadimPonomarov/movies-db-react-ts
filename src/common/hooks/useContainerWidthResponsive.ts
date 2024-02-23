import {useState} from "react";

import {useEffectOnce} from "usehooks-ts";

import {myFormBreakPoints} from "../constants/myFormBreakPoints";
import {MyBreakPointsType, MyBreakPointType} from "../types/myFormTypes";

type IProps = {
    breakPoints?: MyBreakPointsType;
};

const useContainerWidthResponsive = (props: IProps) => {
    const [value, setValue] = useState<MyBreakPointType>();
    const {breakPoints} = props;
    const [breakpoints] = useState({...myFormBreakPoints, ...breakPoints});

    const handleMaxWidth = () => {
        const width = window.innerWidth;

        Object.keys(breakpoints).forEach(item => {
                if (width < 360) {
                    setValue(breakpoints.xs);
                } else if (width < 600) {
                    setValue(breakpoints.sm);
                } else if (width < 960) {
                    setValue(breakpoints.md);
                } else if (width < 1280) {
                    setValue(breakpoints.lg);
                } else {
                    setValue(breakpoints.xl);
                }
            }
        )
    };

    useEffectOnce(() => {
        handleMaxWidth();
    });

    useEffectOnce(() => {
        window.addEventListener("resize", handleMaxWidth);
        return () => {
            window.removeEventListener("resize", handleMaxWidth);
        };
    });

    return [value];
};
export {useContainerWidthResponsive};