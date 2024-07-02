import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import book1 from '../Common/assets/image/book1.png'
import book2 from '../Common/assets/image/book2.png'
import book3 from '../Common/assets/image/book3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'

function Contact() {

    const { isClass1Show } = useSelector((state) => state.klinical)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setClass1Hide(false))
        window.scrollTo(0, 0);

    }, []);

    return (
        <div className='contact-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Contact Us</h1>
                <p>Contact us today using this form and our support team will reach out as soon as possible.</p>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='container-90  py-0 pt-0'>
                <div className='row m-0 pb-5 align-self-center justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12 text-center'>
                        <div className='card-section'>
                            <span className='icon-circle'>
                            <FontAwesomeIcon icon={faMapLocation} style={{ color: '#FFF' }} />
                            </span>
   
                            <h1>Our Location</h1>
                            <p>#131/1 RV Road, V V puram Bangalore - 4</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-lg-0 my-md-0 my-2 text-center '>
                        <div className='card-section'>
                        <span className='icon-circle'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFF' }} />
                        </span>
                    
                            <h1>Our Email Address</h1>
                            <p>mail@klinicq.com</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 text-center my-lg-0 my-md-2'>
                        <div className='card-section'>
                        <span className='icon-circle'>
                        <FontAwesomeIcon icon={faMobile} style={{ color: '#FFF' }} /></span>
                            <h1>Our Phone Number</h1>
                            <p>+918015774643
                            </p>
                        </div>
                    </div>

                </div>
                <div className='row m-0'>
                    <div className='col-lg-6 col-12'>
                

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2999410087273!2d77.57502788110729!3d12.952648982725313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e8d9e80459%3A0x1895528330682b65!2s131%2C%20Rashtriya%20Vidyalaya%20Rd%2C%20Vishweshwarapura%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1718691093610!5m2!1sen!2sin" width="100%" height="900" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='form-content'>
                            <h6>Get in Touch</h6>
                            <p>Contact us today using this form and our support team will reach out as soon as possible.</p>
                            <form>
                                <div className="row m-0">
                                    <div className="col-md-6">
                                    
                                        <input type="text" className="form-control" id="your-name" placeholder="First name" required  />
                                    </div>
                                    <div className="col-md-6">
                                   
                                        <input type="text" className="form-control" id="your-surname" placeholder="Last name" required />
                                    </div>
                                    <div className="col-md-12">
                                    
                                        <input type="text" className="form-control" id="your-email" placeholder="Email" required />
                                    </div>
                                    <div className="col-md-12">
                                      
                                        <input type="text" className="form-control" id="your-subject" placeholder="Phone number" name="your-subject" />
                                    </div>
                                    <div className="col-12">
                                       
                                        <textarea className="form-control" id="your-message" name="your-message" placeholder="How can we help?" rows="5" required></textarea>
                                    </div>
                                </div>
                                <div className='check-section'>
                                    <h1>Services</h1>
                                    <input type='checkbox' /> <span>Hospital Mangement</span><br />
                                    <input type='checkbox' className='' /> <span>Clinic Mangement</span><br />
                                    <input type='checkbox' className='mt-3' /> <span>User Mangement</span>
                                </div>
                                <button>Send Message <FontAwesomeIcon icon={faArrowRight} style={{ color: '#FFF',marginLeft:'2px' }} /></button>
                                <div className='agree-section'>
                                    <div className='d-flex'>
                                        <div className=''>
                                            <input type="checkbox" id="myCheckbox" />
                                            <label for="myCheckbox" class="custom-checkbox"></label>
                                        </div>
                                        <div className='ps-2'>
                                            <p className='p-0'>By signing up, you accept our <span className='policy'>privacy policy</span>. your contact information will only be used within Medesk and will never be shared with third parties.</p>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Contact