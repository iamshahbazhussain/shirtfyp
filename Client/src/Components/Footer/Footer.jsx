import React from 'react'
import { useHistory } from 'react-router-dom';

import logo from '../../Assets/images/footerlogo.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
import { NavLink } from 'react-router-dom'

import './Footer.scss'


const Footer = () => {
    let history = useHistory()
    return (

        <div className="footer_need">



            <div className='footer_main'>


                <div className="footer_content">



                    <div className="footer_f1">
                        <NavLink to='/' style={{ textDecoration: 'none' }}  >

                            <img src={logo} />
                        </NavLink>

                    </div>

                    <div className="footer_text">



                        <div className="footer_f2">

                            <div className="service">
                                The Services
                            </div>

                            <div className="ser_content">
                                <div className='items'>Home</div>
                                <NavLink to='/contact' style={{ textDecoration: 'none' }}  >
                                    <div className="items">Contact us</div>
                                </NavLink>
                            </div>

                        </div>
                        <div className="footer_f3">
                            <div className="service">
                                The Company
                            </div>

                            <div className="ser_content">

                                <NavLink to='/about' style={{ textDecoration: 'none' }}  >
                                    <div className="items">About us</div>
                                </NavLink>
                            </div>
                        </div>
                        {/* <div className="footer_f4">
                            <div className="service">
                                Questions
                            </div>

                            <div className="ser_content">

                                <div className='items'>Faq</div>
                                <div className='items'>Chat</div>
                                <div className='items'>Help</div>
                            </div>
                        </div> */}


                    </div>
                </div>

                {/* 
                <div className="footer_card">

                    <div className="card_title">
                        Newsletter
                    </div>


                    <div className="card_para">
                        Sign up for exclusive offers, monthly stories,
                        and all things Gentlemen’s Box.
                    </div>


                    <div className="card_mail">
                        <input type='email' placeholder='Enter email' />

                        <AiOutlineArrowRight className='arrow' />

                    </div>

                </div> */}





            </div>





            <div className="footer_line">
                <hr />
            </div>




            <div className="fott_end_main">
                <div className="social_icons_need">



                    <div className="social_icons">

                        <FaFacebookF style={{ cursor: "pointer" }} onClick={() => window.location.href = "https://www.facebook.com"} className='fac' />
                        <BsInstagram style={{ cursor: "pointer" }} onClick={() => window.location.href = "https://www.instagram.com/"} className='insta' />
                        <ImTwitter style={{ cursor: "pointer" }} onClick={() => window.location.href = "https://www.twitter.com/"} className='twit' />

                    </div>


                    <div className="footer_copyright">
                        Copyright @ 2022
                    </div>

                </div>




            </div>

        </div>

    )
}

export default Footer