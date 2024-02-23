import {useEffect, useState} from "react";

import {episodeService} from "common/services";
import {IRiCkAndMortyInfo, IRickAndMortyResult} from "common/types";
import {useSearchParams} from "react-router-dom";

const useAppEpisodesEffect = () => {
    const [results, setResults] = useState<IRickAndMortyResult[]>([])
    const [info, setInfo] = useState<IRiCkAndMortyInfo | {}>({})
    const [query, setQuery] = useSearchParams({page: "1"})
    const page = parseInt(query.get("page"))

    useEffect(() => {
        episodeService.getAll(page)
            .then(({info, results}) => {
                setResults(results || [])
                setInfo({prev: info.prev, next: info.next})
            })
    }, [page]);

    return {info, setInfo, results, setResults, query, setQuery}
}

export {useAppEpisodesEffect}