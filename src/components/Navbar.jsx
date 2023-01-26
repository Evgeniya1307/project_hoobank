import { useState } from 'react'
import React from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">{/*будет скрыт это мобильная панель карты */}
   
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins font-normal cursor-pointer text-[16px] ${
          active === nav.title ? "text-white" : "text-dimWhite" //which one is currently active
        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} //if index navLinks.length -1 means (last element) i set margin setting to 0 otherwise 10
        onClick={() => setActive(nav.title)}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
    ))}
    </ul>

    {/*для мобильных устройств бургер*/}
<div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu} //if the switch is on show the icon otherwise the menu icon
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)} //on click
        />


        <div
          className={`${
            !toggle ? "hidden" : "flex" //if the switch is on, then the flex container; if not, it is hidden
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col"> {/*flex-col столбец */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar
