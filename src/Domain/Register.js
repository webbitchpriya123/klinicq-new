import React from 'react'


// image path 
import logo from '../Common/assets/image/logo.webp'
import loginfront from '../Common/assets/image/logo-img.png'


import '../Common/assets/css/auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faEnvelope, faFilter, faGlobe, faLock, faMailBulk, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

function Register() {


    const navigate = useNavigate();

    const singnup = () => {
        navigate('register')
    }

    const login = () => {
        navigate('/login')
    }

    const userRegister = () => {
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className='login-section'>
                <div className='container-fuild'>
                    <div className='row m-0 justify-content-center'>
                        <div className='col-lg-10 col-12'>
                            <div className='row gx-0'>
                                <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                                    <div className='login-left form-wrapper'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <img src={logo} className='loginLogo'/>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4 className='text-end click-btn' onClick={singnup}>Sign Up</h4>
                                                    </div>
                                                </div>
                                                <form class="row g-3 mt-4">
                                                    <div className='row gy-3'>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div class='full-input px-2 col-11'>
                                                                <div className='row align-items-center'>
                                                                  
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faUser} style={{ color: '#7B7E80' }} />
                                                                        <input type='text' placeholder='Name' className='form-control p-1 ' />
                                                                    </div>
                                                              
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div className='full-input col-11 px-2'>
                                                                <div className='row align-items-center'>
                                                                    
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faBox} style={{ color: '#7B7E80' }} />
                                                                        <select className="form-select p-1 " aria-label="Default select example">
                                                                            <option selected>Hospital</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </div>
                                                             
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div class='full-input px-2 col-11'>
                                                                <div className='row align-items-center'>
                                                                  
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#7B7E80' }} />
                                                                        <input type='email' placeholder='Email Address' className='form-control p-1 ' />
                                                                    </div>
                                                            
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div className='full-input col-11 px-2'>
                                                                <div className='row align-items-center'>
                                                                
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faBox} style={{ color: '#7B7E80' }} />
                                                                        <input type='text' placeholder='Business  Name' className='form-control p-1 ' />
                                                                    </div>
                                                               
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div class='full-input px-2 col-11'>
                                                                <div className='row align-items-center'>
                                                                 
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#7B7E80' }} />
                                                                        <input type='text' placeholder='Mobil no' className='form-control p-1 ' />
                                                                    </div>
                                                                  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div className='full-input col-11 px-2'>
                                                                <div className='row align-items-center'>
                                                                 
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faGlobe} style={{ color: '#7B7E80' }} />
                                                                        <input type='text' placeholder='Country' className='form-control p-1 ' />
                                                                    </div>
                                                                   
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div class='full-input px-2 col-11'>
                                                                <div className='row align-items-center'>
                                                                  
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faLock} style={{ color: '#7B7E80' }} />
                                                                        <input type='passowrd' placeholder='Password' className='form-control p-1 ' />
                                                                    </div>
                                                                   
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-12 p-0'>
                                                            <div className='full-input col-11 px-2'>
                                                                <div className='row align-items-center'>
                                                                  
                                                                    <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faSearch} style={{ color: '#7B7E80' }} />
                                                                        <input type='text' placeholder='Address' className='form-control p-1 ' />
                                                                    </div>
                                                            
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-12 p-0'>
                                                            <div class="form-check remember">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    I agree to our terms and conditions and privacy policies
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col-12 p-0 mt-3'>
                                                            <div class="form-check remember">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Receive relevant offers and promotional communication from Nucleo
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row gy-2 align-items-center'>
                                                        <div class="col-lg-7 col-md-7 col-12">
                                                            <button type="button" className="mt-0" onClick={userRegister}>Register</button>
                                                        </div>
                                                        <div className='col-lg-5 col-md-5 col-12'>
                                                            <span className='new-account'>Don’t have an account? </span>
                                                            <span className='forget click-btn' onClick={login}>Login</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-lg-block d-none text-center'>
                                    <div className='login-right'>
                                        <img src={loginfront} className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register