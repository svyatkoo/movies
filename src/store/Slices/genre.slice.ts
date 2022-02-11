import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre, IGenres} from "../../interfaces/genre.interface";
import {genreService} from "../../services/genre.service";

interface IGenreState {
    genres: IGenre[] | null,
    genreId: number | null,
    genreName: string | null
}

const initialState: IGenreState = {
    genres: [],
    genreId: null,
    genreName: null
}

export const getAllGenres = createAsyncThunk(
    "genreSlice/getAllGenres",
    async (_, {dispatch}) => {
        const {data} = await genreService.getAll();
        dispatch(setGenres({data}))
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<{ data: IGenres }>) => {
            state.genres = action.payload.data.genres
        },
        setGenre: (state, action: PayloadAction<{ data: IGenre }>) => {
            state.genreId = action.payload.data.id;
            state.genreName = action.payload.data.name;
        }
    }
})

const genreReducer = genreSlice.reducer;
export default genreReducer;

export const {setGenres, setGenre} = genreSlice.actions;