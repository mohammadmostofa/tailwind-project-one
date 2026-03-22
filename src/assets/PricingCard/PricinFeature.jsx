import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricinFeature = ({feature}) => {

  return (
    
            <p className='flex text-xl'>
              <CircleCheckBig></CircleCheckBig> <span className='ml-2'> {feature} </span>
            </p>

  );
};

export default PricinFeature;