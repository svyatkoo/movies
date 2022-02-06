import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

// @ts-ignore
import css from "../pages.module.css";

const HomePage:FC = () => {
    return (
        <div>
            HomePage
            <div className={css.mainContainer}>
                <div className={css.menu}>
                    <Header/>
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {HomePage};