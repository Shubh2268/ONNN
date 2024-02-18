import React from 'react';

const Navbar = () => {

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
          <h1 className='text-4xl font-bold'>onnn</h1>
        </div>

        <ul className='flex'>
          {
            links.map(({ id, link }) => (
              <li key={id} className='capitalize text-lg p-4 cursor-pointer text-gray-200 hover:text-lightColor duration-200'>
                <a>
                  {link}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='flex mr-4'>
          <button type='btn' className='capitalize px-9 py-3'>Sign In</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
