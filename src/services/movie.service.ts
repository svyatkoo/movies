import {moviesAxiosService} from "./axios.service";

import {apiKey, urls} from "../configs/urls";


export const movieService = {
    // getAll:()=>moviesAxiosService.get<IMovie[]>(urls.movie)
    // getAll:()=>moviesAxiosService.get(urls.movie + timeFrame.week + apiKey.api) // + &page=2
    // getAll:()=>moviesAxiosService.get(urls.movie + apiKey.api), // + &page=2
    getAll:()=>moviesAxiosService.get(`${urls.discover}${urls.movie}?api_key=${apiKey.token}`), // + &page=2
    changePage:(page:number)=>moviesAxiosService.get(`${urls.discover}${urls.movie}?api_key=${apiKey.token}&page=${page}`),
    getById:(id:number)=>moviesAxiosService.get(`${urls.movie}/${id}?api_key=${apiKey.token}`)
}
