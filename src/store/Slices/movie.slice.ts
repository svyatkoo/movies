import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";
import {IMovies} from "../../interfaces/movies.interface";
import {IMovieDetails} from "../../interfaces/movie.details.interface";

interface IMovieState {
    page: number,
    movies: IMovie[],
    total_pages: number,
    movieDetails: IMovieDetails | null,
    chooseMovieId: number
}

const initialState: IMovieState = {
    page: 0,
    movies: [],
    total_pages: 0,
    movieDetails: null,
    chooseMovieId: 0
}

export const getAllMovies = createAsyncThunk(
    "movieSlice/getAllMovies",
    async (_, {dispatch}) => {
        const {data} = await movieService.getAll();
        dispatch(setMovies({moviesData: data}));
    }
)

export const changeMoviesPage = createAsyncThunk<void, any>(
    "movieSlice/changeMoviesPage",
    async (page:number, {dispatch}) => {
        const {data} = await movieService.changePage(page);
        dispatch(setMovies({moviesData: data}));
    }
)

export const getMovieById = createAsyncThunk<void, number>(
    "movieSlice/getMovieById",
    async (chooseMovieId, {dispatch}) =>{
        const {data} = await movieService.getById(chooseMovieId);
        console.log("data");
        console.log(data);
        dispatch(getMovieInfo({movie:data}))
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ moviesData: IMovies }>) => {
            state.movies = action.payload.moviesData.results;
            state.page = action.payload.moviesData.page;
            state.total_pages = action.payload.moviesData.total_pages;
        },
        getId: (state, action:PayloadAction<number>) => {
            console.log("getId");
            console.log(action.payload);
            state.chooseMovieId = action.payload
        },
        getMovieInfo: (state, action:PayloadAction<{movie: IMovieDetails}>) => {
            console.log("getMovieInfo");
            console.log(action.payload.movie);
            state.movieDetails = action.payload.movie
        },
    }
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, getMovieInfo, getId} = movieSlice.actions;