import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById} from "../../store";

const MovieDetailsPage: FC = () => {
    const {movieDetails, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    // const {original_title} = movieDetails;
    console.log("movieDetails")
    console.log(movieDetails)

    useEffect(() => {
        dispatch(getMovieById(chooseMovieId));
    }, [dispatch])

    return (
        <div>
            {/*<h1>{original_title}</h1>*/}
        </div>
    );
};

export {MovieDetailsPage};