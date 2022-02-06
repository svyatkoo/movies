import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces/genre.interface";
import {genreService} from "../../services/genre.service";

interface IGenreState {
    genres: IGenre[]
}

const initialState:IGenreState = {
    genres:[]
}

export const getAllGenres = createAsyncThunk(
    "genreSlice/getAllGenres",
    async (_,{dispatch}) => {
        const {data} = await genreService.getAll();
        dispatch(setGenres({data}))
    }
)

const genreSlice = createSlice({
    name:"genreSlice",
    initialState,
    reducers: {
        setGenres:(state, action) => {
            state.genres = action.payload.data.genres
        }
    }
})

const genreReducer = genreSlice.reducer;
export default genreReducer;

export const {setGenres} = genreSlice.actions;