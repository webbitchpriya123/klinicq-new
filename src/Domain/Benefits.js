import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import benefits1 from '../Common/assets/image/benefits1.png'
import benefits2 from '../Common/assets/image/benefits2.png'
import benefits3 from '../Common/assets/image/benefits3.png'
import benefits4 from '../Common/assets/image/benefits4.png'
import benefits5 from '../Common/assets/image/benefits5.png'
import benefits6 from '../Common/assets/image/benefits6.png'
import benefits7 from '../Common/assets/image/benefits7.png'
import benefits8 from '../Common/assets/image/benefits8.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'
import Topmove from '../Common/pages/Topmove'


import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function Benefits() {

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
                <h1>Benefits</h1>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='pt-5'>
                <div className='container-90' id='increase_revenue'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12  slide-left visible'>
                            <img src={benefits1} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12'>
                            <h5>Increase Revenue</h5>
                            <h1>Optimize operational expenses & increase revenue</h1>
                            <div className='img-responsive'>
                                <img src={benefits1} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>Data is the fuel for any process improvement; using the data collected at the Hospital/Clinic, our Clinical Management System could help identify the non-value-added activities and eliminate the waste & idle time causing bottlenecks.</p>
                            <p>Maintaining the data related to hospital operations (Patient records, Health information records, Medicine records, Pharmacy and Laboratory details, Supplier details, etc.) takes a lot of work. It requires more staffing to maintain the paperwork and store it.</p>
                            <p>As per the study, every human average spends 6.5 months of their lives, equivalent to 5,000 hours in searching. One of the most time-consuming jobs and most significant challenges in daily life at hospitals /Clinics is searching for the records when required.</p>
                            <p>Our Clinical Management System is designed with Amazon Web Services cloud-based architecture so that all the records will be maintained digitally online, and it can be retrieved and downloaded easily in Excel sheets in a few seconds.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='increase_productivity'>
                        <div className='row m-0 align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <h5>Increase Productivity</h5>
                                <h1>Appointment System</h1>
                                <div className='img-responsive'>
                                    <img src={benefits2} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The traditional token system requires more staff involvement in managing the visitors in the waiting room. Every time, Staff must announce the current token number in the waiting room to call the visitors. Also, performing paperwork during the check-in & check-out process is time-consuming and fatiguing for the Staff, which leads to dissatisfaction and poor performance.</p>
                                <p>KlinicQ CMS application shift planner function supports allocating the Staff effectively & all the records are maintained digitally in the CMS application online so that they no longer have to manage the paperwork.</p>
                                <p>The token algorithm takes care of the check-in &amp; check-out functions and the user queue list displayed on the monitor or TV with who is next & the waiting time for their turn so that there is no need to announce every time.</p>
                                <p>Managing social distancing and limiting the crowd by reducing the wait in the waiting room could reduce frustration and help improve staff satisfaction. The satisfied Staff help produce happy customers and deliver excellent service.</p>

                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={benefits2} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90 mt-5' id='increase_servicequality'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={benefits3} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <h5>Improve Service Quality</h5>
                            <h1>Building a trustworthiness to the Patients</h1>
                            <div className='img-responsive'>
                                <img src={benefits3} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>In most cases, Patients would like to consult with their preferred hospital & doctors, and the reason could be friendliness, easy approach, easy access to medical records anywhere and anytime, security &amp; privacy of health information records, and less wait in the waiting room.</p>
                            <p>For pregnant women, kids, and physically challenged &amp; aged patients, waiting in the waiting room for hours is a nightmare. More crowds in the waiting room cause mental trauma &amp; fear of getting affected by airborne disease.</p>
                            <p>To accommodate more patients in the waiting room simultaneously, hospitals and clinics require more resources like space, infrastructure, and more front office staff.</p>
                            <p>When the Hospitals/Clinics don’t implement an Intelligent Queue technique in the future, it could cause a loss of customers altogether.</p>
                            <p>Minimizing the wait in the waiting room might look small. Still, it is a very sensitive and meaningful improvement to the service at the Hospital/Clinic, which could build trust in the convenience of the hospital.</p>

                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='improve_patientsatisfaction'>
                        <div className='row m-0 align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <h5>Improve patient satisfaction</h5>
                                <h1>Improve the quality of service to boost Patient Satisfaction</h1>
                                <div className='img-responsive'>
                                    <img src={benefits4} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The patients expect a better experience and quality of service from their healthcare providers and hospitals/Clinics are striving to deliver eminence service at their facility. Failure to meet patients needs can lead to negative feedback and loss of business opportunities.</p>
                                <p>Our KlinicQ Clinical Management System token & appointment scheduling function saves visitors and physicians time effectively customers by allowing them to check their token status at their own convenience on their mobile devices so that the visitors use their time efficiently rather than wait in the waiting room.</p>
                                <p>Our Clinical Management System is designed based on understanding the customer’s needs, and best practices followed across most hospitals/Clinics, which helps your business create an opportunity to build a long-lasting relationship with the customers.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={benefits4} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90' id='no_waitingroom'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={benefits5} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <h5>No wait at waiting room </h5>
                            <h1>Improve the quality of service to boost Patient Satisfaction</h1>
                            <div className='img-responsive'>
                                <img src={benefits5} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>As per the study, Human beings spend approximately six months of their lives waiting in queues, and waiting is one of the non-value-added activities that is more uncomfortable for any customer; no one would say I like to wait in the queue.</p>
                            <p>With the traditional token system, hospitals could not provide accurate appointment times for each token. Visitors are frustrated that even though they have tokens, why should they physically wait in the waiting room for hours.</p>
                            <p>KlinicQ’ s advanced token management system algorithm schedules a virtual queue and allocates the token number to the visitors so that visitors don’t have to physically wait in the waiting room.</p>
                            <p>Social distancing is one of the best ways to minimize the spread of airborne disease, especially in the hospital/clinic waiting room; having more patients could potentially create an opportunity to spread the airborne disease.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='improve_datasecurity'>
                        <div className='row m-0 align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <h1>Improve Data Security</h1>
                                <div className='img-responsive'>
                                    <img src={benefits6} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>Our Clinical Management System is designed based on HIPAA guidelines. Personal identification information (PII) and Personal Health Information (PHI) are encrypted and stored in the database for data security, and they will not be shared with any third party. </p>
                                <p>Our Clinical Management System is designed based on HIPAA guidelines. Personal identification information (PII) and Personal Health Information (PHI) are encrypted and stored in the database for data security, and they will not be shared with any third party. </p>
                                <p>Our Clinical Management System has stringent access controls, and every registration record is verified by us and monitored to ensure the reliability of the data. Our technical team continuously follows intense technical protocols and vulnerability measures to provide secure service and protect customer data.</p>

                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={benefits6} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90' id='improve_dataanalytics'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={benefits7} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <h5>No wait at waiting room </h5>
                            <h1>Data Analytics & Insight</h1>
                            <div className='img-responsive'>
                                <img src={benefits7} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>Data is information obtained from various sources like demographic information, the number of consultations per day/ week/ month, visiting hours pattern, activity, and behavior.</p>
                            <p>The famous quote by Peter Drucker, You can’t improve what you don’t measure. </p>
                            <p>For any business, without performing analytics, the collected data is basically useless, and the business can’t be able to improve the process efficiency, productivity, performance & revenue.</p>
                            <p>Analytical insights are incredibly effective and can be used to grow your business. Our Clinical Management System has been designed with various KPI reports and trends based on average waiting times, consulting time, clinical records, pharmacy &amp; laboratory records, etc., to do analysis and improve it.</p>

                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='improve_sustainablility'>
                        <div className='row m-0 align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <h1>Improve Sustainability</h1>
                                <div className='img-responsive'>
                                    <img src={benefits8} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>KlinicQ application enhances the overall healthcare experience in a healthcare facility & it is easy to use and eliminates errors caused by handwriting and advanced e-prescribing clinical documentation capabilities.</p>
                                <p>KlinicQ application records are stored in cloud servers, and it provides all data in a single platform to reduce the expenses of an organization because of less paperwork and improved safety.</p>
                                <p>Patient care with a reduction in errors &amp; elimination of duplication. Our solution is customizable and scalable electronic medical records that can grow with your medical practice.</p>
                                <p>KlinicQ application can quickly transfer patient data from one system. It helps in the space-saving of a digital records environment, and it helps to reduce operational costs such as transcription services.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={benefits8} className='w-100 d-lg-block d-none' />
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

export default Benefits