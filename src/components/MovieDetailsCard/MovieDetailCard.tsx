import React, {FC, useEffect} from 'react';

import {IMovieDetails} from "../../interfaces/movie.details.interface";
import {photoSize, photoURL} from "../../configs/urls";
import {MoviePhotos} from "../MoviePhotos/MoviePhotos";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieCredits, getPhotos} from "../../store";
import {MovieCast} from "../MovieCast/MovieCast";
// @ts-ignore
import css from "../components.module.css";

const MovieDetailCard: FC<{ movieData: IMovieDetails }> = ({movieData}) => {
    const {
        vote_count, vote_average, poster_path, original_title, tagline, status, runtime,
        spoken_languages, release_date, id, budget, production_countries, overview, homepage,
        genres, popularity,
    } = movieData;
    const poster = photoURL + photoSize.w400 + poster_path;

    const {moviePhotos, chooseMovieId, movieDetails, credits} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (chooseMovieId) {
            dispatch(getPhotos(Number(chooseMovieId)));
            dispatch(getMovieCredits(Number(chooseMovieId)))
        }
        // @ts-ignore
        const myId = JSON.parse(localStorage.getItem("myId"));
        dispatch(getPhotos(Number(myId)));
        dispatch(getMovieCredits(Number(myId)))
    }, [movieDetails])

    return (
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <div className={css.leftSlider}>
                    <div>
                        <img src={poster} alt="poster"/>
                    </div>

                    <div className={css.leftSliderInfo}>
                        <div>Vote average: {vote_average}</div>
                        <div>Vote count: {vote_count}</div>
                        <div>Popularity: {popularity}</div>
                    </div>
                </div>

                <div className={css.mainBody}>
                    <div>
                        <h1>{original_title}</h1>
                        <h4>{tagline}</h4>
                    </div>

                    <div className={css.mainBodyHeader}>
                        <div>Runtime: {runtime} min.</div>
                        <div>Genres: | {genres.map(item => item.name + " | ")}</div>
                        <div>Production countries: {production_countries[0].name}</div>
                        <div>Budget: {budget}$</div>
                        <div>Release date: {release_date}</div>
                        <div>Spoken languages: {spoken_languages[0].english_name}</div>
                        <div>Status: {status}</div>
                        {homepage && <div>Homepage: <a href={homepage?.toString()}>click to visit</a></div>}
                    </div>

                    <div className={css.mainBodyActors}>
                        <div className={css.actorsHeader}>Actors:</div>
                        <div className={css.actors}>
                            {credits && credits.cast.map(actor => actor.profile_path && <MovieCast key={actor.id} actor={actor} />)}
                        </div>
                    </div>

                    <div className={css.mainBodyOverview}>
                        <div>{overview}</div>
                    </div>

                    <div className={css.mainBodyPhotoSlider}>
                        {moviePhotos && <MoviePhotos key={moviePhotos.id} photos={moviePhotos}/>}
                    </div>


                </div>
            </div>

            <div className={css.videoContainer}>
                <h1>Video Player</h1>
            </div>
        </div>
    );
};

export {MovieDetailCard};