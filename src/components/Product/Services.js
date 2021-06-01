import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faHandHoldingUsd, faGift } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <section>
            <h1 className="section-name">Our Services</h1>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faTruck} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">FREE SHIPPING</h6>
                            <small>On Order Over $100</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faHeadset} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">ONLINE 24/7 SUPPORT</h6>
                            <small>Sign Up For Gift</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">14 - DAY MONEYBACK</h6>
                            <small>Best Deal With 14 days</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faGift} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">WIN $100 TO SHOP</h6>
                            <small>Get Membership</small>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Services;