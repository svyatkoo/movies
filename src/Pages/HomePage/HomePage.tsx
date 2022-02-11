import React, {FC, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {Genres, UserInfo} from "../../components";
// @ts-ignore
import css from "../pages.module.css";

const HomePage: FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    function getTheme() {
        const currentTheme = localStorage.getItem("theme") || "light";
        localStorage.setItem("theme", currentTheme);
    }

    getTheme()

    function switchTheme() {
        const toggleValue = (localStorage.getItem("theme") === "dark") ? "light" : "dark"
        localStorage.setItem("theme", toggleValue)
        const currentTheme = localStorage.getItem("theme");
        setTheme(currentTheme);
        // getTheme();
    }

    return (
        <div className={`${css.wrapper} ${theme === 'light' ? css.light : css.dark}`}>
            <div className={css.header}>
                <div className={css.headerMenu}>
                    <NavLink to={"movies"}>Movies</NavLink>
                    <NavLink to={"user"}>UserPage</NavLink>
                </div>

                <button id="theme" onClick={() => switchTheme()}>{theme ? theme : "light"}</button>
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