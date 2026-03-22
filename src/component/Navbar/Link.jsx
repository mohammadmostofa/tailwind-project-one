import React from 'react';

const Link = ({route}) => {
  return ( 

    <li className=''><a className='text-2xl text-white hover:text-black  hover:bg-sky-50 md:mx-1  rounded-md font-medium px-6 py-3 hover:duration-400'
     href={route.path} > {route.label} </a></li>
    
    );
};

export default Link;