import React from 'react'
import SearchBar from './SearchBar';
import {resList} from '../utils/demo';
import ResCard from './ResCard';

const Body = () => {
    return (
        <div className="body">
            <div className="searct-bar">
                <SearchBar/>
            </div>
            <div className="res-container">
            {resList.map((restaurant, index) => {
                const { name, avgRating, sla, cuisines, locality, areaName,cloudinaryImageId } = restaurant.info;
                const cuisine = cuisines.join(", ");
                const location = [locality,",",areaName]
                return (
                    <ResCard
                        key={index}
                        name={name}
                        rating={avgRating}
                        time={sla.slaString}
                        cuisine={cuisine}
                        location={location}
                        cloudinaryImageId={cloudinaryImageId}
                    />
                );
            })}
        </div>
        </div>
    )
}


export default Body