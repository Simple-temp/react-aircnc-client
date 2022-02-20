import React, { useContext } from 'react';
import google from "../../img/google.png"
import "./Login.css"
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

initializeApp(firebaseConfig)

const Login = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    const provider = new GoogleAuthProvider();

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const loggedInuserInfo = { name: displayName, img: photoURL, email: email }
                setUserInfo(loggedInuserInfo)
                navigate(from, { replace: true });
                console.log(loggedInuserInfo)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
            });
    }

    return (
        <section className='login'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <p>Welcome to aircnc website <br/> please login with google account and explore it</p>
                        <button  onClick={googleSignIn} className="home-login-btn">Continue with google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;