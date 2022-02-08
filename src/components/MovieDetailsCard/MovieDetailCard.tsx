import React, {FC, useEffect} from 'react';
import {IMovieDetails} from "../../interfaces/movie.details.interface";
import {photoSize, photoURL} from "../../configs/urls";
import "./movie.detail.card.css";
import {MoviePhotos} from "../MoviePhotos/MoviePhotos";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getPhotos} from "../../store";

const MovieDetailCard: FC<{ movieData: IMovieDetails }> = ({movieData}) => {
    const {
        vote_count, vote_average, poster_path, original_title, title, tagline, status, runtime,
        spoken_languages, release_date, id, production_countries, overview, imdb_id, homepage,
        genres, backdrop_path, popularity,
    } = movieData;



    ////////////////
    const {moviePhotos, chooseMovieId} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        getPhotos(chooseMovieId);
    }, [chooseMovieId])

/////////////////////////

    console.log("moviePhotos");
    console.log(moviePhotos);

    const poster1 = photoURL + photoSize.w500 + backdrop_path;
    const poster2 = photoURL + photoSize.w400 + poster_path;
    const poster3 = photoURL + photoSize.w45 + "/mW1NolxQmPE16Zg6zuWyZlFgOwL.jpg";
    return (
        <div className="container">
            <div className="mainWrapper">
                <div className="leftSlider">
                    <div>
                        <img src={poster2} alt="poster"/>
                    </div>

                    <div>
                        <div>Vote average: {vote_average}</div>
                        <div>Vote count: {vote_count}</div>
                        <div>Popularity: {popularity}</div>
                    </div>
                </div>

                <div className="mainBody">
                    <div>
                        <h1>{original_title}</h1>
                        <h4>{tagline}</h4>
                    </div>

                    <div className="mainBodyHeader">
                        <div>Runtime: {runtime} min.</div>
                        <div>Genres: | {genres.map(item => item.name + " | ")}</div>
                        <div>Production countries: {production_countries[0].name}</div>
                        <div>Release date: {release_date}</div>
                        <div>Spoken languages: {spoken_languages[0].english_name}</div>
                        <div>Status: {status}</div>
                        <div>Homepage: <a href="{homepage}">{homepage}</a></div>
                    </div>

                    <div className="mainBodyActors">
                        <div>Actors:</div>
                        <div className="actors">
                            <div className="actorsItem">
                                <img src={poster3} alt="poster"/>
                                <p>ACTOR NAME</p>
                            </div>
                            <div className="actorsItem">
                                <img src={poster3} alt="poster"/>
                                <p>ACTOR NAME</p>
                            </div>
                        </div>
                    </div>

                    <div className="mainBodyOverview">
                        <div>{overview}</div>
                    </div>

                    <div className="mainBodyPhotoSlider">
                        {moviePhotos && <MoviePhotos key={moviePhotos.id} photos={moviePhotos}/>}
                    </div>


                </div>
            </div>

            <div className="videoContainer">
                Video Player
            </div>
        </div>
    );
};

export {MovieDetailCard};