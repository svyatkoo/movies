import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";
import {IMovies} from "../../interfaces/movies.interface";

interface IMovieState {
    page: number,
    movies: IMovie[],
    total_pages: number,
    movieDetails: object,
    chooseMovieId: number
}

const initialState: IMovieState = {
    page: 0,
    movies: [],
    total_pages: 0,
    movieDetails: {},
    chooseMovieId: 550
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
    async (page, {dispatch}) => {
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
        getMovieInfo: (state, action) => {
            console.log("action.payload.movie");
            console.log(action.payload.movie);
            state.movieDetails = action.payload.movie
        },
        getId: (state, action) => {
            // console.log("action.payload.movie");
            // console.log(action.payload);
            state.chooseMovieId = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, getMovieInfo, getId} = movieSlice.actions;