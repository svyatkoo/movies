import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById} from "../../store";
import {MovieDetailCard} from "../../components";

const MovieDetailsPage: FC = () => {
    const {movieDetails, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovieById(chooseMovieId));
    }, [chooseMovieId])

    return (
        <div>
            {movieDetails && <MovieDetailCard key={movieDetails.id} movieData={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};