import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../assets/css/main.css'

// image path 
import issue1 from '../assets/image/issue1.png'
import issue2 from '../assets/image/issue2.png'
import issue3 from '../assets/image/issue3.png'
import issue4 from '../assets/image/issue4.png'
import issue5 from '../assets/image/issue5.png'
import issue6 from '../assets/image/issue6.png'
import issue7 from '../assets/image/issue7.png'
import issue8 from '../assets/image/issue8.png'

const logos = [
    { 'image': issue1, 'name': 'Urinary Issues' },
    { 'image': issue2, 'name': 'Kidney Issues' },
    { 'image': issue3, 'name': 'Brain and Nerves' },
    { 'image': issue4, 'name': 'Heart' },
    { 'image': issue5, 'name': 'Dental Care' },
    { 'image': issue6, 'name': 'Ear Nose Throat' },
    { 'image': issue7, 'name': 'Digestive' },
    { 'image': issue8, 'name': 'Cancer' },
];


const LogoSlider = () => {
    const owlOptions = {
        items: 6,
        autoplay: true,
        autoplayTimeout: 1000,
        loop: true,
        margin: 10,
        responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 6,
            },
          },
    };
    
    return (
        <div>
            <OwlCarousel className="owl-theme" {...owlOptions}>
                {logos.map((logo, index) => (
                    <div className=''>
                        <div key={index} className='py-4 logo-slide text-center'>
                            <div className=' logo-image'>
                                <img src={logo.image} alt={logo.name} className='w-25 h-100' />
                            </div>
                            <h1 className='mt-3'>{logo.name}</h1>
                        </div>
                    </div>

                ))}

            </OwlCarousel>
        </div>
    );
};

export default LogoSlider;
