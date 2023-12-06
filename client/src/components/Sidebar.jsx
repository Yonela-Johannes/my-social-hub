import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { adminLinks, sidebarLinks } from '../assets/constants'
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown, MdArrowDropUp, MdMenu, MdMenuOpen } from "react-icons/md";
import { toggleMenu, toggleServer, toggleShowAdmin } from "../app/features/auth/authSlice";
import { IoMdAdd } from "react-icons/io";


const NavLinks = () => {
  const navigate = useNavigate();

  const handleNav = (direction) => {
    navigate(direction)
   }

  return (
  <>
    {sidebarLinks.map((item) => (
    <button key={item?.id} onClick={() => handleNav(item.to)}
      className={`"bg-transparent flex p-2 mb-2 justify-between`}
        >
        <p className="hidden sm:block text-base">{item.name}</p>
        <item.icon size={18} />
      </button>
    ))}
  </>
)}

const AdminNavLinks = () => {
  const navigate = useNavigate();

  const handleNav = (direction) => {
    navigate(direction)
   }

  return (
  <>
    {adminLinks.map((item) => (
    <button key={item?.id} onClick={() => handleNav(item.to)}
      className={`"bg-transparent flex p-2 justify-between `}
        >
        <p className="hidden sm:block text-base">{item.name}</p>
        <item.icon size={18} />
      </button>
    ))}
  </>
)}

const Sidebar = () => {
  const dispatch = useDispatch()
  const { given_name, email, picture, message, isAdmin, menuState, showAdmin } = useSelector(state => state.auth)

  return (
    <div className={`relative flex flex-col pt-8 'min-w-full items-center px-2'}`}>
      <div onClick={() => dispatch(toggleServer())} className="absolute left-2 top-4 hover:bg-bg_light duration-300 cursor-pointer rounded-md">
        <IoMdAdd size={25} />
      </div>
      <div className='flex items-center text-center justify-between pt-4'>
          <p className='pb-8 font-bold text-lighter'>Main Menu</p>
      </div>
      <div className={`flex gap-4`}>
        <div className={`flex flex-col`}>
          <NavLinks />
        </div>
      </div>
      <div onClick={() => dispatch(toggleShowAdmin(!showAdmin))} className="flex text-lighter items-center gap-2 cursor-pointer pt-8 pb-4 duration-300" >
        <p className=' font-bold text-lighter'>Management</p>
        {!showAdmin ?

        (<MdArrowDropDown size={25} />):
        (
          <MdArrowDropUp size={25} />
        )

        }
      </div>
      {showAdmin && (
        <div className={`flex flex-col`}>
          <AdminNavLinks />
        </div>
      )}
    </div>
)};

export default Sidebar;
