import {MovieCategoryEnum, UrlType} from "../types";

const baseUrl = "https://api.themoviedb.org/3/movie/";


const myHttpUrls: UrlType = {
    list: {
        getList: (category: MovieCategoryEnum) => category,
    }
};

export {baseUrl, myHttpUrls};