import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './assets/Pricing/PricingOption'
import { SquareX } from 'lucide-react';
     
const pricingPromise = fetch("pricingData.json")
.then(res => res.json());




function App() {

  return (

    <>
            <header className='px-10'>
                   <Navbar> </Navbar>
            </header>
   

        
            <main className={`mx-10 `} >

                     <Suspense fallback = {<span  className ="loading loading-spinner text-secondary"></span>}>  

                       <PricingOption pricingPromise = {pricingPromise} >

                       </PricingOption>

                     </Suspense>
                   
            </main>



            <footer>

            </footer>

    </>

  )
}

export default App
