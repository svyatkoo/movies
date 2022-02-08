import React, {FC} from 'react';

import {IMovieImages} from "../../interfaces/movie.images.interface";
import {photoSize, photoURL} from "../../configs/urls";
import "./movie.photos.css";

const MoviePhotos: FC<{ photos: IMovieImages }> = ({photos}) => {
    const {backdrops} = photos;
    const preLink = photoURL + photoSize.w154;

    return (
        <div className="photosWrapper">
            {backdrops.map(item => <img key={backdrops.indexOf(item)} src={`${preLink}${item.file_path}`} alt="xxx"/>)}
        </div>
    );
};

export {MoviePhotos};