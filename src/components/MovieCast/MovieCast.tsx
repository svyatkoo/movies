import React, {FC} from 'react';
import {ICast} from "../../interfaces/credits.interface";
import {photoSize, photoURL} from "../../configs/urls";
// @ts-ignore
import css from "../components.module.css";

const MovieCast: FC<{ actor: ICast }> = ({actor}) => {
    const {name, profile_path} = actor;
    const actorPhoto = photoURL + photoSize.w45 + profile_path;

    return (
        <div className={css.actorsWrapper}>
            <div>
                <img src={actorPhoto} alt={name}/>
            </div>
            <div>{name}</div>
        </div>
    );
};

export {MovieCast};