import React from 'react';
import banner_pc from '../../assets/banner_pc.png'
import PrimaryButton from '../../components/PrimaryButton';

const Banner = () => {
    return (
        // style={{ backgroundImage: `url(${bg})` }}
        <div>
            <div className="hero mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner_pc} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;