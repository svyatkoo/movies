import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movie.interface";
import {photoSize, photoURL} from "../../configs/urls";
import "./movie.card.css";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {getId} from "../../store";

const MovieCard: FC<{ movie: IMovie }> = ({movie}) => {
    const {id, original_title, poster_path} = movie;
    const poster = photoURL+photoSize.w200+poster_path;
    const dispatch = useAppDispatch();

    return (
        <div className="movieCardContainer">
            <Link to={id.toString()} onClick={()=>dispatch(getId(id))}>
                <img src={poster} alt={poster_path}/>
                <h4>{original_title}</h4>
            </Link>
        </div>
    );
};

export {MovieCard};