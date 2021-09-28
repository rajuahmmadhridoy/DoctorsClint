import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedServices />
            <Appoinment />
            <Testimonial />
            <Blog />
            <Doctor />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;