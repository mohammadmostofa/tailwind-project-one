import React from 'react';
import PricinFeature from './PricinFeature';

const PricingCards = ({pricing}) => {
const {name,price,duration,features}= pricing;
  return (

    <div className=' bg-green-700 px-10 py-15 rounded-xl'>

            <div className='mb-5'>
               <h2 className='text-5xl font-bold '>{name} </h2>
               <p className='text-3xl font-semibold mt-3'> {price} </p>
            </div>

            <div className='flex flex-col space-y-4 mb-6'>

                  <h4 className='font-bold capitalize '> {duration} </h4>
                  <h3 className='tracking-wider text-[18px] '> {features} </h3>

                  {/* feature map  */}

                  {
                    features.map((feature,index) => <PricinFeature
                      key={index}
                      feature = {feature} >  </PricinFeature>  )
                  }

            </div>

            <button className='btn w-full' >Subscribe</button>
                      
    </div> 

  );
};

export default PricingCards;