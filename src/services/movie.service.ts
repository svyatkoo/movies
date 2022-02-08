import {moviesAxiosService} from "./axios.service";

import {apiKey, urls} from "../configs/urls";
import {IMovies} from "../interfaces/movies.interface";
import {IMovieDetails} from "../interfaces/movie.details.interface";
import {IMovieImages} from "../interfaces/movie.images.interface";

export const movieService = {
    getAll:()=>moviesAxiosService.get<IMovies>(`${urls.discover}${urls.movie}?api_key=${apiKey.token}`), // + &page=2
    changePage:(page:number)=>moviesAxiosService.get(`${urls.discover}${urls.movie}?api_key=${apiKey.token}&page=${page}`),
    getById:(id:number)=>moviesAxiosService.get<IMovieDetails>(`${urls.movie}/${id}?api_key=${apiKey.token}`),
    getPhotosById:(id:number)=>moviesAxiosService.get<IMovieImages>(`${urls.movie}/${id}/images?api_key=${apiKey.token}`)
}
