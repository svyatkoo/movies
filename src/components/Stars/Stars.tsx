import React, {FC, useState} from 'react';

import {useAppDispatch} from "../../hooks";
import {sendMovieRating} from "../../store";
import "./stars.css";

const Stars: FC<any> = ({voteRating, id}) => {
    const [hover, setHover] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <div className="star-rating">
            {[...Array(10)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || voteRating) ? "on" : "off"}
                        onClick={() => {
                            const userRating = {"value": index}
                            dispatch(sendMovieRating({id, userRating}))
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(voteRating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export {Stars};