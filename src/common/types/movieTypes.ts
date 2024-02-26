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

export type ListType = (category: MovieCategoryEnum) => CategoryType;

export type UrlType = {
    list: {
        getList?: ListType
    }
}