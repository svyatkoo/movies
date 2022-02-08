import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {Genres} from "../../components";
// @ts-ignore
import css from "../pages.module.css";

const HomePage: FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <NavLink to={"movies"}>Movies</NavLink>
                <NavLink to={"tv"}>TV</NavLink>
            </div>

            <div className={css.mainContainer}>
                <div className={css.menu}>
                    <Genres/>
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>

            <div className={css.footer}>
                <p>@footer</p>
            </div>
        </div>
    );
};

export {HomePage};