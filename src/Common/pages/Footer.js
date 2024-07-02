import React from 'react'
import '../assets/css/auth.css'
import Logowhite from '../assets/image/footerlogo.png';
// import logo1 from '../assets/image/social1.png'
// import logo2 from '../assets/image/social2.png'
// import logo3 from '../assets/image/social3.png'
// import logo4 from '../assets/image/social4.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/image/instagram-logo.png'
import logo2 from '../assets/image/facebook-logo.png'
import logo3 from '../assets/image/twitter-logo.png'
import logo4 from '../assets/image/youtube-logo.png'
import apple from '../assets/image/apple.svg'
import android from '../assets/image/android.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft, faBars, faChevronDown, faRightLeft, faXmark, faPlus, faMinus, faClose, faAppleWhole } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row m-0 footer-top align-items-stretch justify-content-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                            <a href='https://webbitech.co.in/REACT-JS/klinicq' ><img src={Logowhite} className='footerLogo' /></a>
                            <p>Electronic Clinical Management System(e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital </p>
                            <div class="download-btn">
                                <a target="_blank" href="https://apps.apple.com/us/app/klinicq-health/id6447692881" class="app-store-btn">
                                    <img src={apple} className='' />
                                    <span>Download on the</span>
                                    App Store
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.nucleo.klinicQ&hl=en&gl=US" class="google-play-btn">
                                    <img src={android} className='' />
                                    <span>Get on it</span>
                                    Google Play
                                </a>
                            </div>
                            <ul className='social-logo p-0'>
                                <li><a href='https://www.instagram.com/klinicq/' target='_blank'><img src={logo1} width={24} height={24} /></a></li>
                                <li><a href='https://www.facebook.com/KlinicQ/' target='_blank'><img src={logo2} width={24} height={24} /></a></li>
                                <li><a href='https://twitter.com/KlinicQ' target='_blank'><img src={logo3} width={24} height={24} /></a></li>
                                <li><a href='https://youtu.be/qPbaZgYzeYs?si=qCbHr55Gg-8j_pbX' target='_blank'><img src={logo4} width={24} height={24} /></a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0  float-md-none'>
                                <li className='content-title'>Platform</li>
                                <li>
                                    <NavLink exact to={{ pathname: '/about' }} className='text-decoration-none text-white'>
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/patients' }} className='text-decoration-none text-white'>
                                        For Patient
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/doctor' }} className='text-decoration-none text-white'>
                                    For Doctor
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/hospitals' }} className='text-decoration-none text-white'>
                                        For Hospital
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/appointment' }} className='text-decoration-none text-white'>
                                        For Appointment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/Product' }} className='text-decoration-none text-white'>
                                    Project Feature
                                    </NavLink>
                                </li>
                              
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0  float-md-none'>
                                <li className='content-title'>Company</li>
                                <li>
                                    <NavLink exact to={{ pathname: '/Product' }} className='text-decoration-none text-white'>
                                    Careers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/Product' }} className='text-decoration-none text-white'>
                                    Documentation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/Product' }} className='text-decoration-none text-white'>
                                    Plans & Pricing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/Product' }} className='text-decoration-none text-white'>
                                    Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={{ pathname: '/contact' }} className='text-decoration-none text-white'>
                                    Contact
                                    </NavLink>
                                </li>
                                {/* <li><a href='https://webbitech.co.in/REACT-JS/klinicq/benefits' className='text-decoration-none text-white'>Careers</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/feature' className='text-decoration-none text-white'>Documentation</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/benefits' className='text-decoration-none text-white'>Plans & Pricing</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/bookusappointemnt' className='text-decoration-none text-white'>Papers</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/hospitals' className='text-decoration-none text-white'>Blog</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/contact' className='text-decoration-none text-white'>Contact</a></li> */}
                            </ul>
                        </div>
                        {/* <div className='col-lg-2 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title d-lg-block d-md-block d-sm-block d-none  mb-4'></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/appointment' className='text-decoration-none text-white'>Blog</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/contact' className='text-decoration-none text-white'>Contact </a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/doctor' className='text-decoration-none text-white'>For doctor</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/hospitals' className='text-decoration-none text-white'>For hospital</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className='footer-bottom-layout1'>
                <div className='container'>
                    <div className='row m-0 py-3 footer-bottom align-items-stretch justify-content-start'>
                        <div className='col-lg-6 col-12 text-lg-start text-center'>
                            <a href='https://webbitech.co.in/REACT-JS/klinicq' className='text-decoration-none text-white'><p>Copyright © 2024, KlinicQ. All rights reserved. Developed by Webbitech</p></a>
                        </div>
                        <div className='col-lg-6 col-12 text-lg-end text-center'>
                            <ul id="footer-menu">
                                <li>Terms of service</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
              
            </footer>
        </>
    )
}
export default Footer