import React from 'react'
import logo from '../assets/logo.svg'

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

export default Header