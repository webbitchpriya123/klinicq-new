import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import about1 from '../Common/assets/image/mission.webp'
import vision1 from '../Common/assets/image/vision1.png'
import profile1 from '../Common/assets/image/company-profile.webp'
import profile2 from '../Common/assets/image/profile2.png'
import profile3 from '../Common/assets/image/profile3.png'
import timeline from '../Common/assets/image/time-line.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function About() {

    const { isClass1Show } = useSelector((state) => state.klinical)
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash || hash === '') {
            const trimmedHash = hash.trim(); // Trim whitespace
            if (trimmedHash) {
                const element = document.querySelector(trimmedHash);
                if (element.id) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: "nearest" });
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                window.scrollTo(0, 0);
            }
        }
        dispatch(setClass1Hide(false));
    }, [dispatch, location]);

    return (
        <div className=''>
            <Header />
            <div className='sub-banner text-center'>
                <h1>About </h1>
         
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='about-section' >
                <div className='container-90 vision-section py-5' id='our_vision'>
                    <div className='row m-0 position-relative'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <h1>Our Vision & Mission</h1>
                            <div className='img-responsive'>
                                <img src={about1} className='w-100 d-lg-none d-block' />
                            </div>
                            <h5>Mission</h5>
                            <p>Nucleo Software Solutions development methodology advocates a result-driven collaborative approach and ensures the best customer service in terms of quality, on-time delivery, and cost.
                                Nucleo Software Solutions continuously improves methodology to meet customer expectations by providing high-quality results and an enhanced delivery approach to improve responsiveness, market challenges, and competition for the business</p>
                            <h5>Vision</h5>
                            <p>Our goal is to add business value to customers in Information Technology </p>
                        </div>
                        <div className='col-lg-6 col-12 ps-5 '>
                            <img src={about1} className='w-100 d-lg-block d-none' />
                            {/* <div className='total-vision'>
                                <img src={vision1} />
                            </div> */}
                            {/* <h2>25</h2>
                            <h3>Years of Experience</h3> */}
                        </div>
                    </div>
                </div>
                <hr className='m-0' style={{ color: '#D9F4FF' }} />
                <div className='company-section container-90' id="company_profile">
                    <div className='row m-0'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={profile1} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible content-company ps-lg-5 ps-0'>
                            <h1>Company Profile</h1>
                            <div className='img-responsive'>
                                <img src={profile1} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>Nucleo Software Solutions is an IT firm providing business consulting and Information Technology services. It consistently delivers the best value in empowered business solutions in the life sciences and healthcare industries.</p>
                            <p>Nucleo Software Solutions is a pioneer in translating advanced technologies and sophisticated theories into workable solutions and creating business value to benefit its valuable customers.</p>
                            <p>It provides cost-effective solutions to healthcare industries in implementing business solutions that meet diverse client needs in this modern age of converging technologies. The business community desires to harness the power of technology for the benefit of business and people.</p>
                            <p>Nucleo Software Solutions provides services with proven and time-tested enterprise solutions that best meet specific organizational needs. </p>
                        </div>
                    </div>
                </div>
                <div className='company-section container-90' id='about_product'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-12 slide-left visible content-company'>
                            <h1>About KlinicQ</h1>
                            <div className='img-responsive'>
                                <img src={profile2} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>	KlinicQ is our Electronic Clinical Management System (e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital operations safely and with no manual error usually associated with handwriting & paper-based records.</p>
                            <p>KlinicQ application has been developed based on the best practices around the world. KlinicQ algorithm is designed to solve a fundamental and global human problem, which is wasting time waiting in line. The convenience of saving time is one of the best aspects of modern technology. It provides a solution to the outdated practice of waiting in line. </p>
                            <p>KlinicQ application helps to organize the doctor schedules, collate patient notes, health history, medical records, patient records, and other critical metrics in real-time, and handling payment is effortless. Patients can find doctors based on their specialization and book online appointments through mobile apps, phone calls, or walk-ins based on specialty and waiting time. </p>
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <img src={profile2} className='w-100 d-lg-block d-none' />
                        </div>
                    </div>
                </div>
                <div className='company-section container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={profile3} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible content-company'>
                            <h1>Why KlinicQ ?</h1>
                            <div className='img-responsive'>
                                <img src={profile3} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>Doctors and Patients can check their schedules, and it improves the quality of service by minimal waiting time and accessing the medical records electronically. </p>
                            <p>KlinicQ application can be accessed through the cloud on any type of mobile device anywhere & anytime and on desktop at on-premises. </p>
                            <p>KlinicQ flawlessly integrates with existing appointments with walk-in patients to eliminate he scheduling gaps when appointments are canceled or rescheduled. </p>
                            <p>KlinicQ' s appointment scheduling solutions where appointments that are updated automatically so that every patient arriving late will be automatically pushed back in the queue. Medical records can be accessed from any place & any time.  </p>
                        </div>
                    </div>
                </div>
                <div className='container-90 time-line position-relative d-lg-block d-md-block d-none'>
                    <h1 className='py-5 text-center'>Product Road Map</h1>
                    <div className='time-content'>
                        <img src={timeline} className='w-100' />
                        <h1 className='year1 slide-left visible'>2022</h1>
                        <div className='content1 slide-left visible'>
                            <p>KlinicQ web application for Clinical management system is developed</p>
                        </div>

                        <h1 className='year2 slide-left visible'>2023</h1>
                        <div className='content2 slide-left visible'>
                            <p>KlinicQ andorid & IOS application is developed for Physician, Hospital & Doctors</p>
                        </div>

                        <h1 className='year3'>2024</h1>
                        <div className='content3'>
                            <p>In-pateint, Pharmacy & Laboratory application will be deployed</p>
                        </div>

                        <h1 className='year4 slide-right visible'>2025</h1>
                        <div className='content4 slide-right visible'>
                            <p>e-Commerce application for Hospitals, Pharmacy & Laboratory</p>
                        </div>

                        <h1 className='year5 slide-right visible'>2026</h1>
                        <div className='content5 slide-right visible'>
                            <p>One in All solution for healthcare services</p>
                        </div>

                    </div>

                </div>
            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default About