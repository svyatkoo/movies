import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeGenreMoviesPage, getMoviesByGenre} from "../../store";
import {MovieCard} from "../../components";
// @ts-ignore
import css from "../pages.module.css";

const MoviesGenreListPage: FC = () => {
    const {genreId, genreName} = useAppSelector(state => state.genreReducer)
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();
    const pageGenreId = useParams();

    useEffect(() => {
        if (genreId) {
            dispatch(getMoviesByGenre(Number(genreId)));
        }
        dispatch(getMoviesByGenre(Number(pageGenreId.genreId)));
    }, [genreId])

    return (
        <div>
            <div className={css.genreHeader}>
                <h2>Genre: {genreName}</h2>
            </div>

            <div className={css.movieList}>
                {movies?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.navButtons}>
                {page && page > 1 ? <button onClick={() => {
                    const newPage = page - 1;
                    dispatch(changeGenreMoviesPage({newPage, genreId}))
                }}>Previews</button> : ""}

                {page ? <h3>Page: {page} of: {total_pages}</h3> : ""}

                {(page  && total_pages) && page <= total_pages ? <button onClick={() => {
                    const newPage = page + 1;
                    dispatch(changeGenreMoviesPage({newPage, genreId}))
                }}>Next</button> : ""}

            </div>
        </div>
    );
};

export {MoviesGenreListPage};