import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {IMovies} from "../../interfaces/movies.interface";
import {IMovieDetails} from "../../interfaces/movie.details.interface";
import {IMovieImages} from "../../interfaces/movie.images.interface";
import {ICredits} from "../../interfaces/credits.interface";

interface IMovieState {
    page: number | null,
    movies: IMovies | null,
    total_pages: number | null,
    movieDetails: IMovieDetails | null,
    chooseMovieId: number | null,
    moviePhotos: IMovieImages | null,
    credits: ICredits | null
}

const initialState: IMovieState = {
    page: null,
    movies: null,
    total_pages: null,
    movieDetails: null,
    chooseMovieId: null,
    moviePhotos: null,
    credits: null
}

export const getAllMovies = createAsyncThunk<void, void>(
    "movieSlice/getAllMovies",
    async (_, {dispatch}) => {
        const {data} = await movieService.getAll();
        dispatch(setMovies({moviesData: data}));
    }
)

export const changeMoviesPage = createAsyncThunk<void, number>(
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
        const {data} = await movieService.getPhotosById(chooseMovieId);
        dispatch(getMoviePhotos({photos: data}))
    }
)

export const getMovieCredits = createAsyncThunk<void, number>(
    "movieSlice/getMovieCredits",
    async (chooseMovieId, {dispatch}) => {
        const {data} = await movieService.getCredits(chooseMovieId);
        dispatch(setMovieCredits({credits: data}))
    }
)

export const getMoviesByGenre = createAsyncThunk<void, number>(
    "movieSlice/getMoviesByGenre",
    async (genreId, {dispatch}) => {
        const {data} = await movieService.getByGenre(genreId);
        dispatch(setMovies({moviesData: data}));
    }
)

export const changeGenreMoviesPage = createAsyncThunk<void, any>(
    "movieSlice/changeGenreMoviesPage",
    async ({newPage, genreId}, {dispatch}) => {
        const {data} = await movieService.changeGenreMoviePage(newPage, genreId);
        dispatch(setMovies({moviesData: data}));
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ moviesData: IMovies }>) => {
            state.movies = action.payload.moviesData;
            state.page = action.payload.moviesData.page;
            state.total_pages = action.payload.moviesData.total_pages;
        },
        getId: (state, action: PayloadAction<number>) => {
            state.chooseMovieId = action.payload
            const storeId = JSON.stringify(state.chooseMovieId);
            localStorage.setItem("myId", storeId);

        },
        getMovieInfo: (state, action: PayloadAction<{ movie: IMovieDetails }>) => {
            state.movieDetails = action.payload.movie
        },
        getMoviePhotos: (state, action: PayloadAction<{ photos: IMovieImages }>) => {
            state.moviePhotos = action.payload.photos
        },
        setMovieCredits: (state, action:PayloadAction<{credits:ICredits}>) => {
            state.credits = action.payload.credits
        }
    },
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMovies, getMovieInfo, getId, getMoviePhotos, setMovieCredits} = movieSlice.actions;