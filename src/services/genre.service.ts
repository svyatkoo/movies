import {moviesAxiosService} from "./axios.service";

import {apiKey, urls} from "../configs/urls";
import {IGenres} from "../interfaces/genre.interface";

export const genreService = {
    getAll: () => moviesAxiosService.get<IGenres>(`${urls.genre}${urls.movie}/list?api_key=${apiKey.token}`)
}

