import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer py-4'>
            <footer>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>123 Main St<br />Sydney, NSW 2000<br />Austrapa<br />Phone: (02) 1234 5678<br />Email: info@austrapancuisine.com</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Follow Us</h5>
                            <div className="d-flex justify-content-start" >
                                <p><a href="#"><FaFacebook /></a></p>
                                <p className='ms-3'><a href="#" className='text-danger'><FaInstagram /></a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Location</h5>
                            <p>Situated in the heart of Sydney, our restaurant is the perfect place to experience authentic Austrapan cuisine.</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <small>&copy; 2023 Austrapan Cuisine. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;