import React from 'react'
import {Dropdown} from 'react-bootstrap'
import './category.css'

function DropdownComponent() {
    return (
        <>
              <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className='dropdown_btn'>
          ALL CATEGORIES
        </Dropdown.Toggle>

        <Dropdown.Menu className="mega_menu">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-sm-3">
                <h3 className="mega_headings">Properties</h3>
                <ul className="mega_lists">
                  <li>For Sale: Houses & Apartments</li>
                  <li>For Rent: Houses & Apartments</li>
                  <li>Lands & Plots</li>
                  <li>For Rent: Shops & Offices</li>
                  <li>For Sale: Shops & Offices</li>
                  <li>PG & Guest Houses</li>
                </ul>
              </div>
              <div className="col-sm-1">
                <h3 className="mega_headings">Cars</h3>
                <ul className="mega_lists">
                  <li>Cars</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3 className="mega_headings"> Pets</h3>
                <ul className="mega_lists">
                  <li>Fishes & Aquarium</li>
                  <li>Pet Food & Accessories</li>
                  <li>Dogs</li>
                  <li>Other pets</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3 className="mega_headings">Jobs</h3>
                <ul className="mega_lists">
                  <li>Data Entry & Back Office</li>
                  <li>Sales & Marketing</li>
                  <li>Driver</li>
                  <li>Office Assistant</li>
                  <li>Delivery & Collection</li>
                  <li>Teacher</li>
                  <li>Cook</li>
                  <li>Receptionist & front Office</li>
                  <li>Operator & Technician</li>
                  <li>IT Engineer & Developer</li>
                  <li>Hotel & Travel Executive</li>
                  <li>Accountant</li>
                  <li>Designer</li>
                  <li>Other Jobs</li>
                </ul>
              </div>
              <div className="col-sm-1">
                <h3 className="mega_headings">Fashion</h3>
                <ul className="mega_lists">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3 className="mega_headings">Furnitures</h3>
                <ul className="mega_lists">
                  <li>Sofa & Dining</li>
                  <li>Beds & Wardrobes</li>
                  <li>Home Decor & Garden</li>
                  <li>Kids & Furniture</li>
                  <li>Other Houshold Items</li>
                </ul>
              </div>
              <div className="col-sm-1">
                <h3 className="mega_headings">Mobiles</h3>
                <ul className="mega_lists">
                  <li>Mobile Phones</li>
                  <li>Accesories</li>
                  <li>Tablets</li>
                </ul>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-3">
                <h3 className="mega_headings">Commercial Vehicles & Spares</h3>
                <ul className="mega_lists">
                  <li>Commercial & Other Vehicles</li>
                  <li>Spare Parts</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h3 className="mega_headings">Electronics & Appliances</h3>
                <ul className="mega_lists">
                  <li>TVs, Video - Audio</li>
                  <li>Kitchen & Other Appliances</li>
                  <li>Computers & Laptops</li>
                  <li>Cameras & Lenses</li>
                  <li>games & Entertainment</li>
                  <li>Fridges</li>
                  <li>Computer Accessories</li>
                  <li>Hard Disk, Printers & Monitors</li>
                  <li>ACs</li>
                  <li>Washing Machines</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3 className="mega_headings">Books, Sports & Hobbies</h3>
                <ul className="mega_lists">
                  <li>Books</li>
                  <li>Gyms & Fitness</li>
                  <li>Muscial Instruments</li>
                  <li>Sports Equipments</li>
                  <li>Other Hobbies</li>
                </ul>
              </div>
              <div className="col-sm-1">
                <h3 className="mega_headings">Bikes</h3>
                <ul className="mega_lists">
                  <li>Motorcycles</li>
                  <li>Scooters</li>
                  <li>Spare Parts</li>
                  <li>Bicycles</li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h3 className="mega_headings">Services</h3>
                <ul className="mega_lists">
                  <li>Electronics & Computer</li>
                  <li>Education & Classes</li>
                  <li>Drivers & Taxi</li>
                  <li>Health & Beauty</li>
                  <li>Other Services</li>
                </ul>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>  
        </>
    )
}

export default DropdownComponent;
