import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import patient1 from '../Common/assets/image/patient6.png'
import patient2 from '../Common/assets/image/patient7.png'
import patient3 from '../Common/assets/image/patient8.png'
import patient4 from '../Common/assets/image/patient9.png'
import patient5 from '../Common/assets/image/patient10.png'
import Topmove from '../Common/pages/Topmove'


import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'

function Patients() {

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
                <h1>Patients Management System</h1>
                <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='py-5'>
                <div className='container-90'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={patient1} className='w-100' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <p>The patient portal is designed to manage primary and family members under the same account with a unique ID for each member. Patients can access their health history, medical records, and discharge summary and communicate with doctors and hospitals anytime & anywhere. Patients Personal Identification Information (PII) and Patient Health Information (PHI) is encrypted as per HIPAA guideline for data privacy & security.</p>
                            <p>KlinicQ application Patient module allows booking, rescheduling, or canceling the appointment through mobile apps to reduce no-shows & also if a patient is running late, then the system automatically provides grace time and adjusts the schedule automatically to avoid waiting in the waiting room for long time again.</p>
                            <p>Patients can search the hospital/Clinic in our network based on various search options like Specialty of the doctor, Hospital, Gender, City, and Distance between your location and hospital. Our KlinicQ application is integrated with Google Maps so that you can view the live waiting time data in all the hospitals near your surroundings and update you with the distance to the healthcare provider's location.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90'>
                        <div className='row m-0 flex-wrap-reverse align-items-center'>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <p>For pregnant women, kids, physically challenged & aged patients, waiting in the waiting room for hours is a nightmare; more crowds in the waiting room cause mental trauma & fear of getting affected by airborne disease. KlinicQ application's Token management system algorithm allocates the appointment time for each token. Visitors could arrive at the hospital just before their appointment time and use their precious time outside the waiting room instead of waiting at the waiting room, which could increase the opportunity for social distancing, and it is one of the best ways to minimize the spread of airborne disease.</p>
                                <p>The KlinicQ application is user-friendly, easy to use, easy to check doctor availability with accurate wait time, and secured & confidential. KlinicQ application sends appointment confirmation texts and notifications about the follow-up appointment to the patients, reducing no-shows. </p>
                                <p>The KlinicQ application has the option of online consultation through video calling, so the patients not able to go to the Hospital/Clinic can book an appointment with the available doctor for online consultation. Patients can set their favorite healthcare providers for easier appointment booking.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={patient2} className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 position-relative slide-left visible'>
                            <img src={patient3} className='w-100' />
                            <div className='repeat-img'>
                                <img src={patient4} className='' />
                            </div>
                            <div className='scan-img'>
                                <img src={patient5} className='' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 ps-5 slide-right visible'>
                            <p>Patient's medical records like prescriptions, discharge summaries, and vital details of their previous consultation can also be scanned or uploaded the images of all their previous medical records digitally to access anytime when required & it helps the doctor to go through all reports to provide an effective treatment.</p>
                            <p>The KlinicQ application has additional features like General health tips, BMI, and vital details, and also, the payment gateway is enabled for online payments, QR code easier, and touchless check-in process. KlinicQ mobile application ( IoS and Android apps) has five different language options - English, Tamil, Hindi, Telugu, and Kannada.</p>
                        </div>

                    </div>
                </div>

            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Patients