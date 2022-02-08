import React, {FC} from 'react';
import {IMovieDetails} from "../../interfaces/movie.details.interface";

const MovieDetailCard:FC<{ movieData: IMovieDetails }> = ({movieData}) => {
    const {original_title} = movieData;
    return (
        <div>
            <h1>{original_title}</h1>
        </div>
    );
};

export {MovieDetailCard};