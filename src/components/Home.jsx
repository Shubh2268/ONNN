import React from 'react';
import homeImg from '../assets/home.jpg';
import GreenButton from './GreenButton';

const Home = () => {
    return (
        <div name='home' className='flex flex-col justify-between items-center w-full h-fit md:h-screen py-10 bg-gray-900 text-white text-center md:text-left'>

            <div className='grid md:grid-cols-2 max-w-screen-xl m-auto px-3'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-10'>

                    <p className='text-lg lg:text-2xl text-gray-400'>Cheapest Hosting on the Earth</p>

                    <h1 className='pt-1 pb-6 text-4xl lg:text-7xl font-bold'>
                        <span className='text-lightColor'>ONNN</span> Web Services
                    </h1>

                    <p className='text-sm sm:text-base text-gray-400'>Explore cushions he with fowl was nodded, merely suddenly thee bore nevermore. My bust sitting the ease of the will.</p>

                    <GreenButton title='sign up' className='capitalize font-medium py-3 px-6 sm:w-8/12 my-8' />

                </div>

                <div className='flex items-center justify-center'>
                    <img src={homeImg} alt='homeImage' className='w-3/4 rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Home;
