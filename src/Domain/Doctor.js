import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import doctor4 from '../Common/assets/image/doctor4.png'
import doctor5 from '../Common/assets/image/doctor5.png'
import doctor6 from '../Common/assets/image/doctor6.png'
import klinicq1 from '../Common/assets/image/klinicq1.png'
import klinicq2 from '../Common/assets/image/klinicq2.png'
import klinicq3 from '../Common/assets/image/klinicq3.png'
import klinicq4 from '../Common/assets/image/klinicq4.png'
import klinicq5 from '../Common/assets/image/klinicq5.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'

function Doctor() {


    const { isClass1Show } = useSelector((state) => state.klinical)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setClass1Hide(false))
        window.scrollTo(0, 0);

    }, []);


    return (
        <div className='product-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Doctor Management System</h1>
                <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='py-5'>
                <div className='container-90'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={doctor4} className='w-100 figure-holder' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <p>A doctor portal is designed based on the physician's specialty and can work for any specialization. It contains information about their education qualification, specialization area, physicians associated with the hospital, and the working hours and consultation mode (Token Management System, Appointment Management System & Tele-consultation)</p>
                            <p>Our Clinical Management System is designed to manage the physician schedule based on availability, as the KlinicQ application is a cloud-based solution (AWS - amazon web services) so that physicians can access the data allocated to the hospital from anywhere.</p>
                            <p>As the consultation time varies for each patient, the KlinicQ application's token management system considers the takt time for calculating appointment time instead of the cycle time. Each hospital/Clinic can set its cycle time in the dashboard based on specialty and previous consultation history.</p>
                        </div>
                    </div>
                </div>
                <div className='bgs-section'>
                    <div className='container-90'>
                        <div className='row m-0 align-items-center flex-wrap-reverse'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <p>Clinical Management System is an integrated application. Physicians can send follow-up actions, instructions to the nurses and admin staff, and prescriptions to the pharmacy directly. Bi-directional communication is enabled between the laboratory and hospital for sending requests and getting the lab results. Also, follow-up appointment reminders can be sent to the patients, enhancing customer engagement. </p>
                                <p>Analytical insights are extremely effective and can be used to grow your business. Our Clinical Management System has been designed with various KPI reports and trends based on average waiting times, consulting time, clinical records, pharmacy & laboratory records, etc., to do analysis and improve it. The analytics can help to optimize the business process to make critical decisions.</p>
                                <p>As the consultation time varies for each patient, the KlinicQ application's token management system considers the takt time for calculating appointment time instead of the cycle time. Each hospital/Clinic can set its cycle time in the dashboard based on specialty and previous consultation history.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={doctor5} className='w-100 figure-holder' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='klinicq'>
                    <div className='container-90'>
                        <h1>The KlinicQ Clinical Management System developed with reporting capabilities to allow the download of the report to Microsoft Excel </h1>
                        <div className='row m-0  align-items-stretch justify-content-center'>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center'>
                                    <img src={klinicq1} />
                                    <h4>Patient discharge summary</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3 align-items-stretch'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq1} />
                                    <h4>Medicine list</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq2} />
                                    <h4>Patient list</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq3} />
                                    <h4>Patient visit trend</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq1} />
                                    <h4>Pharmacy list</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq1} />
                                    <h4>Facility list</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq1} />
                                    <h4>Patient discharge summary</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq4} />
                                    <h4>Medicine list</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-4 col-12 mb-3'>
                                <div className='card-views text-center h-100'>
                                    <img src={klinicq5} />
                                    <h4>Patient list</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90 py-5'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={doctor6} className='w-100 figure-holder' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <p>KlinicQ application works with walk-in appointments, mobile app check-in & teleconsultation. The application can send referrals to other physicians and the prescription to the selected pharmacy. Hospitals/Clinics can add their pharmacy/ laboratory associated with them to send the prescription directly.</p>
                            <p>In the Check-in process, the staff could update the patient's vital details, the reason for the visit, and medical condition; then, the physician can review the details for each patient, and it is easy to update the diagnosis details with few clicks. The KlinicQ application database has thousands of medicines for physicians to prescribe easily. Also, the clinic can add their specific medicine records with simple drug IDs for easy selection.</p>
                            <p>Patients can view their medical records, previous prescriptions, discharge summaries, and vital details of their consultation history digitally. Physicians can send follow-up reminders to patients for upcoming visits, and the payment gateway is enabled for online payments.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Doctor