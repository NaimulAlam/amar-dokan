import React, { useEffect, useState } from 'react';
import './ProductCategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';

const ProductCategory = () => {

    let { categoryName } = useParams();

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-dawn-15211.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])


    const categoryData = allProducts.filter(singleProduct => singleProduct.catagory === categoryName)
    console.log(categoryData);


    return (
        <div className="container">
            <div className="text-center">
                <h1 className="color-primary pt-5">Welcome to Sports Category</h1>
            </div>
            <hr />
            <div className="w-100 d-flex justify-content-center align-items-center">
            </div>

            <div className="row mt-2 d-flex justify-content-center category-list">

                {
                    categoryData.map(pdData => {
                        return (
                            <div className="col-12 mb-3 p-2">
                                <div className="row w-100 category-list-card d-flex align-items-center">
                                    <div className="col-4 p-3">
                                        <img src={pdData.image} height="200px" className="" alt="" />
                                    </div>
                                    <div className="col-8 p-2">
                                        <div>
                                            <h3 className="fw-bolder">{pdData.productName}</h3>
                                            <p>{pdData.description}</p>
                                            <h5 className="m-0">Quantity: {pdData.quantity}</h5>
                                            <p>{pdData.brandName}</p>
                                        </div>
                                        <h5 className="fw-bolder">${pdData.price}</h5>
                                        <div className="product-rating-ico pb-3">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="w-100 d-flex justify-content-end">
                                            <button class="btn btn-custom ls-2 mx-3">Details</button>
                                            <button class="btn btn-custom ls-2">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


            </div>
        </div>
    );
};

export default ProductCategory;