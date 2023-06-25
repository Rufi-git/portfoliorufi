import { useState } from 'react'
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className="px-4 my-4 sticky top-0 z-[1000] bg-white py-4 shadow-sm">
      <div className='flex items-center justify-between max-w-[1240px] mx-auto'>
        <div className="w-[140px] md:w-[160px] select-none">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className='select-none hidden md:flex lg:text-[16px] md:text-[15px] sm:text-sm gap-4 lg:gap-10'>
          <li>
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/pricing"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/pages"}>
              Pages
            </Link>
          </li>
        </ul>
        <button className='font-semibold py-2 px-6 text-[10px] sm:text-sm md:text-base rounded-full md:ml-0 ml-auto text-white bg-[#5373f7] whitespace-nowrap'>Download CV</button>
        <div onClick={handleClick} className='ml-6 md:hidden cursor-pointer'>
          {<AiOutlineMenu size={25} />}
        </div>
        <div className={`fixed z-[100] p-6 top-0 ${toggleMenu ? `left-0` : `left-[-100%]`} duration-300 drop-shadow bg-white h-screen w-[100%] sm:w-[80%] md:w-[70%]`}>
          <div className="select-none flex justify-between">
            <Link to="/" className='w-[140px] '>
              <img src={logo} alt="logo" />
            </Link>
            <div onClick={handleClick} className='cursor-pointer'>
              {<AiOutlineClose size={25} />}
            </div>
          </div>
          <ul className='flex select-none flex-col gap-4 p-4 mt-6'>
            <li className='text-[17px] sm:text-[15px] border-b-2 border-black-500'>
              <Link to={"/"}>
                Home
              </Link>
            </li>
            <li className='text-[17px] sm:text-[15px] border-b-2 border-black-500'>
              <Link to={"/about"}>
                About
              </Link>
            </li>
            <li className='text-[17px] sm:text-[15px] border-b-2 border-black-500'>
              <Link to={"/services"}>
                Services
              </Link>
            </li>
            <li className='text-[17px] sm:text-[15px] border-b-2 border-black-500'>
              <Link to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className='text-[17px] sm:text-[15px] border-b-2 border-black-500'>
              <Link to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className='text-[17px] sm:text-[15px]'>
              <Link to={"/pages"}>
                Pages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar