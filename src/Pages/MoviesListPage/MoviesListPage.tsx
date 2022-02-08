import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeMoviesPage, getAllMovies} from "../../store";
import {MovieCard} from "../../components";
// @ts-ignore
import css from '../pages.module.css';

const MoviesListPage: FC = () => {
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, [])

    return (
        <div>
            <div className={css.movieList}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.navButtons}>
                {page > 1 ? <button onClick={() => dispatch(changeMoviesPage(page - 1))}>Previews</button> : ""}
                {page ? <h3>Page: {page} of: {total_pages}</h3> : ""}
                {page <= total_pages ? <button onClick={() => dispatch(changeMoviesPage(page + 1))}>Next</button> : ""}
            </div>
        </div>
    );
};

export {MoviesListPage};