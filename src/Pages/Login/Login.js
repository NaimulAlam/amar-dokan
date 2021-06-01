import React, { useContext } from 'react';
import './Login.css';
import logInbg from '../../images/logIn.jpg';
import googleLogo from '../../images/google.png';
import facebookLogo from '../../images/facebook.png';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionAuth } from '../../redux/Actions/actionShop';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {


    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };


    const dispatch = useDispatch()
    const signIn = (signedInUser) => dispatch(actionAuth(signedInUser));


    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    role: 'user'
                };
                signIn(signedInUser)
                axios.post('https://lit-chamber-50852.herokuapp.com/addUser', signedInUser).then((res) => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    console.log(res.data);
                    history.replace(from);

                })
                console.log(result);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            });
    };




    return (
        <section className="login-section">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                <div className="row w-75 login-card">
                    <div className="col-md-5">
                        <img src={logInbg} alt="" />
                    </div>
                    <div className="col-md-7 py-3 d-flex justify-content-center align-items-center">
                        <div>
                            <button onClick={handleSignIn} className='btn btn-login px-5 mb-3 m-auto'> <img src={googleLogo} alt="" /> Sign in with Google    </button>
                            <br />
                            <button className='btn btn-login px-5 m-auto'> <img src={facebookLogo} alt="" /> Sign in with Facebook </button>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
};


export default Login;