import React from 'react';
import './Navbar.css';
import brandLogo from '../../images/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingBag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const userInfo = useSelector(state => state.shop.userDetails)
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand ms-md-5" href="/home"><img className="brand-logo" src={brandLogo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto pe-5">
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2 active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="/home">Features</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="/home">Pricing</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="/home">Pricing</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-icon m-e">
                            <li className="nav-item pe-2">
                                <a className="nav-link" aria-current="page" href="/home"><FontAwesomeIcon icon={faSearch} />
                                </a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link" href="/home"><FontAwesomeIcon icon={faHeart} /></a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link" href="/home"><FontAwesomeIcon icon={faUser} /></a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link" href="/home"><FontAwesomeIcon icon={faShoppingBag} /></a>
                            </li>
                            <li className="nav-item pe-2">
                                {
                                    userInfo?.email ?
                                        <button className="btn btn-custom ls-2">{userInfo.name}</button>
                                        :
                                        <Link to='/login' className="nav-link"><button className="btn btn-custom ls-2">Log In</button></Link>

                                }
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;