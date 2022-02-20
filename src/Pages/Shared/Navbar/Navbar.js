import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./Navbar.css";

const Navbar = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

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
                        {
                            userInfo.img ? <img src={userInfo.img} alt="" style={{width:"30px",borderRadius:"50%",height:"30px",marginTop:"5px"}} /> : <Link to="/login"><button className='login-btn mt-2'>log in</button></Link> 
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
