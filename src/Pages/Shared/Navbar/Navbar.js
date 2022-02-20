import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container nav-under">
                <Link class="logo" to="/">Aircnc</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">host your home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">host your experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">help</a>
                        </li>
                        <button className='login-btn'>log in</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
