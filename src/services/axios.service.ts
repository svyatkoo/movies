import axios from "axios";

import {moviesURL} from "../configs/urls";

const moviesAxiosService = axios.create({
    baseURL: moviesURL
})

export {moviesAxiosService};