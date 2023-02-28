import React from 'react'
import wp from "./assets/images/logo/wp.png"
import fb from "./assets/images/logo/fb.png"
const AboutUs = () => {
  return (
    <div className='d-flex flex-column mt-4 p-3'>
        <hr></hr>
        <div className='text-center'>
            <h2 className='text-center'>About Us</h2>
            <div>
            Our team of dedicated professionals includes trained technicians, 
            engineers, and customer service representatives who work together to 
            provide fast and efficient pothole repair services. We use the latest 
            equipment and materials to ensure that our repairs are long-lasting and 
            effective.
            </div>
        </div>
        <hr></hr>
        <div className='d-flex justify-content-around mt-1'>
            <div className='w-50'>
                <h2 className='text-center'>Our Mission</h2>
                <div>
                <li>
                Our mission is to provide safe and well-maintained roads by 
                repairing potholes efficiently and effectively.
                </li>
                <li>
                Our mission is to make it easy for citizens to report potholes 
                and track the progress of repairs, ensuring transparent and 
                accountable road maintenance.
                </li>
                </div>
            </div>
            <div className='w-50'>
                <h2 className='text-center'>Our Terget</h2>
                <div>
                <li>Our target is to reduce the number of potholes on the
                roads by 50% within the next year.
                </li>
                <li>We aim to respond to pothole reports within 24 hours and 
                complete repairs within 72 hours.
                </li>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className='text-center'>
            <h3 className='text-center'>Contact Us</h3>
            <a href = "/" className='m-1'><img src={wp}></img></a>
            <a href = "/" className='m-1'><img src={fb}></img></a>
        </div>
    </div>
  )
}

export default AboutUs;