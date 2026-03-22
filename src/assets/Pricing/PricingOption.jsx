import React, { use } from 'react';
import PricingCards from '../PricingCard/PricingCards';
const PricingOption = ({pricingPromise}) => {
 const Data = use(pricingPromise)
 const pricingData = Data.pricingPlans;

  return (
    <div>
              <h2 className='text-2xl'>Get Our membership</h2>

              {/* card container */}
            <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4  my-5 '>

                    {
                       pricingData.map(pricing => <PricingCards
                       key={pricing.id}
                         pricing = {pricing} ></PricingCards>  )
                    }

            </div>

    </div>
  );
};

export default PricingOption;