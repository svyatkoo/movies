import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import "./header.css";

const Header:FC = () => {
    return (
        <div className="header">
            <NavLink to={"movies"}>Movies</NavLink>
            <NavLink to={"tv"}>TV</NavLink>
        </div>
    );
};

export {Header};