import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store/Slices/genre.slice";

const Genres:FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getAllGenres())
    }, [])

    return (
        <div>
            Genres
            {genres.map(item => <li>{item.name}</li> )}
        </div>
    );
};

export {Genres};