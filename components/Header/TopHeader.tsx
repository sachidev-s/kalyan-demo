import React from 'react'
import Offer from '../icons/Offer';
import Phone from '../icons/Phone';
import Location from '../icons/Location';

const TopHeader = () => {
  return (
    <div>
      <nav className="dark:bg-red-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6" style={{height:"40px",marginLeft:"1050px"}}>
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="#" className="dark:text-white flex flex-row"><Location/>Cochin</a>
                
                </li>
                <li >
                
                    <a href="#" className="dark:text-white flex flex-row"><Offer/>special offer </a>
                    
                </li>
                <li>
                    <a href="#" className="dark:text-white flex flex-row"><Phone/>1860 230 203</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>


    </div>
  )
}

export default TopHeader
