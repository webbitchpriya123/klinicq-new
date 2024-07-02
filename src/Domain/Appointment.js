import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import appointment1 from '../Common/assets/image/appointment1.png'
import appointment2 from '../Common/assets/image/appointment2.png'
import appointment3 from '../Common/assets/image/appointment3.png'
import appointment4 from '../Common/assets/image/appointment4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function Appointment() {


    const { isClass1Show } = useSelector((state) => state.klinical)
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash || hash === '') {
            const trimmedHash = hash.trim(); // Trim whitespace
            if (trimmedHash) {
                const element = document.querySelector(trimmedHash);
                if (element) {
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
        <div className='product-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Appointment Management System</h1>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='pt-5'>
                <div className='container-90' id='token_system'>
                    <div className='row m-0'>
                        <div className='col-lg-6  col-12 slide-left visible'>
                            <img src={appointment1} className=' d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6  col-12 slide-right visible'>
                            <h1>Token System</h1>
                            <div className='img-responsive'>
                                <img src={appointment1} className=' d-lg-none d-block' />
                            </div>
                            <p>Token System automatically gives patients priority in the queue for a given time slot, no matter how long the queue is.</p>
                            <p>Token System accepts walk-in appointments as soon as scheduled openings occur and can also allocate emergency appointments.</p>
                            <p>Token System algorithm updates the wait time for each clinic in our network and displays it in google maps for easy navigation.</p>
                            <p>Token System allocates time slots based on the Takt time for actual consultation time.</p>
                            <p>Token System updates the token status, token time, and wait time and sends updates through mobile app and SMS text messages.</p>
                            <p>Reschedule or cancel the appointment in the mobile app to reduce no-shows, accordingly the token time and wait time will be updated.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='appointment_schedule'>
                        <div className='row m-0 '>
                            <div className='col-lg-6  col-12 slide-left visible'>
                                <h1>Appointment System</h1>
                                <div className='img-responsive'>
                                    <img src={appointment2} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The KlinicQ appointment management system is designed to manage the effective planning of appointments for patients & doctors.</p>
                                <p>The KlinicQ appointment management system allows patients to book appointments for a future day and time.</p>
                                <p>The appointment management system works with Online appointments, and it also works with walk-in appointments based on availability.</p>
                                <p>Based on the cycle time defined by each hospital, Appointment slots get split automatically.</p>
                                <p>Appointment management system updates the status of the upcoming appointment and sends updates through mobile app and SMS text message.</p>
                                <p>Reschedule or cancel the appointment in a mobile app to reduce no-shows; the availability slots will be updated accordingly.</p>
                                <p>For appointment services, online payment or pay-at-clinic options are defined by the individual hospitals, and accordingly, the workflow triggers the payment options.</p>
                            </div>
                            <div className='col-lg-6  col-12 slide-right visible'>
                                <img src={appointment2} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90' id='tele_consultaion'>
                    <div className='row m-0'>
                        <div className='col-lg-6  col-12 slide-left visible'>
                            <img src={appointment3} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6  col-12 slide-right visible'>
                            <h1>Tele-Consultation</h1>
                            <div className='img-responsive'>
                                <img src={appointment3} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>The KlinicQ application has the option of Tele consultation through video calling, so the patients not able to go to the Hospital/Clinic can book an appointment with the available doctor for online consultation. Patients can set their favorite healthcare providers for easier appointment booking.</p>
                            <p>With the rapid growth of technology, utilizing digital solutions in the healthcare industry will be helpful for healthcare providers and patients.</p>
                            <p>Tele-consultation is one of the options to connect healthcare professionals with patients through video conferences instead of meeting in person.</p>
                            <p>Patients need to go for regular check-ups, but due to some circumstances, they cannot go to the hospital/clinic in person, or any first aid treatment is required during nighttime or odd hours when the Hospital/ clinic is not open.</p>
                            <p>Tele-consultation is the best option to get a doctor’s advice on time to save lives.</p>
                            <p>Tele-consultation is significantly beneficial for patients living in rural areas that do not have hospitals/clinics and for people who do not have transport facilities, older adults & physically challenged people who cannot travel because the KlinicQ application helps connect with doctors quickly from anywhere, and anytime.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='outpatient_management'>
                        <div className='row m-0 '>
                            <div className='col-lg-6  col-12 slide-left visible'>
                                <h1>In/ Outpatient Management</h1>
                                <div className='img-responsive'>
                                    <img src={appointment4} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The KlinicQ application is designed to manage everything related to Outpatient activities like Check-in and check-out functions with task management efficiently.</p>
                                <p>The nursing staff can access the clinical information of the patients checked –into the initial assessment, vital signs, and evaluations.</p>
                                <p>The KlinicQ application allows prescription management, medicines & pharmacy management, X-ray, MRI, Blood work, and laboratory management.</p>
                                <p>The nursing staff can set up follow-ups for the patient's upcoming appointment & send SMS notifications.</p>
                                <p>The KlinicQ application supports patient Billing services, manages invoices and payment due, and generates reports and analytics to provide insights into operations.</p>
                                <p>Doctors/Nurses can electronically prescribe drugs, and it is possible to eliminate the wrong medication prescribed to patients.</p>
                            </div>
                            <div className='col-lg-6  col-12 slide-right visible'>
                                <img src={appointment4} className='w-100 d-lg-block d-none' />
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

export default Appointment