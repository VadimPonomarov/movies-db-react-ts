export interface IMovieDates {
    maximum: string,
    minimum: string
}

export interface IMovieResult {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: "en",
    original_title: string,
    overview: string
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovieList {
    dates: IMovieDates,
    page: number,
    results: IMovieResult[],
    total_pages: number,
    total_results: number
}

export interface IMovieListInfo {
    dates: IMovieDates,
    page: number,
    total_pages: number,
    total_results: number
}

export enum MovieCategoryEnum {
    now_playing = "now_playing",
    popular = "popular",
    top_rated = "top_rated",
    upcoming = "upcoming"
}

export type CategoryType = "now_playing" | "popular" | "top_rated" | "upcoming"
export type ImageSize = "w200" | "w300" | "w400" | "w500" | "original"

export enum ImageSizeEnum {
    w200 = "w200",
    w300 = "w300",
    w400 = "w400",
    w500 = "w500",
    original = "original",
}

export type ListType = (category: string | MovieCategoryEnum | CategoryType) => CategoryType;
export type ImageType = (size: ImageSize) => string;

export type UrlType = {
    list?: {
        getList?: ListType
    },
}