import React, { useState } from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3BottomLeft } from "react-icons/hi2";
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
    <div className='w-full h-15 z-20 fixed bg-gray-900 text-white'>

      <div className='px-3 flex items-center justify-between w-full h-full'>

        <div className='flex items-center'>
          <h1 className='text-3xl font-bold'>ONNN</h1>
        </div>

        <ul className='hidden sm:flex'>
          {
            links.map(({ id, link }) => (
              <li key={id} className='capitalize text-lg font-medium p-4 cursor-pointer text-gray-100 hover:text-lightColor duration-200'>
                <a>
                  {link}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='hidden sm:flex mr-4'>
          <GreenButton title='sign in' className='capitalize font-medium px-9 py-3' />
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
              <h2 onClick={() => setNavigation(false)} className='text-3xl font-bold capitalize cursor-pointer'>onnn</h2>
              <div className='p-3 cursor-pointer'>
                <LiaTimesSolid onClick={() => setNavigation(false)} size={25} />
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-col h-fit gap-12'>
            <GreenButton className='px-9 py-3 capitalize' title='sign in' />

            <ul className='capitalize'>
              {
                links.map(({ id, link }) => (
                  <li key={id} className='py-2 text-xl tracking-wide cursor-pointer'>
                    <a>
                      {link}
                    </a>
                  </li>
                ))
              }
            </ul>

            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
