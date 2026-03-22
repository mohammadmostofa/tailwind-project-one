import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './assets/Pricing/PricingOption'
import { SquareX } from 'lucide-react';
import ResultChart from './ResultChart/ResultChart';
import axios from 'axios';
import MarkChart from './component/MarksChart/MarkChart';
     
const pricingPromise = fetch("pricingData.json")
.then(res => res.json());


// marks data access by Axiox system

const marksPromise =  axios.get('/public/MarksDara.json')



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


                     {/* resultCharts */}

                     <ResultChart></ResultChart>


                     {/* marks chart import */}

                     <Suspense fallback = {<span className ="loading loading-ring loading-md"></span>
} >

                     <MarkChart marksPromise = {marksPromise} > </MarkChart>

                     </Suspense>
                   
            </main>



            <footer>

            </footer>

    </>

  )
}

export default App
