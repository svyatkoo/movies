import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {Genres, UserInfo} from "../../components";
// @ts-ignore
import css from "../pages.module.css";

const HomePage: FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <NavLink to={"movies"}>Movies</NavLink>
                <NavLink to={"tv"}>TV</NavLink>
                <NavLink to={"user"}>UserPage</NavLink>
            </div>

            <div className={css.mainContainer}>
                <div className={css.menu}>
                    <div>
                        <UserInfo/>
                    </div>

                    <div>
                        <Genres/>
                    </div>
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