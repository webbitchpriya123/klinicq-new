import React from 'react'


// image path 
// import loginfront from '../Common/assets/image/login-front.png'
import logo from '../Common/assets/image/logo.webp'
import loginfront from '../Common/assets/image/logo-img.png'


import '../Common/assets/css/auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

function Login() {

    const navigate = useNavigate();

    const createUser = () => {
        navigate('/register')
    }

    const userLogin = () => {
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className='d-lg-block d-none'>
                <div className='login-section'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-10'>
                                <div className='row gx-0'>
                                    <div className='col-lg-8 col-12'>
                                        <div className='login-left form-wrapper'>
                                            <div className='row justify-content-center'>
                                                <div className='col-8'>
                                                    <img src={logo} className='loginLogo'/>
                                                    <h4>Login in to your account</h4>
                                                    <p>Welcome back! Select method to login.</p>
                                                    <form class="row g-3">
                                                        <div class='full-input col-12'>
                                                            <div className='row align-items-center'>
                                                              
                                                                <div className='col-12'>
                                                                    <div className='form-group has-error has-danger'>
                                                                    <FontAwesomeIcon icon={faUser} />
                                                                    <input type='email' placeholder='Email Address' className='form-control p-1 ' />
                                                                    </div>
                                                              
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='full-input col-12'>
                                                            <div className='row align-items-center'>
                                                           
                                                                <div className='col-12'>
                                                                <div className='form-group has-error has-danger'>
                                                                <FontAwesomeIcon icon={faLock} />
                                                                    <input type='password' placeholder='Password' className='form-control p-1 ' />
                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className='col-6 p-0'>
                                                                <div class="form-check remember">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Remember me
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 text-end p-0'>
                                                                <label className='forget'>Forgot Password ?</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button type="button" className="" onClick={userLogin}>Login</button>
                                                        </div>
                                                        <div className='text-center'>
                                                            <span className='new-account'>Don’t have an account? </span>
                                                            <span className='forget click-btn' onClick={createUser}>Create an account</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-12 text-center'>
                                        <div className='login-right'>
                                            <img src={loginfront} className='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-lg-none d-block'>
                <div className='login-section'>
                    <div className='container-fuild'>
                        <div className='row m-0 justify-content-center'>
                            <div className='col-11'>
                                <div className='row gx-0'>
                                    <div className='col-12'>
                                        <div className='login-left form-wrapper'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <img src={logo} />
                                                    <h4>Login in to your account</h4>
                                                    <p>Welcome back! Select method to login.</p>
                                                    <form class="row g-3">
                                                        <div class='full-input col-12'>
                                                            <div className='row align-items-center'>
                                                             
                                                                <div className='col-12'>
                                                                <div className='form-group has-error has-danger'>
                                                                <FontAwesomeIcon icon={faUser} />
                                                                    <input type='email' placeholder='Email Address' className='form-control p-1 ' />
                                                                </div>
                                                       
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='full-input col-12'>
                                                            <div className='row align-items-center'>
                                                              
                                                                <div className='col-12'>
                                                                <div className='form-group has-error has-danger'>
                                                                <FontAwesomeIcon icon={faLock} />
                                                                    <input type='password' placeholder='Password' className='form-control p-1 ' />
                                                                </div>
                                                          
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className='col-md-6 col-sm-6 col-12 p-0'>
                                                                <div class="form-check remember">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Remember me
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6 col-sm-6 col-12 mt-md-0 mt-sm-0 mt-2 text-md-end text-sm-end text-start p-0'>
                                                                <label className='forget'>Forgot Password ?</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button type="button" className="" onClick={userLogin}>Login</button>
                                                        </div>
                                                        <div className='text-center'>
                                                            <span className='new-account'>Don’t have an account? </span>
                                                            <span className='forget click-btn' onClick={createUser}>Create an account</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Login