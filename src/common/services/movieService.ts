import {myHttpUrls} from "../constants";
import {IMovieList, MovieCategoryEnum} from "../types";

import {apiService} from "./apiService";

const movieService = {
    getMovieList: (category: MovieCategoryEnum = MovieCategoryEnum.popular,
                   page: number = 1): Promise<IMovieList> =>
        apiService.get(myHttpUrls.list.getList(category), {params: {page}})
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
};
export {movieService};