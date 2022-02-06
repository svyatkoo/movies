import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const MoviePage:FC = () => {
    return (
        <div>
            MoviePage
            <Outlet/>
        </div>
    );
};

export {MoviePage};