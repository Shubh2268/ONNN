import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import GreenButton from './GreenButton';

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'services'
    },
    {
      id: 3,
      link: 'about'
    },
    {
      id: 4,
      link: 'support'
    },
    {
      id: 5,
      link: 'pricing'
    }
  ];

  return (
    <div className='w-full z-20 fixed bg-gray-900 text-white'>

      <div className='px-5 flex items-center justify-between w-full h-full'>

        <div className='flex items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold py-2 sm:py-0'>ONNN</h1>
        </div>

        <ul className='hidden sm:flex'>
          {
            links.map(({ id, link }) => (
              <li key={id} className='text-lg font-medium sm:px-2 sm:py-4 lg:p-4 cursor-pointer uppercase text-gray-200 hover:text-lightColor duration-200'>
                <a>
                  {link}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='hidden sm:flex mr-4'>
          <GreenButton title='sign in' className='capitalize font-medium px-5 py-2' />
        </div>

        {/* burger icon */}
        <div className='sm:hidden'>
          <div className='cursor-pointer'>
            <HiBars3BottomLeft onClick={() => setNavigation(true)} size={25} />
          </div>
        </div>

      </div>

      {/* mobile menu  */}
      <div className={navigation ? 'sm:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' : ''}>
        <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2 onClick={() => setNavigation(false)} className='text-2xl font-bold capitalize cursor-pointer'>ONNN</h2>
              <div className='p-3 cursor-pointer'>
                <LiaTimesSolid onClick={() => setNavigation(false)} size={25} />
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-col h-fit gap-12'>
            <GreenButton className='px-6 py-2 capitalize' title='sign in' />

            <ul className='uppercase'>
              {
                links.map(({ id, link }) => (
                  <li key={id} className='py-2 text-lg text-center cursor-pointer hover:text-lightColor'>
                    <a>
                      {link}
                    </a>
                  </li>
                ))
              }
            </ul>

            <div className='grid grid-cols-2 mx-auto w-3/5 h-3/5 gap-10'>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                <FaFacebook size={25} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                <FaTwitter size={25} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                <FaLinkedinIn size={25} />
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer'>
                <FaGithub size={25} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
