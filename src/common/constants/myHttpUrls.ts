const baseUrl = "https://rickandmortyapi.com/api";
const episodes = "/episode";
const characters = "/character";
const myHttpUrls = {
    episodes,
    characters: {
        byIds: (ids: string) => `${characters}/${ids}`
    }
};

export {baseUrl, myHttpUrls}