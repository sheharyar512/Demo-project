import React from 'react';
import photo07 from '../../assets/png03.png';
import './Policies.css';
import { IoIosArrowForward } from "react-icons/io";

const Policies = () => {
  return (
    <>
      <div className='policies-section-main'>
        <div className='policies-section'>
          <div className='policies-container'>
            <div className='policies-des'>
              <div className='policies-left'>
                <h1 className='policies-heading'>Improving lives by improving communities</h1>
                <p className='policies-para'>SGA is dedicated to fostering vibrant, sustainable communities
                  with accessible, affordable, and diverse living and transportation options
                  that improve quality of life.
                  </p>
              </div>
              <div className='policies-right'>
              <img className='side-image' src={photo07} alt="Get Involved" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;