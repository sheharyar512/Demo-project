import React from 'react';
import png01 from '../../assets/png01.png';
import border from '../../assets/border.png';
import './GetInvolved.css'; 
import { IoIosArrowForward } from "react-icons/io";

const GetInvolved = () => {
  return (
    <>
    <div className='get-involved-section-main'>
    <div className='get-involved-section'>
    <div className="get-involved-container">
      <h2>Get Involved</h2>
      <div className='get-involved-para-wrap'>
      <p>
        Support policies and initiatives that promote Smart Growth, Complete
        Streets, and equitable transportation systems in America by joining one
        of our Membership Programs.
      </p>
      <button>Find Out More <IoIosArrowForward /></button>
      </div>
      <div className='get-involved-bottom-bar'></div>
      <div className='image-box'>
      <img className='border-image' src={border} alt="Get Involved" />
      </div>
      <div className='image-box'>
      <img className='side-image' src={png01} alt="Get Involved" />
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default GetInvolved;