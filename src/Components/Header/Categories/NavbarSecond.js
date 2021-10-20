import React from 'react'
import './category.css'

import DropdownComponent from "./Dropdown";


function NavbarSecond() {
    return (
        <>
             
      <div className="second_nav">
        <DropdownComponent />
        <ul className="secondnav_list">
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Mobile Phones</li>
          <li>For Sale: Houses & Apartments</li>
          <li>Scooter</li>
          <li>Commercial & Other Vehicles</li>
          <li>For Rent: Houses & Apartments</li>
        </ul>
      </div>

      
        </>
    )
}

export default NavbarSecond
