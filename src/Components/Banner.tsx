import React from 'react';
import BannerImg from'../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto items-center'>
           <div className=''>
            <h1 className='text-5xl font-bold'>Build Your Ideal<br/>
<span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
            <p className='mt-6 mb-8 text-gray-500'>Explore frontend, backend, database, and tooling options,<br/>
compare them side by side, and put together the stack that fits your<br/>
next project.</p>
            <div className='flex gap-4'>
                <button className='bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded w-45 h-10'>Explore Techonologies</button>
                <button className='rounded border bg-white border-gray-200 w-45 h-10'>Learn More</button>
            </div>
            </div>

            <div>
                <img className='w-[400px]' src={BannerImg} alt="" />
                </div> 
        </div>
    );
};

export default Banner;