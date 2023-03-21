import React from 'react'
import Meta from "../assets/images/png/meta.png"
import Microsoft from "../assets/images/png/microsoft.png"
import Google from "../assets/images/png/google.png"
import IBM from "../assets/images/png/IBM.png"

// import StripeLogo from '../assets/images/brand/gray-logo-stripe.svg';
// import AirbnbLogo from '../assets/images/brand/gray-logo-airbnb.svg';
// import DiscordLogo from '../assets/images/brand/gray-logo-discord.svg';
// import IntercomLogo from '../assets/images/brand/gray-logo-intercom.svg';
// import PinterestLogo from '../assets/images/brand/gray-logo-pinterest.svg';
// import NetflixLogo from '../assets/images/brand/gray-logo-netflix.svg';
const CompaniesSection = () => {
  return (
    <div className='text-center ' style={{"marginBottom": "10rem"}}>
        <h4>OUR PARTNERS</h4>
        <div className='d-flex flex-row justify-content-around mt-3 p-3 rounded'>
            <div>
              <img src={Meta} className="m-2"/>
              Meta
            </div>
            <div>
              <img src={Microsoft} className="m-2"/>
              Microsoft
            </div>
            <div>
              <img src={Google} className="m-2"/>
              Google
            </div>
            <div>
              <img src={IBM} className="m-2"/>
              IBM
            </div>
        </div>
    </div>
  )
}


export default CompaniesSection