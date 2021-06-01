import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="container px-5">
            <form action="" className="my-5 d-flex justify-content-center align-items-center px-5">
                <div className="w-100 p-5 contact-form">
                    <p className="text-center color-primary mb-5">Have a question or want to work together?</p>
                    <input type="text" className="form-control mb-1" name="name" placeholder="Name" required />
                    <input type="email" className="form-control mb-1" name="email" placeholder="Enter Email" required />
                    <textarea cols="30" rows="5" name="message" className="form-control" placeholder="Your massage" required></textarea>
                    <div className="w-100 d-flex justify-content-end mt-2">
                        <button className="btn btn-custom" type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;