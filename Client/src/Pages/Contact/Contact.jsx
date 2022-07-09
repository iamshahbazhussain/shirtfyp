import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import "./Contact.scss"


const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact_container">
                This is Contact Page
            </div>
            <Footer />
        </>
    )
}

export default Contact