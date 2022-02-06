import {moviesAxiosService} from "./axios.service";

import {apiKey, timeFrame, urls} from "../configs/urls";
// import {IMovie} from "../interfaces/movie.interface";

export const movieService = {
    // getAll:()=>moviesAxiosService.get<IMovie[]>(urls.movie)
    // getAll:()=>moviesAxiosService.get(urls.movie + timeFrame.week + apiKey.api) // + &page=2
    // getAll:()=>moviesAxiosService.get(urls.movie + apiKey.api), // + &page=2
    getAll:()=>moviesAxiosService.get(`${urls.movie}${apiKey.api}`), // + &page=2
    // changePage:(page:number)=>moviesAxiosService.get(urls.movie + apiKey.api + "&page=" + `${page}`)
    changePage:(page:number)=>moviesAxiosService.get(`${urls.movie}${apiKey.api}&page=${page}`)
}
