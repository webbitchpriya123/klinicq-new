import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import book1 from '../Common/assets/image/book1.svg'
import book2 from '../Common/assets/image/book2.svg'
import book3 from '../Common/assets/image/book3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Topmove from '../Common/pages/Topmove'


import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'


function Bookappointment() {

    const { isClass1Show } = useSelector((state) => state.klinical)
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(setClass1Hide(false))
        window.scrollTo(0, 0);
  
    }, []);
    
    return (
        <div className='book-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Book Our Management</h1>
                {/* <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p> */}
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='container-90 py-5'>
                <div className='row m-0'>
                    <div className='col-lg-6 col-12 small-busniess'>
                        {/* <h1>Why Select Our Hospitals For Small Busniess</h1> */}
                        <div className='row m-0 w-lg-75 w-md-50 w-100'>
                            <div className='col-2'>
                                <img src={book1}  className='w-100'/>
                            </div>
                            <div className='col-10 d-flex align-items-center'>
                                <p className=''>We know exactly what your Busniess needs right now</p>
                            </div>
                            <div className='col-2 py-5'>
                                <img src={book2} className='w-100'/>
                            </div>
                            <div className='col-10 d-flex align-items-center py-3'>
                                <p className=''>We know exactly what your Busniess needs right now</p>
                            </div>
                            <div className='col-2'>
                                <img src={book3} className='w-100'/>
                            </div>
                            <div className='col-10 d-flex align-items-center'>
                                <p className=''>Our Company is not just a Product - we Really inspire</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='form-content'>
                            <h1>Book A DEMO</h1>
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
                                    <input type='checkbox' /> <span>Hospital Mangement</span><br/>
                                    <input type='checkbox' className='' /> <span>Clinic Mangement</span><br />
                                    <input type='checkbox' className='mt-3' /> <span>User Mangement</span>
                                </div>
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
                                <div className='text-center'>
                                <button style={{ width: '200px',margin:'0 auto' }}>Send Message</button>
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

export default Bookappointment