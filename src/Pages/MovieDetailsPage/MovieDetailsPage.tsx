import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById, getPhotos} from "../../store";
import {MovieDetailCard} from "../../components";

const MovieDetailsPage: FC = () => {
    const {movieDetails, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const pageId = useParams();

    useEffect(() => {
        if (chooseMovieId) {
            dispatch(getMovieById(chooseMovieId));
            dispatch(getPhotos(chooseMovieId))
        }
        dispatch(getMovieById(Number(pageId.id)));
        dispatch(getPhotos(Number(pageId.id)))
    }, [chooseMovieId, dispatch, pageId.id])

    return (
        <div>
            {movieDetails && <MovieDetailCard key={movieDetails.id} movieData={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};