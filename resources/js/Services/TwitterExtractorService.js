
import { get } from "@/Utils/api";

// const BASE_URL = 'http://extractor.viralget.io/twitter/';
const BASE_URL = 'http://localhost:8002/twitter/';



export const getKeywordData = async (keyword) => {
    const response = await get(BASE_URL + 'extract-keywords?keyword=' + keyword);

    if (response.data.status) {
        return response.data.data;
    }

    // console.log({ response });
    return false;
}


export const getInfluencerData = async (influencer) => {
    const response = await get(BASE_URL + 'twitter/extract-influencer?influencer=' + influencer);

    if (response.data.status) {
        return response.data.data;
    }

    return false;
}

