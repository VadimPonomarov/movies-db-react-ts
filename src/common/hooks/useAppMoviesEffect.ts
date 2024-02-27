import {useEffect, useState} from "react";

import {movieService} from "common/services";
import {IMovieListInfo, IMovieResult, MovieCategoryEnum} from "common/types";
import {useParams, useSearchParams} from "react-router-dom";

const useAppMoviesEffect = () => {
    const [results, setResults] = useState<IMovieResult[]>([]);
    const [info, setInfo] = useState<IMovieListInfo>();
    const [query, setQuery] = useSearchParams({page: "1"});
    const page = parseInt(query.get("page"));
    const {category} = useParams();


    useEffect(() => {
        setQuery({page: "1"});
        // eslint-disable-next-line
    }, [category]);

    useEffect(() => {
        movieService.getMovieList(Object(MovieCategoryEnum)[category], page)
            .then(({results, ...info}) => {
                setResults(results);
                setInfo(info);
            });
    }, [page, category]);


    const nextPage = () => {
        setQuery({page: (+query.get("page") + 1).toString()});
    };

    const prevPage = () => {
        setQuery({page: (+query.get("page") - 1).toString()});
    };

    return {info, setInfo, results, setResults, query, setQuery, prevPage, nextPage};
};

export {useAppMoviesEffect};