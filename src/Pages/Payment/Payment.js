import React from 'react';
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import porductImg from '../../images/product-2.jpg';

const Payment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <section className="payment-section">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                <div className="row w-75 payment-card">
                    <div className="col-md-5 d-flex justify-content-start">
                        <img src={porductImg} alt="" />
                    </div>
                    <div className="col-md-7 py-3">
                        <h1>Total: $300.52</h1>
                        <h3>Unit Price: $180</h3>


                        <form action="">
                            <div className="row w-100">

                                <div className="mb-3 col-md-6">
                                    <input type="text" className="form-control" {...register("name", { required: true })} placeholder="Name" />
                                    {errors.name && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-6">
                                    <input type="number" className="form-control" {...register("number", { required: true })} placeholder="Phone number" />
                                    {errors.title && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-12">
                                    <input type="text" className="form-control" {...register("address", { required: true })} placeholder="Address" />
                                    {errors.address && <span>This field is required</span>}
                                </div>
                                <div className="mb-3 col-md-12">
                                    <input type="text" className="form-control" {...register("address", { required: true })} placeholder="Pick-up Address" />
                                    {errors.address && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-12">
                                    <input type="email" className="form-control" {...register("email", { required: true })} placeholder="E-mail" />
                                    {errors.address && <span>This field is required</span>}
                                </div>

                                <div className="w-100 d-flex justify-content-end px-5">
                                    <button type="submit" className="btn btn-custom ls-2 w-50">Pay $180</button>
                                </div>

                            </div>

                        </form>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Payment;