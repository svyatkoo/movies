import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Genres, Header} from "../../components";
// @ts-ignore
import css from "../pages.module.css";

const HomePage:FC = () => {
    return (
        <div>
            HomePage
            <Header/>
            <div className={css.mainContainer}>
                <div className={css.menu}>
                    <Genres/>
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>

            <div className={css.footer}>
                footer
            </div>
        </div>
    );
};

export {HomePage};