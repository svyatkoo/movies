import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, getMoviesByGenre, setGenre} from "../../store";
// @ts-ignore
import css from "../components.module.css";

const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch, genres?.length])

    return (
        <div className={css.genresBox}>
            <h3>Genres:</h3>

            {genres?.map(item =>
                <Link
                    key={item.id}
                    to={"movies/genre/" + item.id} onClick={() => {
                    dispatch(setGenre({data: item}));
                    dispatch(getMoviesByGenre(item.id))
                }}>
                    <li>{item.name}</li>
                </Link>
            )}
        </div>
    );
};

export {Genres};