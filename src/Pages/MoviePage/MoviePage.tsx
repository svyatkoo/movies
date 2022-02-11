import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const MoviePage: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MoviePage};

