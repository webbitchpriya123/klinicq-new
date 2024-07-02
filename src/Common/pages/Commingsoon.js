import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function Commingsoon() {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    return (
        <div className='product-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Coming Soon</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Commingsoon