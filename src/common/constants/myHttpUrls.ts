import {MovieCategoryEnum, UrlType} from "../types";

const baseUrl: string = "https://api.themoviedb.org/3/";
const baseImagesUrl: string = "https://image.tmdb.org/t/p/";

const myHttpUrls: UrlType = {
    list: {
        getList: (category: MovieCategoryEnum) => `movie/${category}`,
        getGenreList: "genre/movie/list",
        discoverList: "discover/movie",
    }
};

export {baseUrl, myHttpUrls, baseImagesUrl};