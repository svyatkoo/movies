import {moviesAxiosService} from "./axios.service";

import {apiKey, urls} from "../configs/urls";
import {IGenres} from "../interfaces/genre.interface";

export const genreService = {
    // getAll:()=> moviesAxiosService.get(`${urls.genre}${urls.movie}/list?api_key=${apiKey.token}`).then(value => value.data)
    getAll: () => moviesAxiosService.get<IGenres>(`${urls.genre}${urls.movie}/list?api_key=${apiKey.token}`)
}

