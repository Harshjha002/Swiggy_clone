import React from 'react'
import { CDN_URL } from '../utils/constants';


const ResCard = ({ name, cuisine, rating, time, location,cloudinaryImageId }) => {

    return (
        <div className="res-card">
            <div className="res-image">
                <img src={CDN_URL+cloudinaryImageId} alt="Restaurant" />
            </div>
            <div className="res-description">
                <h2>{name}</h2>
                <h4>⭐{rating} . {time}</h4>
                <p>{cuisine}</p>
                <p>{location}</p>
            </div>
        </div>
    );
};
export default ResCard