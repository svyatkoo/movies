import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById, getPhotos} from "../../store";
import {MovieDetailCard} from "../../components";

const MovieDetailsPage: FC = () => {
    const {movieDetails, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovieById(chooseMovieId));
    }, [])

    useEffect(()=> {
        dispatch(getPhotos(chooseMovieId));
    }, [])

    return (
        <div>
            {movieDetails && <MovieDetailCard key={movieDetails.id} movieData={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};