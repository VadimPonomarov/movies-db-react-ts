import * as React from "react";

const useAppState = (initial: number) => {
    const [value, setValue] = React.useState(initial);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === "" ? 1 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 1) {
            setValue(1);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return {value, setValue, handleSliderChange, handleInputChange, handleBlur};
};

export {useAppState};