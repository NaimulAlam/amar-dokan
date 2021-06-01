import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import porductImg from '../../images/product-2.jpg';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://cryptic-dawn-15211.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { catagory, shopName, productName, brandName, image, price, quantity, rating, description } = product

    return (
        <section className="product-details-section">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                <div className="row w-75 product-details-card">
                    <div className="col-md-5">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-7 py-3">
                        <h1 className="">{productName}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas dignissimos commodi repudiandae nihil nulla temporibus aut tenetur quis laudantium. Et accusantium animi voluptas praesentium commodi similique earum obcaecati distinctio.</p>

                        <h5>Available: 1</h5>

                        <h2 className="fw-bolder"> <small className="text-decoration-line-through text-secondary">$200</small> $180</h2>

                        <div className="pd-color d-flex">
                            <h4>Color: </h4>
                            <span className="pd-red"></span>
                            <span className="pd-lightblue"></span>
                            <span className="pd-green"></span>
                            <span className="pd-violet"></span>
                            <span className="pd-salmon"></span>
                        </div>

                        <div>
                            <div className="pd-quantity d-flex align-items-center">
                                <h4>Quantity:</h4>
                                <button className="btn btn-decrease fs-2"><FontAwesomeIcon icon={faMinusSquare} /></button>
                                <input type="text" className="form-control text-center h-50" value="1" />
                                <button className="btn btn-increase fs-2"><FontAwesomeIcon icon={faPlusSquare} /></button>
                            </div>
                        </div>

                        <button className="btn btn-custom me-4 mt-2 ls-2">ADD TO CART</button>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default ProductDetails;