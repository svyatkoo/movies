import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById} from "../../store";
import {MovieDetailCard} from "../../components";

const MovieDetailsPage: FC = () => {
    const {movieDetails, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (chooseMovieId === null) {
            // @ts-ignore
            const localId = JSON.parse(localStorage.getItem("myId"));
            dispatch(getMovieById(localId));
        }
        dispatch(getMovieById(Number(chooseMovieId)));
    }, [chooseMovieId])

    return (
        <div>
            {movieDetails && <MovieDetailCard key={movieDetails.id} movieData={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};