import axios from "axios";

import {baseUrl} from "../constants/myHttpUrls";


const apiService = axios.create({
    baseURL: baseUrl,
});

export {apiService};