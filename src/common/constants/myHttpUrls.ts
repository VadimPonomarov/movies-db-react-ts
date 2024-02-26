import {ImageSizeEnum, MovieCategoryEnum, UrlType} from "../types";

const baseUrl = "https://api.themoviedb.org/3/movie/";
const baseImagesUrl = "https://image.tmdb.org/t/p/";


const myHttpUrls: UrlType = {
    list: {
        getList: (category: MovieCategoryEnum) => category,
    },
    images: {
        getImage: (size: ImageSizeEnum, url: string) => `${size}${url}`
    }
};

export {baseUrl, myHttpUrls, baseImagesUrl};