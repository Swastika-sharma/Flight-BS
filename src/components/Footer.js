import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaHome, FaPhoneAlt, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='container'>
        <div className='row py-5 text-secondary'>
            <div className='col-md-3 col-sm-12="true"="true"'>
              <button>
              <span>India ·</span>
              <span>English (UK) ·</span>
              <span>₹&nbsp;</span>
              <span>INR</span>
              </button>
              <br /><br />
              <FaHome className='me-2'/> Swastika <br />
              <FaPhoneAlt className='me-2'/> 009347452545<br />
              <FaEnvelope className='me-2'/> swastikasharma@gmail.com<br />
            </div>
            <div className='col-md-3 col-sm-12="true"="true" text-secondary'>
              <h6>Help</h6>
              <h6>Privacy Settings</h6>
              <h6>Log in</h6>
            </div>
            <div className='col-md-3 col-sm-12="true"="true" text-secondary'>
              <h6>Cookie policy</h6>
              <h6>Privacy policy</h6>
              <h6>Terms of service</h6>
              <h6>Company Details</h6>
            </div>
            <div className='col-md-3 col-sm-12="true" text-secondary'>
              <h6>Explore</h6>
              <h6>Company</h6>
              <h6>Partners</h6>
              <h6>Trips</h6>
              <h6>International Sites</h6> 
            </div>
        </div>
    <h6  className='text-secondary'>Cheap flight booking from anywhere, to everywhere</h6>
    <h6 className='text-secondary pb-5'>@copyright FlyHighLtd2022-2024</h6>
      </div>
    </div>
  )
}

export default Footer