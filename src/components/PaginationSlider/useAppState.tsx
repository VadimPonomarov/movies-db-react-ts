import * as React from "react";

import {BehaviorSubject, debounceTime} from "rxjs";

import {useAppMoviesEffect} from "../../common/hooks/useAppMoviesEffect";

const useAppState = (initial: number) => {
    const [value, setValue] = React.useState(initial);
    const {setQuery} = useAppMoviesEffect();
    const flow$ = new BehaviorSubject({page: "1"});
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        flow$.pipe(debounceTime(500));
        flow$.next({page: "" + newValue});
        flow$.subscribe(event => setQuery(event));
        flow$.unsubscribe();
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === "" ? 1 : Number(event.target.value));
        flow$.pipe(debounceTime(500));
        flow$.next({page: "" + event.target.value});
        flow$.subscribe(event => setQuery(event));
        flow$.unsubscribe();
    };

    return {value, setValue, handleSliderChange, handleInputChange};
};

export {useAppState};