import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeMoviesPage, getAllMovies} from "../../store";
import {MovieCard} from "../../components";
// @ts-ignore
import css from '../pages.module.css';

const MoviesListPage: FC = () => {
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    console.log(movies);
    console.log(total_pages);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [])

    return (
        <div className={css.mainBody}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

            {page > 1 ?
                <button onClick={() => dispatch(changeMoviesPage(page - 1))}>Previes</button> : ""}

            <h3>{page ? <h3>Page: {page} of: {total_pages}</h3> : ""}</h3>

            {/*{total_pages <= page ? <h3>{total_pages}</h3> : ""}*/}

            {page <= total_pages ? <button onClick={() => dispatch(changeMoviesPage(page + 1))}>Next</button> : ""}


        </div>
    );
};

export {MoviesListPage};