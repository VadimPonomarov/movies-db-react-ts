import {MovieCategoryEnum} from "../../common";

import {IProps} from "./interfaces";

type MenuItemType = {
    [key in keyof typeof MovieCategoryEnum]?: IProps
}

export const myMenuItems: Partial<MenuItemType>[] = [
    {
        [MovieCategoryEnum.popular]: {
            props: {
                caption: "Popular",
                uri: `/${MovieCategoryEnum.popular}`
            }
        }
    },
    {
        [MovieCategoryEnum.now_playing]: {
            props: {
                caption: "Now playing",
                uri: `/${MovieCategoryEnum.now_playing}`
            }
        }
    },
    {
        [MovieCategoryEnum.top_rated]: {
            props: {
                caption: "Top rated",
                uri: `/${MovieCategoryEnum.top_rated}`
            }
        }
    },
    {
        [MovieCategoryEnum.upcoming]: {
            props: {
                caption: "Upcoming",
                uri: `/${MovieCategoryEnum.upcoming}`
            }
        }
    },
];