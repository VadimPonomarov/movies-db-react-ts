import {myHttpUrls} from "../constants/myHttpUrls";
import {IRickAndMortyEpisode} from "../types";

import {apiService} from "./apiService";

const episodeService = {
    getAll: (page = 1): Promise<IRickAndMortyEpisode> =>
        apiService.get(myHttpUrls.episodes, {params: {page}})
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
};
export {episodeService}