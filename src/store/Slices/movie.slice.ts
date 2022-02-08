import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";
import {IMovies} from "../../interfaces/movies.interface";
import {IMovieDetails} from "../../interfaces/movie.details.interface";
import {IMovieImages} from "../../interfaces/movie.images.interface";


interface IMovieState {
    page: number,
    movies: IMovie[],
    total_pages: number,
    movieDetails: IMovieDetails | null,
    chooseMovieId: number,
    moviePhotos: IMovieImages | null
}

const initialState: IMovieState = {
    page: 0,
    movies: [],
    total_pages: 0,
    movieDetails: null,
    chooseMovieId: 0,
    moviePhotos: null
}

export const getAllMovies = createAsyncThunk<void, void>(
    "movieSlice/getAllMovies",
    async (_, {dispatch}) => {
        const {data} = await movieService.getAll();
        dispatch(setMovies({moviesData: data}));
    }
)

export const changeMoviesPage = createAsyncThunk<void, any>(
    "movieSlice/changeMoviesPage",
    async (page: number, {dispatch}) => {
        const {data} = await movieService.changePage(page);
        dispatch(setMovies({moviesData: data}));
    }
)

export const getMovieById = createAsyncThunk<void, number>(
    "movieSlice/getMovieById",
    async (chooseMovieId, {dispatch}) => {
        const {data} = await movieService.getById(chooseMovieId);
        dispatch(getMovieInfo({movie: data}))
    }
)

export const getPhotos = createAsyncThunk<void, number>(
    "movieSlice/getPhotos",
    async (chooseMovieId, {dispatch}) => {
        const {data} = await movieService.getPhotosById((chooseMovieId));
        dispatch(getMoviePhotos({photos: data}))
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
        getId: (state, action: PayloadAction<number>) => {
            // console.log("getId");
            // console.log(action.payload);
            state.chooseMovieId = action.payload
        },
        getMovieInfo: (state, action: PayloadAction<{ movie: IMovieDetails }>) => {
            // console.log("getMovieInfo");
            // console.log(action.payload.movie);
            state.movieDetails = action.payload.movie
        },
        getMoviePhotos: (state, action: PayloadAction<{ photos: IMovieImages }>) => {
            console.log("IMovieImages");
            console.log(action.payload.photos);
            state.moviePhotos = action.payload.photos
        }
    },
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, getMovieInfo, getId, getMoviePhotos} = movieSlice.actions;