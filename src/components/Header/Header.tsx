import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Header:FC = () => {
    return (
        <div>
            Header
            <NavLink to={"movies"}>Movies2</NavLink>
        </div>
    );
};

export {Header};