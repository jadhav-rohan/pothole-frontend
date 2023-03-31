import React from 'react'
import ISAN from '../assets/images/brand/Brand4.svg';
import rinok from '../assets/images/brand/Brand2.svg';
import intelli from '../assets/images/brand/Brand3.svg';
import trukhoj from '../assets/images/brand/trukhoj.svg';
// import NetflixLogo from '../assets/images/brand/netflix.svg';
const CompaniesSection = () => {
  return (
    <div className='text-center bg-gray p-5' style={{"marginBottom": "10rem", "background-color": "#eff1f9", "marginLeft": "-15px", "marginRight": "-15px"}}>
        <h4>OUR PARTNERS</h4>
        <div className='d-flex flex-row flex-wrap justify-content-around mt-4 rounded'>
            <div className=''>
              <img src={ISAN} style= {{"width": "12rem", "height": "5rem"}}/>
            </div>
            <div className=''>
              <img src={trukhoj} style= {{"width": "12rem", "height": "5rem"}}/>
            </div>
            <div className=''>
              <img src={intelli} style= {{"width": "12rem", "height": "5rem"}}/>
            </div>
            <div className=''>
              <img src={rinok} style= {{"width": "12rem", "height": "5rem"}}/>
            </div>
        </div>
    </div>
  )
}


export default CompaniesSection