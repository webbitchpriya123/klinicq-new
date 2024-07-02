import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import doctor1 from '../Common/assets/image/doctor1.png'
import doctor2 from '../Common/assets/image/doctor2.png'
import doctor3 from '../Common/assets/image/doctor3.png'
import patient4 from '../Common/assets/image/patient9.png'
import patient5 from '../Common/assets/image/patient10.png'
import Topmove from '../Common/pages/Topmove'


import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function Hospitals() {

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
                <h1>Hospital Management System</h1>
                {/* <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p> */}
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='py-5'>
                <div className='container-90' id='hospitals_clinics'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 slide-left visible'>
                            <img src={doctor1} className='w-100 figure-holder' />
                        </div>
                        <div className='col-lg-6 col-12 slide-right visible'>
                            <p>The hospital portal is designed to manage multi-specialty and different consultation modes (Token Management System, Appointment Management System & Tele-consultation). Each hospital is registered with a unique location ID, which shows the hospital/clinic in the Google Maps view with the wait time based on the specialization. Also, the dashboard displays the travel distance between the visitor location and the hospital travel time to the hospital to arrive at the clinic on time to avoid no-shows.</p>
                            <p>KlinicQ' s advanced token management system algorithm schedules a virtual queue and allocates the token number to the visitors so that visitors don't have to wait in the waiting room physically. </p>
                            <p>The KlinicQ token management system keeps track of each visitor's token position in a queue and updates the hospital and visitors on the progress. Clinics can operate with minimal resources and less space due to sequenced line, and, patients can use their time effectively instead of wait at the waiting room, and there is no need to have a larger area and the infrastructure at the Clinic waiting room.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='for_physicians'>
                        <div className='row m-0 flex-wrap-reverse align-items-center '>
                            <div className='col-lg-6 col-12 slide-left visible'>
                                <p>KlinicQ Clinical Management System fills the appointment schedule automatically without any manual intervention, and it handles appointment cancellation, allocates grace time for patients who arrive to their appointment late, and calculates the schedule based on the doctor's arrival time at the hospital so that minimal staff should be enough to manage the operations.</p>
                                <p>As the KlinicQ Token management algorithm allocates the appointment time for each token, visitors could arrive at the hospital before their appointment time, which could limit the number of visitors in the waiting room.</p>
                                <p>The KlinicQ' s algorithm has been developed to perform line balancing to schedule the workload based on the doctor's availability maintained in the shift planner, which could help optimize the schedule effectively. It simplifies the check-in process at the front desk. It digitally keeps the visitor's records, patient's discharge summary, medicine details, and clinic staff details so that clinic front office staff can focus on their work as patients join the virtual queue. It improves productivity and Operational efficiency.</p>
                            </div>
                            <div className='col-lg-6 col-12 slide-right visible'>
                                <img src={doctor2} className='w-100 figure-holder' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90' id='for_patients'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-lg-6 col-12 position-relative slide-left visible'>
                            <img src={doctor3} className='w-100 figure-holder' />
                            {/* <div className='repeat-img'>
                                <img src={patient4} className='' />
                            </div>
                            <div className='scan-img'>
                                <img src={patient5} className='' />
                            </div> */}
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

export default Hospitals