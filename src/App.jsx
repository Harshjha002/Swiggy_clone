import React from 'react'
import logo from './assets/logo.svg'
import { resList } from '../demo'


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logoimg' src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder='search' />
            <button>Search</button>
        </div>
    );
}

const ResCard = ({ name, cuisine, rating, time, location,cloudinaryImageId }) => {
    return (
        <div className="res-card">
            <div className="res-image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Restaurant" />
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


const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default App