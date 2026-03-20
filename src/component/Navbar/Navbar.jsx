import React, { useState } from 'react';
import Link from './Link';
import { Menu, SquareX } from 'lucide-react';
// Navigation items API response simulation
const NavigationData = [
  { id: 1, label: "Home", path: "/home" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Blog", path: "/blog" },
  { id: 4, label: "Services", path: "/services" },
  { id: 5, label: "Contact", path: "/contact" }
];


const Navbar = () => {
  
  // troggle setup of menu
  const  [open, setOpen] = useState(false);
  const  Links = NavigationData.map(route => <Link key={route.id} route={route} ></Link>)       


  return (


    <nav className='flex justify-between px-10 mt-5 py-5 items-center'>    
          
          {/* small device close and open menu set up */}
          <div className='flex  justify-center text-center items-center'>
                     
                     <span onClick={ () =>setOpen(!open) }>
                       { open ?  <SquareX className='flex md:hidden text-2xl' ></SquareX>:< Menu className='flex md:hidden text-2xl'></Menu> }
                     </span>
                    
                    <ul className= {`flex md:hidden flex-col justify-center items-center
                       absolute left-1/3 duration-1000 ${ open ? 'top-35' : '-top-96'}
                       `}>
                          {Links}
                    </ul>

                   <h2 className= 'hidden md:flex text-green-400 font-bold text-3xl text-nowrap'>GM-Mostofa-</h2>



          </div>
       
       <ul className='hidden md:flex justify-center items-center flex-1'>

           {   
                 Links
           }

       </ul>

       <div >
            <button className='btn btn-primary px-5 py-3 text-2xl bg-red-600 hover:bg-red-900
             text-black font-semibold text-nowrap'>Sing In</button>
           </div>

    </nav>


  );
};

export default Navbar;


