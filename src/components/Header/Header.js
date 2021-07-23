import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navbar-header">
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory here</a>
                <p className="h-icon">< FontAwesomeIcon icon={faShoppingCart} /></p>
            </nav>



        </div>
    );
};

export default Header;