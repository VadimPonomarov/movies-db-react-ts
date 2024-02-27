import {ImageSize, ImageSizeEnum, MovieCategoryEnum, UrlType} from "../types";

const baseUrl = "https://api.themoviedb.org/3/movie/";
const baseImagesUrl = "https://image.tmdb.org/t/p/";


const myHttpUrls: UrlType = {
    list: {
        getList: (category: MovieCategoryEnum) => category,
    }
};

export {baseUrl, myHttpUrls, baseImagesUrl};