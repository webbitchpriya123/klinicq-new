import React, { useEffect, useRef } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import product1 from '../Common/assets/image/product1.png'
import product2 from '../Common/assets/image/product2.png'
import product3 from '../Common/assets/image/product3.png'
import product4 from '../Common/assets/image/product4.png'
import product5 from '../Common/assets/image/product5.png'

import resourceplanning from '../Common/assets/image/feature-2.png'
import billingimg from '../Common/assets/image/feature-3.png'
import dataanalytics from '../Common/assets/image/feature-4.png'
import AppointmentSche from '../Common/assets/image/feature-5.png'
import Kiosk from '../Common/assets/image/feature-6.png'
import privacy from '../Common/assets/image/feature-1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'
import Topmove from '../Common/pages/Topmove'

import { useDispatch, useSelector } from 'react-redux'
import { setClass1Hide } from '../Redux/CreateSlice'
import { useLocation } from 'react-router-dom'

function Product() {

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
                <h1>Product</h1>
                {/* <p>A Clinical Management System (CMS) is a software solution designed to streamline and enhance the administrative and clinical functions within healthcare facilities. It plays a crucial role in managing patient information, improving efficiency, ensuring regulatory compliance, and enhancing overall patient care. Here are some key components and features typically found in a Clinical Management System</p> */}
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='py-5'>
                <div className='container-90'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-12 text-center slide-left visible'>
                            <img src={product1} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 mt-lg-0 mt-5 slide-right visible'>
                            <h1>Electronic Medical Records ( EMR )</h1>
                            <div className='img-responsive'>
                                <img src={product1} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>The KlinicQ application maintains the patient's medical records, which include the health history, lab records, discharge summary, prescription details, vitals.</p>
                            <p>KlinicQ application software security is a role-based access configuration for doctors, hospitals, and patients.</p>
                            <p>Patient discharge summary generated based on check-out after treatment, including the visit's reason, diagnosis information, vitals, and prescription details.</p>
                            <p>The data is stored in the cloud so that the ability to transfer the patient data from one clinic/department to the next will be quick.</p>
                            <p>The KlinicQ application is customizable & scalable depending on the data volume to store the electronic medical records that can grow with your practice.</p>
                            <p>Improve the operational efficiency and reduce the documentation searching time, maintain paper records & also the space-saving of a digital record environment</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section'>
                    <div className='container-90' id='integrated_solution'>
                        <div className='row m-0 flex-wrap-reverse' >
                            <div className='col-lg-6 col-12 mt-lg-5 pt-lg-5 mt-5 slide-left visible'>
                                <h1>Integrated Solution</h1>
                                <div className='img-responsive'>
                                    <img src={product2} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>KlinicQ application accounts management function developed with GST function and invoicing for medical services and supplies.</p>
                                <p>KlinicQ application is integrated with Razor payment way for digital payments.</p>
                                <p>The KlinicQ application is integrated with Twilio for Video calling between doctors and patients.</p>
                                <p>KlinicQ application integrates with Google Maps for wait time and travel time display.</p>
                                <p>KlinicQ application APIs can integrate with any existing portals to update the details from KlinicQ and extract the information as per the security guidelines, so there is no need to replace the existing system.</p>
                                <p>KlinicQ application is fully integrated between Doctors, Hospitals and patients and no need to duplicate the records </p>
                            </div>
                            <div className='col-lg-6 col-12 text-center slide-right visible'>
                                <img src={product2} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-90 pt-5'>
                    <div className='row m-0' id='no_expensive_hardware'>
                        <div className='col-lg-6 col-12 text-center slide-left visible'>
                            <img src={product3} className='w-100 d-lg-block d-none' />
                        </div>
                        <div className='col-lg-6 col-12 mt-lg-5 pt-lg-5 slide-right visible'>
                            <h1>No expensive Hardware</h1>
                            <div className='img-responsive'>
                                <img src={product3} className='w-100 d-lg-none d-block' />
                            </div>
                            <p>The KlinicQ application is a cloud-based solution (AWS - amazon web services), and all the data is stored in the cloud server so that no additional server setup is required, network & expensive hardware is required at your Clinic.</p>
                            <p>KlinicQ Clinical Management System runs in Android & IOS mobile applications and can be downloaded from the Google Play Store and Apple App Store. Works with any cell phones or tablets with Wi-Fi Hotspots & no wires or software installation is required.</p>
                            <p>KlinicQ application can be accessed through any web browser of any device (Google Chrome, Safari, Microsoft Edge, etc.) so no need have special software</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section' >
                    <div className='container-90' id="easy_communication" >
                        <div className='row m-0 flex-wrap-reverse'>
                            <div className='col-lg-6 col-12 mt-lg-5 mt-5 slide-left visible'>
                                <h1>Easy Communication</h1>
                                <div className='img-responsive'>
                                    <img src={product4} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>KlinicQ system is an interactive appointment scheduling software that offers bi-directional communication, connecting hospital doctors with patients.</p>
                                <p>KlinicQ clinical management system sends notification and appointment status updates through SMS text messages.</p>
                                <p>The KlinicQ application helps to set a reminder of critical appointment reminders for physicians, and automated reminders to patients on follow-up days will be sent through emails, including appointment details, promotional messages, and Health instructions for patient convenience.</p>
                            </div>
                            <div className='col-lg-6 col-12 text-center slide-right visible'>
                                <img src={product4} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-90' id='user_friendly'>
               
                    <div className='row m-0 pt-5' >
                        <div className='col-lg-6 col-12 text-center slide-left visible'>
                            <img src={product5} className='w-100' />
                        </div>
                        <div className='col-lg-6 col-12 mt-lg-0 mt-5 slide-right visible'>
                        <h1 >User Friendly Application</h1>
                            <p>The KlinicQ application can be accessed anywhere and anytime to view their consultation summary, vital details, health records and prescription details for up to 2 years from the day they start using the KlinicQ app.</p>
                            <p>The KlinicQ application calculates and provides BMI based on the vital details measured during check-in. Height, blood pressure, pulse, and weight are measured and can be viewed at any time.</p>
                            <p>The monitor connected to the Kiosk will display the queue list and status of each appointment, making it easier for the patients to check their turn.Traceability is easier with the KlinicQ application, as every visit has a unique appointment ID.</p>
                            <p>Patient’s appointment and token status are effortlessly notified when it is their turn through the mobile app, making the patients engage at every stage. Appointment status is displayed on TV in the waiting room.</p>
                            <p>The monitor connected to the Kiosk will display the queue list and status of each appointment, making it easier for the patients to check their turn.</p>
                            <p>Android and IOS mobile Apps are available for Patient, Doctor & Hospital modules with multi-language compatibility & supports English, Tamil, Kannada, Telugu & Hindi.</p>
                            <p>The KlinicQ app is an easy-to-use, automated, integrated solution between patients, physicians, and Hospitals. The KlinicQ application informs patients about their queue status & gives them peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-section' >
                    <div className='container-90' id="easy_communication" >
                        <div className='row m-0 flex-wrap-reverse'>
                            <div className='col-lg-6 col-12 mt-lg-5 mt-5 slide-left visible'>
                                <h1>Resource planning & Scheduling</h1>
                                <div className='img-responsive'>
                                    <img src={resourceplanning} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>The KlinicQ application's scheduling function helps to do resource planning and to manage hospitals/clinic and doctor's schedules effectively by day, week, and month to avoid overlapping & overbooking.</p>
                                <p>The KlinicQ application's appointment scheduling function helps to schedule for doctors based on their availability automatically.</p>
                            </div>
                            <div className='col-lg-6 col-12 text-center slide-right visible'>
                                <img src={resourceplanning} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container-90' id='user_friendly'>
               
               <div className='row m-0 pt-5 align-items-center' >
                   <div className='col-lg-6 col-12 text-center slide-left visible'>
                       <img src={billingimg} className='w-100' />
                   </div>
                   <div className='col-lg-6 col-12 mt-lg-0 mt-5 slide-right visible'>
                   <h1 >
                   Billing & Payments</h1>
                       <p>KlinicQ application supports patient billing, invoices of all consultancy services with details of Patient Information, Services provided like Room rent, Clinical supplies, Consultation, Nursing Charges, Laboratory tests, X-rays, Ultrasound, Medicines, procedures, and the tax percentage calculated based on the relevant services</p>
                       <p>The payment gateway service is integrated with KlinicQ, simplifying the customer payment process.</p>
                   </div>
               </div>
           </div>
           <div className='bg-section' >
                    <div className='container-90' id="easy_communication" >
                        <div className='row m-0 flex-wrap-reverse'>
                            <div className='col-lg-6 col-12 mt-lg-5 mt-5 slide-left visible'>
                                <h1>Data Analytics & KPI Reports</h1>
                                <div className='img-responsive'>
                                    <img src={product4} className='w-100 d-lg-none d-block' />
                                </div>
                                <p>KlinicQ application's analytical insights are incredibly effective and can be used to grow your business.</p>
                                <p>Our Clinical Management System has been designed with various KPI reports and trends based on average waiting times, consulting time, clinical records, pharmacy & laboratory records, etc., to do analysis and improve it.</p>
                                <p>KlinicQ applications analyze the real-time data of Patient visit trends based on locations, and these analytics insights features provide customers with habits who aren't showing up and who are returning.</p>
                            </div>
                            <div className='col-lg-6 col-12 text-center slide-right visible'>
                                <img src={dataanalytics} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container-90' id='user_friendly'>
               
               <div className='row m-0 pt-5' >
                   <div className='col-lg-6 col-12 text-center slide-left visible'>
                       <img src={AppointmentSche} className='w-100' />
                   </div>
                   <div className='col-lg-6 col-12 mt-lg-0 mt-5 slide-right visible'>
                   <h1 >
                   Appointment Scheduling</h1>
                      <p>The KlinicQ application supports any of these three types of appointment booking by the token management system, appointment management system, and teleconsultation.</p>
                      <p>The KlinicQ application supports booking an appointment through the online mobile application, phone, and walk-in options for our patients & a teleconsultation appointment (Video calling) option available for patients unable to visit the hospital.</p>
                      <p>The KlinicQ application allows to manage emergency appointments & grace period functions, which helps to adjust the appointment schedule automatically for patients who arrive late to the hospital.</p>
                      <p>The KlinicQ application supports quick and effective inpatient and outpatient appointment scheduling and automatically sends text and email reminders.</p>
                   </div>
               </div>
           </div>
           <div className='bg-section' >
                    <div className='container-90' id="easy_communication" >
                        <div className='row m-0 flex-wrap-reverse'>
                            <div className='col-lg-6 col-12 mt-lg-5 mt-5 slide-left visible'>
                                <h1>Kiosk integration capability</h1>
                                <div className='img-responsive'>
                                    <img src={Kiosk} className='w-100 d-lg-none d-block' />
                                </div>
                                <p class="text-justify">

Kiosks in the hospital waiting room allow customers to add themselves to a queue without staff assistance. On the touchscreen, patients can enter their phone number or scan the QR code to retrieve their appointment and the monitor connected to the Kiosk will display each appointment's queue list and status.</p>
<p class="text-justify">Patient's vital details can be measured at the Kiosk system. The vital blood pressure, pulse, height, weight, and BMI details can be automatically transferred to the KlinicQ app for the appointment visit. </p>
                            </div>
                            <div className='col-lg-6 col-12 text-center slide-right visible'>
                                <img src={Kiosk} className='w-100 d-lg-block d-none' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container-90' id='user_friendly'>
               
               <div className='row m-0 pt-5 align-items-center' >
                   <div className='col-lg-6 col-12 text-center slide-left visible'>
                       <img src={privacy} className='w-100' />
                   </div>
                   <div className='col-lg-6 col-12 mt-lg-0 mt-5 slide-right visible'>
                   <h1 >Privacy & Security</h1>
                   <p class="text-justify">KlinicQ application is designed per HIPAA (Health Insurance Portability and Accountability Act) rules. Personal identification information (PII) and protected health information (PHI) records are securely encrypted &amp; are safe and not for sale to any third parties.

</p>
<p class="text-justify">KlinicQ Clinical Management System role-based security is assigned to the doctors, hospitals, and patients to provide relevant authorization to control access. Privacy &amp; security are our number one priority, and we ensure that no selling of personal data.</p>
                   </div>
               </div>
           </div>
            </section>
            <Topmove />
            <Footer />
        </div>
    )
}

export default Product