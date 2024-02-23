import {myHttpUrls} from "common/constants/myHttpUrls";
import {CharacterType} from "common/types";

import {apiService} from ".";


const characterService = {
    getByds: (ids: string): Promise<CharacterType[]> =>
        apiService.get(myHttpUrls.characters.byIds(ids))
            .then(({data}) => data)
}
export {characterService}