import _ from "lodash";

import {MovieCategoryEnum} from "../../common";

import {IProps} from "./interfaces";

type MenuItemType = {
    [key in keyof typeof MovieCategoryEnum]?: IProps
}

const getItem: (item: MovieCategoryEnum) => Partial<MenuItemType> =
    (item) => ({
        [`${item}`]: {
            props: {
                caption: item,
                uri: `/${item}`
            }
        }
    });

const menuItems: MovieCategoryEnum[] = [
    MovieCategoryEnum.popular,
    MovieCategoryEnum.now_playing,
    MovieCategoryEnum.top_rated,
    MovieCategoryEnum.upcoming,
    MovieCategoryEnum.discover,
];
export const myMenuItems: Partial<MenuItemType>[] =
    menuItems.map(
        item => getItem(item)
    );