import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Navbar.scss";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light" id="header">
                <div class="container-fluid">
                    <div class="logo">
                        <NavLink to="/">
                            JZ SHOPPING
                        </NavLink>
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/products" className="nav-link" >Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="button">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className='fa fa-sign-in me-1'></i>Login</NavLink>
                            <NavLink to="signup" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-user-plus me-1'></i>Sign-Up</NavLink>
                            <NavLink to="cart" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-cart-plus me-1'></i>Cart (0)</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;