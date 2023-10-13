import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { adminLinks, sidebarLinks } from '../assets/constants'
import Server from './Server';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown, MdArrowDropUp, MdMenu, MdMenuOpen } from "react-icons/md";
import { toggleMenu, toggleShowAdmin } from "../app/features/auth/authSlice";


const NavLinks = ({menuState}) => {
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
          {!menuState && (<p className="hidden sm:block text-base">{item.name}</p>)}
        <item.icon size={18} />
      </button>
    ))}
  </>
)}

const AdminNavLinks = ({menuState}) => {
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
          {!menuState && (<p className="hidden sm:block text-base">{item.name}</p>)}
        <item.icon size={18} />
      </button>
    ))}
  </>
)}

const Sidebar = () => {
  const dispatch = useDispatch()
  const { given_name, email, picture, message, isAdmin, menuState, showAdmin } = useSelector(state => state.auth)

  return (
    <div className={`relative flex flex-col pt-8 ${!menuState ? 'min-w-full items-center ' : 'w-[120px] items-end px-2'}`}>
      <div onClick={() => dispatch(toggleMenu())} className="absolute right-2 top-4 hover:bg-bg_light duration-300 cursor-pointer rounded-md">
        {!menuState ? (<MdMenuOpen size={25} />
        ):(<MdMenu size={25} />)
      }
      </div>
      <div className="absolute left-0">
        <Server />
      </div>
      {!menuState ? (
        <div className='flex items-center text-center justify-between pt-4'>
            <p className='pb-8 font-bold text-lighter'>Main Menu</p>
        </div>
      ): (
      <div className='flex items-center text-center justify-between pt-4'>
        <p className='pb-8 font-bold text-lighter'>MM</p>
    </div>
      )
    }
      <div className={`flex gap-4`}>
        <div className={`flex flex-col`}>
          <NavLinks menuState={menuState} />
        </div>
      </div>
      <div onClick={() => dispatch(toggleShowAdmin(!showAdmin))} className="flex text-lighter items-center gap-2 cursor-pointer pt-8 pb-4 duration-300" >
        {!menuState ? (
          <p className=' font-bold text-lighter'>Management</p>
        ):(<p className=' font-bold text-lighter'>M</p>)
      }
        {!showAdmin ?

        (<MdArrowDropDown size={25} />):
        (
          <MdArrowDropUp size={25} />
        )

        }
      </div>
      {showAdmin && (
        <div className={`flex flex-col`}>
          <AdminNavLinks menuState={menuState} />
        </div>
      )}
    </div>
)};

export default Sidebar;
