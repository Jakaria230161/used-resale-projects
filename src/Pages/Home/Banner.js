import React from 'react';
import banner_pc from '../../assets/banner_pc.png'
import PrimaryButton from '../../components/PrimaryButton';

const Banner = () => {
    return (
        // style={{ backgroundImage: `url(${bg})` }}
        <div>
            <div className="hero mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://sathya.in/media/3420/catalog/mobiles.jpg' className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Go On, Get Your Cell Phones Out.!</h1>
                        <p className="py-6">Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;