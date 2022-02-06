import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";
import {IMovies} from "../../interfaces/movies.interface";

interface IMovieState {
    // page: null | number,
    page: number,
    movies: IMovie[],
    total_pages: number
}

const initialState:IMovieState = {
    page: 0,
    movies: [],
    total_pages: 0,
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
        console.log(page)
        const {data} = await movieService.changePage(page);
        dispatch(setMovies({moviesData: data}));
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{moviesData:IMovies}>) => {
            state.movies = action.payload.moviesData.results;
            state.page = action.payload.moviesData.page;
            state.total_pages = action.payload.moviesData.total_pages;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies} = movieSlice.actions;