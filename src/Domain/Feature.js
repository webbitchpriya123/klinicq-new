import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import product6 from '../Common/assets/image/product6.png'
import product7 from '../Common/assets/image/product7.png'
import product8 from '../Common/assets/image/product8.png'
import product9 from '../Common/assets/image/product9.png'
import product10 from '../Common/assets/image/product10.png'
import product11 from '../Common/assets/image/product11.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function Feature() {

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
                <h1>Feature</h1>
                <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='py-5'>
                <div className='container-90' id='privacy_security'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={product6} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible '>
                            <h1>Privacy & Security</h1>
                            <div className='img-responsive'>
                                <img src={product6} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>KlinicQ application is designed per HIPAA (Health Insurance Portability and Accountability Act) rules. Personal identification information (PII) and protected health information (PHI) records are securely encrypted & are safe and not for sale to any third parties.</p>
                            <p>KlinicQ Clinical Management System role-based security is assigned to the doctors, hospitals, and patients to provide relevant authorization to control access. Privacy & security are our number one priority, and we ensure that no selling of personal data.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section' >
                    <div className='container-90' id='resource_planning'>
                        <div className='row m-0 align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <h1>Resource planning & Scheduling</h1>
                                <div className='img-responsive'>
                                    <img src={product7} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The KlinicQ application's scheduling function helps to do resource planning and to manage hospitals/clinic and doctor's schedules effectively by day, week, and month to avoid overlapping & overbooking.</p>
                                <p>The KlinicQ application's appointment scheduling function helps to schedule for doctors based on their availability automatically.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={product7} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90' id='billing_payment'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={product8} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <h1>Billing & Payments</h1>
                            <div className='img-responsive'>
                                <img src={product8} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>KlinicQ application supports patient billing, invoices of all consultancy services with details of Patient Information, Services provided like Room rent, Clinical supplies, Consultation, Nursing Charges, Laboratory tests, X-rays, Ultrasound, Medicines, procedures, and the tax percentage calculated based on the relevant services</p>
                            <p>The payment gateway service is integrated with KlinicQ, simplifying the customer payment process.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='data_analytics'>
                        <div className='row m-0 '>
                            <div className='col-lg-6 col-12 py-5 slide-left visible'>
                                <h1>Data Analytics & KPI Reports</h1>
                                <div className='img-responsive'>
                                    <img src={product9} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>KlinicQ application's analytical insights are incredibly effective and can be used to grow your business. </p>
                                <p>Our Clinical Management System has been designed with various KPI reports and trends based on average waiting times, consulting time, clinical records, pharmacy & laboratory records, etc., to do analysis and improve it.</p>
                                <p>KlinicQ applications analyze the real-time data of Patient visit trends based on locations, and these analytics insights features provide customers with habits who aren't showing up and who are returning.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={product9} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90 mt-5' id='appointment_scheduling'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={product10} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <h1>Appointment Scheduling</h1>
                            <div className='img-responsive'>
                                <img src={product10} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>The KlinicQ application supports any of these three types of appointment booking by the token management system, appointment management system, and teleconsultation.</p>
                            <p>The KlinicQ application supports booking an appointment through the online mobile application, phone, and walk-in options for our patients & a teleconsultation appointment (Video calling) option available for patients unable to visit the hospital.</p>
                            <p>The KlinicQ application allows to manage emergency appointments & grace period functions, which helps to adjust the appointment schedule automatically for patients who arrive late to the hospital.</p>
                            <p>The KlinicQ application supports quick and effective inpatient and outpatient appointment scheduling and automatically sends text and email reminders.</p>
                        </div>
                    </div>
                </div>
                <div className='container-90 my-5' id='kisok_integration'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <h1>Kiosk integration capability</h1>
                            <div className='img-responsive'>
                                <img src={product11} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>Kiosks in the hospital waiting room allow customers to add themselves to a queue without staff assistance. On the touchscreen, patients can enter their phone number or scan the QR code to retrieve their appointment and the monitor connected to the Kiosk will display each appointment's queue list and status.</p>
                            <p>Patient's vital details can be measured at the Kiosk system. The vital blood pressure, pulse, height, weight, and BMI details can be automatically transferred to the KlinicQ app for the appointment visit.</p>
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <img src={product11} className='w-100 d-lg-block d-none' />
                        </div>
                    </div>
                </div>
            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Feature