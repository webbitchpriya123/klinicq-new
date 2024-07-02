import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Domain/Home';
import Header from './Common/pages/Header';
import About from './Domain/About';
import Bookappointment from './Domain/Bookappointment';
import Contact from './Domain/Contact';
import Product from './Domain/Product';
import Feature from './Domain/Feature';
import Appointment from './Domain/Appointment';
import Benefits from './Domain/Benefits';
import Patients from './Domain/Patients';
import Hospitals from './Domain/Hospitals';
import Doctor from './Domain/Doctor';
import Commingsoon from './Common/pages/Commingsoon';
import Login from './Domain/Login';
import Register from './Domain/Register';

function App() {

  useEffect(() => {

    const handleScroll = () => {
      const cards = document.querySelectorAll('.slide-up, .slide-left, .slide-right');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter basename='/kliniqnew'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='bookusappointemnt' element={<Bookappointment />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<Product />} />
        <Route path='feature' element={<Feature />} />
        <Route path='appointment' element={<Appointment />} />
        <Route path='benefits' element={<Benefits />} />
        <Route path='patients' element={<Patients />} />
        <Route path='hospitals' element={<Hospitals />} />
        <Route path='doctor' element={<Doctor />} />
        <Route path='testimonials' element={<Commingsoon />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
