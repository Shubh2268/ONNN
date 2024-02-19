import React from 'react';

const GreenButton = ({ title, className }) => {
    return (
        <button className={'border bg-lightColor text-darkColor border-lightColor hover:bg-transparent hover:text-lightColor rounded-md duration-300 ease-out' + ' ' + className} >{title}
        </button>
    )
}

export default GreenButton;
