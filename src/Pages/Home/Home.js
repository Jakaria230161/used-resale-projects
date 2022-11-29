import React from 'react';
import Banner from './Banner';
import Testimonial from './ClientsReviews/Testimonial';
import Categories from './Categories/Categories';
import AdvertiseProduct from './AdvertiseProduct/AdvertiseProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertiseProduct></AdvertiseProduct>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;