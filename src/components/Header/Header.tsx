import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header:FC = () => {
    return (
        <div>
            Header
            <NavLink to={"movies"}>Movies</NavLink>
            <NavLink to={"tv"}>TV</NavLink>
        </div>
    );
};

export {Header};