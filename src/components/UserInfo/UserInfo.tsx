import React from 'react';

// @ts-ignore
import css from "../components.module.css";
import {Link} from "react-router-dom";

const UserInfo = () => {
    return (
        <div>
            <Link to={"user"}>
                <div className={css.userInfoBlock}>
                    <h3>unknown user</h3>
                </div>
            </Link>
        </div>
    );
};

export {UserInfo};