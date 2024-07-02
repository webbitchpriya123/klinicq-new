import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import '../Common/assets/css/main.css'
import LogoSlider from '../Common/pages/LogoSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown19, faArrowRight, faArrowsUpRight, faCircleDot, faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';


// image path 
import doctor from '../Common/assets/image/doctor.png'
import diagram from '../Common/assets/image/diagram.png'
import vector1 from '../Common/assets/image/vector.png'
import goal from '../Common/assets/image/goal.png'
import doctor1 from '../Common/assets/image/patient1.png'
import doctor2 from '../Common/assets/image/patient2.png'
import doctor3 from '../Common/assets/image/patient3.png'
import SimpleSlider from '../Common/pages/SimpleSlider';
import rest1 from '../Common/assets/image/rest1.png'
import rest2 from '../Common/assets/image/rest2.png'
import rest3 from '../Common/assets/image/rest3.png'
import rest4 from '../Common/assets/image/rest4.png'
import rest5 from '../Common/assets/image/rest5.png'
import calender from '../Common/assets/image/calender.png'
import arrowup from '../Common/assets/image/arrowup.png'
import arrowupblack from '../Common/assets/image/blackarrow.png'
import online from '../Common/assets/image/online.png'
import patient4 from '../Common/assets/image/patient4.png'
import patient5 from '../Common/assets/image/patient5.png'
import Topmove from '../Common/pages/Topmove';


import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useNavigate } from 'react-router-dom';

function Home() {

  const { isClass1Show } = useSelector((state) => state.klinical)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const booklogin = () => {
    navigate('/login')
  }

  useEffect(() => {
    dispatch(setClass1Hide(false))
    window.scrollTo(0, 0);

  }, []);


  return (
    <div className=''>
      <Header />
      <section className='position-relative section-start'>
        <div className='position-relative'>
          <div className='row m-0 align-items-center'>
            <div className='col-lg-7 col-12 h-50 '>
              <div className='container-75 section-top slide-left'>
                <h3>KlinicQ is  a renowned clinic providing exemplary online medical treatment services.</h3>
                <div className='d-flex align-items-center scheduel-section'>
                  <div>
                    <button type='button' className='me-4' onClick={booklogin} >Schedule</button>
                  </div>
                  <div className='play-around'>
                    <FontAwesomeIcon icon={faPlay} style={{ color: '#FFF' }} beat className='icon' />
                  </div>
                  <div className='px-3'>
                    <p className='m-0'>See Video</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-12 right-img '>
              <img src={doctor} className='w-75 pt-lg-5 pt-0 slide-right' />
            </div>
          </div>
     
          {/* <div className='goal-section'>
            <img src={goal} />
            <h1>100%</h1>
            <p>Sucess rate This Year</p>
          </div> */}
      
        </div>
        <div className='single-click py-5'>
          <div className='container'>
            <div className='row m-0'>
              <div className='col-lg-4 col-12 mb-lg-0 mb-3 slide-left visible'>
                <h1>Fostering Wellness with a Single Click </h1>
              </div>
              <div className='col-lg-7 col-12 py-lg-0 py-md-0 py-2 slide-right visible'>
                <p>KlinicQ is our Electronic Clinical Management System (e CMS) application.Electronic Clinical Management System (e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital operations safely and with no manual error usually associated with handwriting & paper-based records.</p>
              </div>
              <div className='col-lg-1 d-lg-block d-none slide-right visible'>
                <div className='arrow-section'>
                  <FontAwesomeIcon icon={faArrowRight}  style={{ color: '#FFF' }} className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='m-0' style={{ background: '#D3F2FF' }} />
        <div className='hospital-details py-5'>
          <div className='container'>
            <div className='row m-0 align-items-stretch justify-content-center'>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 slide-left visible'>
                <div className='patient'>
                  <div className='img-section'>
                    <img src={doctor1} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Patient</h1>
                    <div className='inner-contentss'>
                      <div className=''>
                        <p>The patient portal is designed to manage primary & family members under the same account with a unique ID for each member.</p>
                      </div>
                      <div className=''>
                        <div className='arrow-section'>
                          {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: '#00275A' }} className='icon' /> */}
                          <img src={arrowupblack} className='icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-lg-0 my-md-0 my-sm-0 my-2'>
                <div className='patient'>
                  <div className='img-section'>
                    <img src={doctor2} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Doctor</h1>
                    <div className='inner-contentss'>
                      <div className=''>
                        <p>A doctor portal is designed based on the physician's specialty and can work for any specialization.</p>
                      </div>
                      <div className=''>
                        <div className='arrow-section'>
                          {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: '#00275A' }} className='icon' /> */}
                          <img src={arrowupblack} className='icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-lg-0 my-md-2 my-sm-2 slide-right visible'>
                <div className='patient'>
                  <div className='img-section'>
                    <img src={doctor3} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Hospital</h1>
                    <div className='inner-contentss'>
                      <div className=''>
                        <p>A hospital portal is designed to manage multi-specialty and different consultation modes.</p>
                      </div>
                      <div className=''>
                        <div className='arrow-section'>
                          {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: '#00275A' }} className='icon' /> */}
                          <img src={arrowupblack} className='icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fliter-section py-5 slide-left visible'>
          <div className='container-85'>
            <div className='box'>
              <div className='search-list search-option'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#01285C', fontSize: '30px' }} />
                  <div className='ps-3'>
                    <label className=''>Apollo hospital</label><br />
                    <input placeholder='Apollo hospital' className='border-0 mt-2' />
                  </div>
                </div>
              </div>
              <div className='search-list search-option '>
                <div>
                  <label className=''>Distance Type</label><br />
                  <select className='border-0  mt-2' placeholder="Kilometer">
                    <option className='option'>Kilometer</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option '>
                <div>
                  <label className=''>Distance Length</label><br />
                  <select className='border-0  mt-2'>
                    <option className='option'>20</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option '>
                <div>
                  <label className=''>Gender</label><br />
                  <select className='border-0  mt-2'>
                    <option className='option'>Male</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option '>
                <div>
                  <label className=''>City</label><br />
                  <select className='border-0  mt-2'>
                    <option className='option'>Madurai</option>
                  </select>
                </div>
              </div>
              <div className='search-option text-center lastbtn'>
                <button className='btn-ghost btn_sec'>Search</button>

              </div>
              {/* <div className='search-lists mx-3 d-flex align-items-center'>
                <button>Search</button>
              </div> */}
            </div>
          </div>

        </div>
        <div className='logo-slider container-90 slide-right visible'>
          <LogoSlider />
        </div>
        <div className='map-location container-85 py-5 slide-left visible'>
         

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2999410087273!2d77.57502788110729!3d12.952648982725313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e8d9e80459%3A0x1895528330682b65!2s131%2C%20Rashtriya%20Vidyalaya%20Rd%2C%20Vishweshwarapura%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1718691093610!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr />
        <div className='profile-section ps-lg-5 ps-0'>
          <SimpleSlider />
        </div>
        <div className='rest-section py-lg-5 py-md-4 py-0'>
          <div className='container-90'>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-6 col-12 slide-left visible'>
                <h1 className='mb-4'>Rest assured, your health is in the most capable hands.</h1>
                <p className='mb-3'>With medical professionals in more than 100+ countries and a 98% customer satisfaction rate, Doctoralia offers reliable health information. With an extensive network of doctors, we are able to offer a wide range of high quality medical tests. What's more, our prices are up to 70% cheaper than other online providers.</p>
             
                <div className='d-lg-none d-md-none d-sm-none d-block'>
                  <div className='d-flex align-items-center'>
                    <img src={rest2} />
                    <div className='mar-top'>
                      <label className='ps-lg-3 ps-md-3 ps-0'>Available</label><br />
                      <p className='mb-0 ps-lg-3 ps-md-3 ps-0'>900+ specialists</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center pb-3'>
                    <img src={rest1} />
                    <div className='ms-2'>
                      <label className='ps-lg-3 ps-md-3 ps-0'>Available</label><br />
                      <p className='mb-0 ps-lg-3 ps-md-3 ps-0'>900+ specialists</p>
                    </div>
                  </div>
                </div>
                <div className='book-appointment'>
                  <div className='row m-0'>
                    <div className='col-9'>
                      <h1>Book an Appointment</h1>
                      <p>Book an Appointment</p>
                    </div>
                    <div className='col-3 d-flex align-items-center'>
                      <div className='calender'>
                        <img src={calender} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-12 text-end position-relative slide-right visible'>
                <img src={rest3} className='rest3' />
                <div className='available'>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <FontAwesomeIcon icon={faCircleDot} beat style={{ color: '#46E826', fontSize: '20px' }} className='beat-icon' />
                    <div className='mar-top'>
                      <label className=''>Available Specialist</label><br />
                      <p className='mb-0 ps-3'>Select Specialist </p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <img src={rest4} />
                    <div className='doctor-name'>
                      <h2 className='ps-3'>Dr Adinda</h2>
                      <p className='mb-0 text-start ps-3'>Eye Specialist</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <img src={rest5} />
                    <div className='doctor-name'>
                      <h2 className='ps-3'>Dr Jackson</h2>
                      <p className='mb-0 text-start ps-3'>Ear Specialist</p>
                    </div>
                  </div>
                  <div className='find-doctor text-center my-3'>
                    <button>Find Doctor <img src={arrowup} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='online-section py-5'>
          <div className='container'>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-6 col-12 slide-left visible'>
                <h1>Get 15-Minutes Complimentary online session.</h1>
                <p>Limited Period Offer. Claim Now.</p>
                <button type='button' className='btn_sec' onClick={booklogin}>Book Appoinment <img src={arrowup} /></button>
              </div>
              <div className='col-lg-6  col-12 my-lg-0 mt-4 slide-right visible'>
                <img src={online} className='w-100' />
              </div>
            </div>
          </div>
        </div>
        <hr className='m-0' style={{ background: '#D3F2FF' }} />
        <div className='single-click py-5'>
          <div className='container'>
            <div className='row m-0'>
              <div className='col-lg-4 col-12 mb-lg-0 mb-3 slide-left visible'>
                <h1>Fostering Wellness with a Single Click </h1>
              </div>
              <div className='col-lg-7 col-12 py-lg-0 py-md-0 py-2'>
                <p>Electronic Clinical Management System (e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital operations safely and with no manual error usually associated with handwriting & paper-based records.</p>
              </div>
              <div className='col-lg-1 d-lg-block d-none slide-right visible'>
                <div className='arrow-section'>
                  <FontAwesomeIcon icon={faArrowRight}  style={{ color: '#FFF' }} className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='patient-section py-5'>
          <div className='container'>
            <div className='row m-0 '>
              <div className='col-lg-6  col-12 d-flex align-items-stretch slide-left visible'>
                <div class="card" >
                  <img src={patient4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-text">What to do if you think your child has the flu</h2>
                    <div className='row m-0'>
                      <div className='col-lg-11 col-md-11 col-12 p-0'>
                        <p>If you hear your child start coughing, it's natural to wonder: could this be the flu, or is it another virus like COVID or RSV, or even a common cold? Here's what to know about similarities between these illnesses and what to do if your child does have the flu.</p>
                      </div>
                      {/* <div className='col-1 p-0 d-flex align-items-center'>
                        <div className='d-lg-block d-md-block d-none'>
                          <img src={arrowupblack} className='' />
                        </div>
                      </div> */}
                    </div>
                    <a href="#" class="btn-text">Read more
                    
<svg width="14" height="35" className='ml-2' viewBox="0 0 80 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54 0.075C53.8 -0.025 53.6 -0.025 53.5 0.075C53.3 0.175 53.2 0.374998 53.2 0.474998V10.475H0.5C0.2 10.475 0 10.675 0 10.975V23.575C0 23.875 0.2 24.075 0.5 24.075H53.2V34.075C53.2 34.275 53.3 34.475 53.5 34.475C53.6 34.475 53.7 34.575 53.7 34.575C53.8 34.575 53.9 34.575 54 34.475L79.8 17.575C79.9 17.475 80 17.275 80 17.175C80 17.075 79.9 16.875 79.8 16.775L54 0.075Z" fill="#5a49f8"/>
</svg>

                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-12 my-lg-0 my-2 slide-right visible'>
                <div class="card" >
                  <img src={patient5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-text">What to do if you think your child has the flu</h2>
                    <div className='row m-0'>
                      <div className='col-lg-11 col-md-11 col-12 p-0'>
                        <p>If you hear your child start coughing, it's natural to wonder: could this be the flu, or is it another virus like COVID or RSV, or even a common cold? Here's what to know about similarities between these illnesses and what to do if your child does have the flu.</p>
                      </div>
                      {/* <div className='col-lg-1 col-md-1 col-0 p-0 e d-flex align-items-center'>
                        <div className='d-lg-block d-md-block d-none'>
                          <img src={arrowupblack} className='' />
                        </div>
                      </div> */}
                    </div>
                    <a href="#" class="btn-text">Read more
                    
                    <svg width="14" height="35" className='ml-2' viewBox="0 0 80 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54 0.075C53.8 -0.025 53.6 -0.025 53.5 0.075C53.3 0.175 53.2 0.374998 53.2 0.474998V10.475H0.5C0.2 10.475 0 10.675 0 10.975V23.575C0 23.875 0.2 24.075 0.5 24.075H53.2V34.075C53.2 34.275 53.3 34.475 53.5 34.475C53.6 34.475 53.7 34.575 53.7 34.575C53.8 34.575 53.9 34.575 54 34.475L79.8 17.575C79.9 17.475 80 17.275 80 17.175C80 17.075 79.9 16.875 79.8 16.775L54 0.075Z" fill="#5a49f8"/>
                    </svg>
                    
                                        </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topmove />
      <Footer />
    </div>
  )
}

export default Home