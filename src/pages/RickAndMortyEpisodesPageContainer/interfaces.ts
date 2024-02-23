import {IRiCkAndMortyInfo, IRickAndMortyResult} from "../../common";

export interface IBGProps {
    props: {
        info: IRiCkAndMortyInfo | {},
        prevPage: () => void,
        nextPage: () => void,
    }
}

export interface ICardProps {
    props: {
        episode: IRickAndMortyResult,
    }
}