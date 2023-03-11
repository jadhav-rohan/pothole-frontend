import React from 'react'
import Meta from "./assets/images/png/meta.png"
import Microsoft from "./assets/images/png/microsoft.png"
import Google from "./assets/images/png/google.png"
import IBM from "./assets/images/png/IBM.png"

const CompaniesSection = () => {
  return (
    <div className='text-center'>
        <h1>Our Partners</h1>
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
        <hr className="mt-8 mb-3" />
    </div>
  )
}

export default CompaniesSection