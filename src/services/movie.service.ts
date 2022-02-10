import {moviesAxiosService} from "./axios.service";

import {apiKey, urls} from "../configs/urls";
import {IMovies} from "../interfaces/movies.interface";
import {IMovieDetails} from "../interfaces/movie.details.interface";
import {IMovieImages} from "../interfaces/movie.images.interface";
import {ICredits} from "../interfaces/credits.interface";
import {IMovieVideo} from "../interfaces/movie.video.interface";

export const movieService = {
    getAll: () => moviesAxiosService.get<IMovies>(`${urls.discover}${urls.movie}?api_key=${apiKey.token}`), // + &page=2
    changePage: (page: number) => moviesAxiosService.get<IMovies>(`${urls.discover}${urls.movie}?api_key=${apiKey.token}&page=${page}`),
    getById: (id: number) => moviesAxiosService.get<IMovieDetails>(`${urls.movie}/${id}?api_key=${apiKey.token}`),
    getPhotosById: (id: number) => moviesAxiosService.get<IMovieImages>(`${urls.movie}/${id}/images?api_key=${apiKey.token}`),
    getByGenre: (id: number) => moviesAxiosService.get<IMovies>
    (`${urls.discover}${urls.movie}?with_genres=${id}&api_key=${apiKey.token}`),
    changeGenreMoviePage: (page: number, id: number) =>
        moviesAxiosService.get<IMovies>(`${urls.discover}${urls.movie}?with_genres=${id}&page=${page}&api_key=${apiKey.token}`),
    getCredits:(id: number) => moviesAxiosService.get<ICredits>(`${urls.movie}/${id}/credits?api_key=${apiKey.token}`),
    getVideo:(id:number) => moviesAxiosService.get<IMovieVideo>(`${urls.movie}/${id}/videos?api_key=${apiKey.token}`)
}

