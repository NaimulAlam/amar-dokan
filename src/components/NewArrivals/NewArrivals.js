import React from 'react';
import './NewArrivals.css';
import product from '../../images/product.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const NewArrivals = () => {
    return (
        <section id="NewArrivals">
            <div className="row p-5">
                <div className="col-md-3 p-3">
                    <div class="card card-custom">
                        <img src={product} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">FOXic</h5>
                            <p class="card-text">Antimicrobial Skin Cleanser</p>
                            <h5>$180</h5>
                            <div className="product-rating-ico">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="w-100 d-flex justify-content-center">
                                <button class="btn btn-custom ls-2">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;