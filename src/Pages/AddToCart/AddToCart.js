import React from 'react';
import './AddToCart.css';
import product from '../../images/product-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const AddToCart = () => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="add-to-cart-card"><img src={product} className="ml-3" alt="" /></td>
                        <td>
                            <h4>Name of Product</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </td>
                        <td><div className="pd-quantity d-flex align-items-center">
                            <button className="btn btn-decrease fs-2"><FontAwesomeIcon icon={faMinusSquare} /></button>
                            <input type="text" className="form-control text-center h-50" value="1" />
                            <button className="btn btn-increase fs-2"><FontAwesomeIcon icon={faPlusSquare} /></button>
                        </div></td>
                        <td><h4>$180</h4></td>
                        <td><span className="fs-3"><FontAwesomeIcon icon={faTimesCircle} /></span></td>
                    </tr>
                    <tr className="table-info">
                        <td colspan="4" className="text-end"><h3 className="fw-bolder">Total</h3></td>
                        <td><h3>$200</h3></td>
                        <td><Link to='/payment' className="btn btn-custom">Check Out</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddToCart;