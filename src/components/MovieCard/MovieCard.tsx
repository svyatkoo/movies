import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces/movie.interface";
import {photoSize, photoURL} from "../../configs/urls";
import {useAppDispatch} from "../../hooks";
import {getId} from "../../store";

// @ts-ignore
import css from "../components.module.css";

const MovieCard: FC<{ movie: IMovie }> = ({movie}) => {
    const {id, original_title, poster_path} = movie;
    let poster = photoURL + photoSize.w154 + poster_path;
    const dispatch = useAppDispatch();

    return (
        <div className={css.movieCardContainer}>
            <Link to={"/movies/" + id.toString()} onClick={() => dispatch(getId(id))}>
                <img src={poster} alt={poster_path}/>
                <h4>{original_title}</h4>
            </Link>
        </div>
    );
};

export {MovieCard};