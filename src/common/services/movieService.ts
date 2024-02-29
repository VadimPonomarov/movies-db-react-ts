import _ from "lodash";

import {myHttpUrls} from "../constants";
import {ISearchParams} from "../hocs/interfaces";
import {IGenreListResponse, IMovieList, MovieCategoryEnum} from "../types";

import {apiService} from "./apiService";

const movieService = {
    getMovieList: (category: MovieCategoryEnum = MovieCategoryEnum.popular,
                   page: number): Promise<IMovieList> =>
        apiService.get(myHttpUrls.list.getList(category), {
            params: {
                page: _.max<number>([page, 1])
            }
        })
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
    getGenreList: (): Promise<IGenreListResponse> =>
        apiService.get(myHttpUrls.list.getGenreList)
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
    getDiscoverList: (category: MovieCategoryEnum = MovieCategoryEnum.discover,
                      page: number, extraParams: any): Promise<IMovieList> =>
        apiService.get(myHttpUrls.list.discoverList, {
            params: {
                page: _.max<number>([page, 1]),
                ...extraParams
            }
        }).then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
};
export {movieService};