import React from 'react';

const Link = ({route}) => {
  return ( 

    <li className='mx-5'><a className='text-2xl hover:bg-[rgb(0,0,0)]  rounded-md font-medium px-6 py-3 hover:duration-700'
     href={route.path} > {route.label} </a></li>
    
    );
};

export default Link;