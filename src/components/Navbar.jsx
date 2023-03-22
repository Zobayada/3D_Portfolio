import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center z-20 top-0 fixed bg-primary
    `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-36 h-28 -mr-[25px] object-contain' />
          <p className='text-white text-[18px]  font-bold cursor-pointer sm:block hidden'>Portfolio</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => { setActive(link.title) }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] sm:-my-[15px] xl object-contain cursor-pointer z-30'
            onClick={() => { setToggle(!toggle) }}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl right-0`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => { setActive(link.title) }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar