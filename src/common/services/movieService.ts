import _ from "lodash";

import {myHttpUrls} from "../constants";
import {CategoryType, IMovieList, MovieCategoryEnum} from "../types";

import {apiService} from "./apiService";

const movieService = {
    getMovieList: (category: MovieCategoryEnum | CategoryType = MovieCategoryEnum.popular,
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
};
export {movieService};