import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/image/logo.webp';
import '../assets/css/auth.css'
import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft, faBars, faChevronDown, faRightLeft, faXmark, faPlus, faMinus, faClose } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const { isClass1Show } = useSelector((state) => state.klinical)
    const [isSticky, setIsSticky] = useState(false);
    const [isAboutView, setIsAboutView] = useState(false);
    const [isProductView, setIsProductView] = useState(false);
    const [isBenifitView, setIsBenifitView] = useState(false);
    const [isContactView, setIsContactView] = useState(false);

    const [isSolutionView, setIsSolutionView] = useState(false);
    const [isSolutionClinical, setIsSolutionClinical] = useState(false);
    const [isSolutionAppointment,setIsSolutionAppointment] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;
    const navButton = () => {
        if (isClass1Show == false) {
            dispatch(setClass1Hide(true))
        } else {
            dispatch(setClass1Hide(false))
        }
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const toggleDropdownAbout = () => {
        setIsExpanded(!isExpanded);
        setIsAboutView(!isAboutView)
    };
    const toggleDropdownProduct = () => {
        setIsExpanded(!isExpanded);
        setIsProductView(!isProductView)
    };
    const toggleDropdownBenifit = () => {
        setIsExpanded(!isExpanded);
        setIsBenifitView(!isBenifitView)
    };
    const toggleDropdownContact = () => {
        setIsExpanded(!isExpanded);
        setIsContactView(!isContactView)
    };
    const toggleDropdownSolution = (event) => {
        event.preventDefault();
        setIsSolutionView(!isSolutionView);
    };
    const toggleDropdownClinical = () => {
        setIsSolutionClinical(!isSolutionClinical);
    };
    const toggleDropdownAppointment = () => {
        setIsSolutionAppointment(!isSolutionAppointment);
    }

    const userAuth = () => {
        navigate('/login')
    }
    const bookademo = () =>{
        navigate('/bookusappointemnt')
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header-section'>
            <header className={isSticky ? 'sticky-element' : 'nav-element'}>
                <div className='nav-section'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid container-95">
                            <div className='d-flex'>
                                <a className="navbar-brand klinic-logo" href="/">
                                    <img src={logo} alt="Sahyatri-Matrimony-Logo" className='nav-logo' />
                                </a>
                            </div>
                            <div className='d-lg-none d-block'>
                                <div className='d-flex'>
                                    {showMenu ?
                                        <>
                                            <div className='col-6 align-self-center text-end'>
                                                <span className="" onClick={toggleMenu}><FontAwesomeIcon icon={faClose} style={{ color: '#000', fontSize: '20px' }} /></span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='col-6 align-self-center text-end'>
                                                <span className="" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} style={{ color: '#000', fontSize: '20px' }} /></span>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>

                            {showMenu ?
                                <>
                                    <div className={`offcanvas offcanvas-start mobile-view ${showMenu ? 'show overflow-auto' : 'collapse navbar-collapse nav-list'}`} id="navbarNavDropdown">
                                        <div className={`offcanvas offcanvas-start ${showMenu ? 'show overflow-auto' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                            <div className="offcanvas-header">
                                                <img src={logo} />
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>
                                            </div>
                                            <div className="offcanvas-body position-sticky">
                                                <ul className="navbar-nav py-2 nav-content">
                                                    <li className="nav-item dropdown mega-menu-li">
                                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isAboutView} onClick={toggleDropdownAbout}>
                                                            About Us {isAboutView ? <><FontAwesomeIcon icon={faMinus} style={{ color: "#000", }} className='ps-2' /></> : <><FontAwesomeIcon icon={faPlus} style={{ color: "#000", }} className='ps-2' /></>}
                                                        </a>
                                                        <div class={`dropdown-menu drop-width w-100 ${isAboutView ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                            <div class="container-fluid">
                                                                <div class="row m-0">
                                                                    <>
                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                            <div className="list-group list-group-flush">
                                                                                <ul className="ps-0">
                                                                                    <li className='nav-item mb-1'>
                                                                                        <NavLink exact to={{ pathname: '/about', hash: '#our_vision' }} className={`${location.hash === '#our_vision' ? '' : 'dropmenu'} text-decoration-none`}>
                                                                                            Vision & Mission
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item mb-1'>
                                                                                        <NavLink exact to={{ pathname: '/about', hash: '#company_profile' }} className={`${location.hash === '#company_profile' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Company profile
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item mb-1'>
                                                                                        <NavLink exact to={{ pathname: '/about', hash: '#about_product' }} className={`${location.hash === '#about_product' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            About Product
                                                                                        </NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown mega-menu-li">
                                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isProductView} onClick={toggleDropdownProduct}>
                                                            Product Feature {isProductView ? <><FontAwesomeIcon icon={faMinus} style={{ color: "#000", }} className='ps-2' /></> : <><FontAwesomeIcon icon={faPlus} style={{ color: "#000", }} className='ps-2' /></>}
                                                        </a>
                                                        <div class={`dropdown-menu drop-width w-100 ${isProductView ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                            <div class="container-fluid">
                                                                <div class="row m-0">
                                                                    <>
                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                            <div className="list-group list-group-flush">
                                                                                <ul className="ps-0">
                                                                                    <li className='nav-item mb-2'>
                                                                                        <NavLink exact to={{ pathname: '/product' }} className={`${pathname === '/product' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Electronic Medical Records
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/product', hash: '#integrated_solution' }} className={`${location.hash === '#integrated_solution' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Integrated Solution
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/product', hash: "#no_expensive_hardware" }} className={`${location.hash === '#no_expensive_hardware' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            No expensive Hardware
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/product', hash: '#easy_communication' }} className={`${location.hash == '#easy_communicationss' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Easy Communication
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/product', hash: '#user_friendly' }} className={`${location.hash === '#user_friendly' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            User Friendly application
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: '#privacy_security' }} className={`${location.hash === '#privacy_security' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Privacy & Security
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: 'resource_planning' }} className={`${location.hash === '#resource_planning' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Resource planning
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: 'billing_payment' }} className={`${location.hash === '#billing_payment' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Billing and Payment
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: 'data_analytics' }} className={`${location.hash === '#data_analytics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Data Analytics
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: 'appointment_scheduling' }} className={`${location.hash === '#appointment_scheduling' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Appointment Scheduling
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/feature', hash: 'kisok_integration' }} className={`${location.hash === '#kisok_integration' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Kisok Integration
                                                                                        </NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown mega-menu-li">
                                                        <a
                                                            className="nav-link dropdown-toggle option-list"
                                                            href="#"
                                                            role="button"
                                                            id="dropdownMenuLink"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded={isSolutionView}
                                                            onClick={toggleDropdownSolution}
                                                        >
                                                            Solutions
                                                            {isSolutionView ? (
                                                                <FontAwesomeIcon icon={faMinus} style={{ color: '#000' }} className="ps-2" />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faPlus} style={{ color: '#000' }} className="ps-2" />
                                                            )}
                                                        </a>

                                                        <div className={`dropdown-menu drop-width w-100 ${isSolutionView ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                            <div className="container-fluid">
                                                                <div className="row m-0">
                                                                    <>
                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                            <div className="list-group list-group-flush">
                                                                                <ul className="ps-0 ">
                                                                                    <li className="nav-item dropdown-submenu mb-2 px-0">
                                                                                        <a
                                                                                            className="nav-link dropdown-toggle option-list"
                                                                                            href="#"
                                                                                            role="button"
                                                                                            id="dropdownMenuLink"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded={isSolutionClinical}
                                                                                            onClick={(e) => {
                                                                                                e.stopPropagation();
                                                                                                toggleDropdownClinical();
                                                                                            }}
                                                                                        >
                                                                                            Clinical Management System
                                                                                            {isSolutionClinical ? (
                                                                                                <FontAwesomeIcon icon={faMinus} style={{ color: '#000' }} className="ps-2" />
                                                                                            ) : (
                                                                                                <FontAwesomeIcon icon={faPlus} style={{ color: '#000' }} className="ps-2" />
                                                                                            )}
                                                                                        </a>

                                                                                        <div className={`dropdown-menu drop-width w-100 ${isSolutionClinical ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                                                            <div className="container-fluid">
                                                                                                <div className="row m-0">
                                                                                                    <>
                                                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                                                            <div className="list-group list-group-flush">
                                                                                                                <ul className="ps-0">
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/hospitals', hash: 'hospitals_clinics' }} className={`${location.hash === '#hospitals_clinics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            For Hospitals / Clinics
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/hospitals', hash: 'for_physicians' }} className={`${location.hash === '#for_physicians' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            For Physicians
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/hospitals', hash: 'for_patients' }} className={`${location.hash === '#for_patients' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            For Patients
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="nav-item dropdown-submenu mb-2 px-0">
                                                                                        <a
                                                                                            className="nav-link dropdown-toggle option-list"
                                                                                            href="#"
                                                                                            role="button"
                                                                                            id="dropdownMenuLink"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded={isSolutionClinical}
                                                                                            onClick={(e) => {
                                                                                                e.stopPropagation();
                                                                                                toggleDropdownAppointment();
                                                                                            }}
                                                                                        >
                                                                                            Appointment Management System
                                                                                            {isSolutionAppointment ? (
                                                                                                <FontAwesomeIcon icon={faMinus} style={{ color: '#000' }} className="ps-2" />
                                                                                            ) : (
                                                                                                <FontAwesomeIcon icon={faPlus} style={{ color: '#000' }} className="ps-2" />
                                                                                            )}
                                                                                        </a>

                                                                                        <div className={`dropdown-menu drop-width w-100 ${isSolutionAppointment ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                                                            <div className="container-fluid">
                                                                                                <div className="row m-0">
                                                                                                    <>
                                                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                                                            <div className="list-group list-group-flush">
                                                                                                                <ul className="ps-0">
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/appointment', hash: 'token_system' }} className={`${location.hash === '#token_system' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            Token System
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/appointment', hash: 'appointment_schedule' }} className={`${location.hash === '#appointment_schedule' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            Appointment Schedule System
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/appointment', hash: 'tele_consultaion' }} className={`${location.hash === '#tele_consultaion' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            Tele consultaion
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                    <li className='nav-item'>
                                                                                                                        <NavLink exact to={{ pathname: '/appointment', hash: 'outpatient_management' }} className={`${location.hash === '#outpatient_management' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                                                            In/ Out-patient management
                                                                                                                        </NavLink>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown mega-menu-li">
                                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isBenifitView} onClick={toggleDropdownBenifit}>
                                                            Benefits {isBenifitView ? <><FontAwesomeIcon icon={faMinus} style={{ color: "#000", }} className='ps-2' /></> : <><FontAwesomeIcon icon={faPlus} style={{ color: "#000", }} className='ps-2' /></>}
                                                        </a>
                                                        <div class={`dropdown-menu drop-width w-100 ${isBenifitView ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                            <div class="container-fluid">
                                                                <div class="row m-0">
                                                                    <>
                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                            <div className="list-group list-group-flush">
                                                                                <ul className="ps-0">
                                                                                    <li className='nav-item mb-2'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'increase_revenue' }} className={`${location.hash === '#increase_revenue' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Increase revenue
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'increase_productivity' }} className={`${location.hash === '#increase_productivity' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Increase productivity
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'increase_servicequality' }} className={`${location.hash === '#increase_servicequality' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Increase Service Quality
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'improve_patientsatisfaction' }} className={`${location.hash === '#improve_patientsatisfaction' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Improve patient satisfaction
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'no_waitingroom' }} className={`${location.hash === '#no_waitingroom' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            No wait at waiting room
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'improve_datasecurity' }} className={`${location.hash === '#improve_datasecurity' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Improve data Security
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'improve_dataanalytics' }} className={`${location.hash === '#improve_dataanalytics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Improve data analytics
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/benefits', hash: 'improve_sustainablility' }} className={`${location.hash === '#improve_sustainablility' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Improve sustainablility
                                                                                        </NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown mega-menu-li">
                                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isContactView} onClick={toggleDropdownContact}>
                                                            Contact {isContactView ? <><FontAwesomeIcon icon={faMinus} style={{ color: "#000", }} className='ps-2' /></> : <><FontAwesomeIcon icon={faPlus} style={{ color: "#000", }} className='ps-2' /></>}
                                                        </a>
                                                        <div class={`dropdown-menu drop-width w-100 ${isContactView ? 'show' : ''}`} aria-labelledby="dropdownMenuLink">
                                                            <div class="container-fluid">
                                                                <div class="row m-0">
                                                                    <>
                                                                        <div className="col-12 mb-3 mb-lg-0">
                                                                            <div className="list-group list-group-flush">
                                                                                <ul className="ps-0">
                                                                                    <li className='nav-item mb-2'>
                                                                                        <NavLink exact to={{ pathname: '/bookusappointemnt', hash: 'free_demo' }} className={`${location.hash === '#free_demo' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Free Demo
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/testimonials', hash: 'testimonials' }} className={`${location.hash === '#testimonials' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Testimonials
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/contact', hash: 'careers' }} className={`${location.hash === '#careers' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Careers
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/contact', hash: 'franchise' }} className={`${location.hash === '#franchise' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Franchise
                                                                                        </NavLink>
                                                                                    </li>
                                                                                    <li className='nav-item'>
                                                                                        <NavLink exact to={{ pathname: '/contact', hash: 'contact_us' }} className={`${location.hash === '#contact_us' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                                            Contact Us
                                                                                        </NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className='book-btn m-2 d-flex'>
                                                    <button className='p-3' onClick={bookademo}>Book a Demo</button>
                                                    <div className='book-btn mx-2'>
                                                        <button type='button' className='p-3' onClick={userAuth}>Login / Signup</button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </> :
                                <>

                                </>
                            }
                            <div className="collapse navbar-collapse d-lg-block d-none" id="navbarNavAltMarkup">
                                <div className={`${isClass1Show == true ? 'nav-show' : ''} collapse navbar-collapse navbarNav justify-content-end mr-3 navlist`} id="navbarSupportedContent">
                                    <ul className="navbar-nav width-navbar">

                                        <li className="nav-item dropdown">
                                            {/* <a className='dropdown-toggle option-list text-decoration-none custom-active' exact to={{ pathname: '/about' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                About us
                                            </a> */}
                                             <NavLink exact to={{ pathname: '/about' }} className={`${location.hash === '#our_vision' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                             About us
                                                    </NavLink>
                                            {/* <ul className="dropdown-menu ">
                                                <li className='nav-item mb-1'>
                                                    <NavLink exact to={{ pathname: '/about', hash: '#our_vision' }} className={`${location.hash === '#our_vision' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Vision & Mission
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item mb-1'>
                                                    <NavLink exact to={{ pathname: '/about', hash: '#company_profile' }} className={`${location.hash === '#company_profile' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Company profile
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item mb-1'>
                                                    <NavLink exact to={{ pathname: '/about', hash: '#about_product' }} className={`${location.hash === '#about_product' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        About Product
                                                    </NavLink>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className='dropdown-toggle option-list text-decoration-none custom-active' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Solutions
                                            </a>
                                            <ul className="dropdown-menu ">
                                                <li className='nav-item dropdown-submenu mb-2'>
                                                    <NavLink exact to={{ pathname: '/hospitals' }} className={`${pathname === '/doctor' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        E-Clinical Management
                                                        <span><FontAwesomeIcon icon={faArrowRight} className='mx-2'/></span>
                                                    </NavLink>
                                                    <ul className='dropdown-menu'>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/hospitals' }} className={`${location.hash === '#hospitals_clinics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                            Hospital Management System
                                                            </NavLink>
                                                        </li>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/doctor' }} className={`${location.hash === '#for_physicians' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                            Doctor Management System
                                                            </NavLink>
                                                        </li>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/patients' }} className={`${location.hash === '#for_patients' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                            Patients Management System
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='nav-item dropdown-submenu'>
                                                    <NavLink exact to={{ pathname: '/appointment' }} className={`${pathname === '/appointment' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Appointment Management System
                                                      
                                                    </NavLink>
                                                    {/* <ul className='dropdown-menu'>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/appointment', hash: 'token_system' }} className={`${location.hash === '#token_system' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                Token System
                                                            </NavLink>
                                                        </li>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/appointment', hash: 'appointment_schedule' }} className={`${location.hash === '#appointment_schedule' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                Appointment Schedule System
                                                            </NavLink>
                                                        </li>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/appointment', hash: 'tele_consultaion' }} className={`${location.hash === '#tele_consultaion' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                Tele consultaion
                                                            </NavLink>
                                                        </li>
                                                        <li className='nav-item'>
                                                            <NavLink exact to={{ pathname: '/appointment', hash: 'outpatient_management' }} className={`${location.hash === '#outpatient_management' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                                In/ Out-patient management
                                                            </NavLink>
                                                        </li>
                                                    </ul> */}
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            {/* <a className='dropdown-toggle option-list text-decoration-none custom-active' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Product Feature
                                            </a> */}
                                            <NavLink exact to={{ pathname: '/product' }} className={`${pathname === '/product' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                            Product Feature
                                                    </NavLink>
                                            {/* <ul className="dropdown-menu  ">
                                                <li className='nav-item mb-2'>
                                                    <NavLink exact to={{ pathname: '/product' }} className={`${pathname === '/product' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Electronic Medical Records
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/product', hash: '#integrated_solution' }} className={`${location.hash === '#integrated_solution' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Integrated Solution
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/product', hash: "#no_expensive_hardware" }} className={`${location.hash === '#no_expensive_hardware' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        No expensive Hardware
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/product', hash: '#easy_communication' }} className={`${location.hash == '#easy_communicationss' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Easy Communication
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/product', hash: '#user_friendly' }} className={`${location.hash === '#user_friendly' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        User Friendly application
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: '#privacy_security' }} className={`${location.hash === '#privacy_security' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Privacy & Security
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: 'resource_planning' }} className={`${location.hash === '#resource_planning' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Resource planning
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: 'billing_payment' }} className={`${location.hash === '#billing_payment' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Billing and Payment
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: 'data_analytics' }} className={`${location.hash === '#data_analytics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Data Analytics
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: 'appointment_scheduling' }} className={`${location.hash === '#appointment_scheduling' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Appointment Scheduling
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/feature', hash: 'kisok_integration' }} className={`${location.hash === '#kisok_integration' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Kisok Integration
                                                    </NavLink>
                                                </li>
                                            </ul> */}
                                        </li>
                                     
                                        <li className="nav-item dropdown">
                                            {/* <a className='dropdown-toggle option-list text-decoration-none custom-active' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Benefits
                                            </a> */}
                                            <NavLink exact to={{ pathname: '/benefits',  }} className={`${location.hash === '#increase_revenue' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                            Benefits
                                                    </NavLink>
                                            {/* <ul className="dropdown-menu">
                                                <li className='nav-item mb-2'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'increase_revenue' }} className={`${location.hash === '#increase_revenue' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Increase revenue
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'increase_productivity' }} className={`${location.hash === '#increase_productivity' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Increase productivity
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'increase_servicequality' }} className={`${location.hash === '#increase_servicequality' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Increase Service Quality
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'improve_patientsatisfaction' }} className={`${location.hash === '#improve_patientsatisfaction' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Improve patient satisfaction
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'no_waitingroom' }} className={`${location.hash === '#no_waitingroom' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        No wait at waiting room
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'improve_datasecurity' }} className={`${location.hash === '#improve_datasecurity' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Improve data Security
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'improve_dataanalytics' }} className={`${location.hash === '#improve_dataanalytics' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Improve data analytics
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits', hash: 'improve_sustainablility' }} className={`${location.hash === '#improve_sustainablility' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Improve sustainablility
                                                    </NavLink>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className='dropdown-toggle option-list text-decoration-none custom-active' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Contact
                                            </a>
                                            <ul className="dropdown-menu ">
                                                <li className='nav-item mb-2'>
                                                    <NavLink exact to={{ pathname: '/bookusappointemnt', hash: 'free_demo' }} className={`${location.hash === '#free_demo' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Free Demo
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/testimonials', hash: 'testimonials' }} className={`${location.hash === '#testimonials' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Testimonials
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/contact', hash: 'careers' }} className={`${location.hash === '#careers' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Careers
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/contact', hash: 'franchise' }} className={`${location.hash === '#franchise' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Franchise
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/contact', hash: 'contact_us' }} className={`${location.hash === '#contact_us' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Contact Us
                                                    </NavLink>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className=''>
                                    <button className='btn-ghost' onClick={bookademo}>Book a Demo</button>
                                </div>
                                <div className=' mx-2'>
                                    <button className='btn-ghost' type='button' onClick={userAuth}>Login / Signup</button>
                                </div>
                            </div>

                        </div>

                    </nav>

                </div>
            </header>

        </div>
    )
}

export default Header