import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Alpha from '../assets/AlphaWhite.png';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser} from 'react-icons/ai';
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const Navbar = ({user, pathname, homeScreen, activeNav, setActiveNav}) => {
  const { given_name, email, picture, message, menuState } = useSelector(state => state.auth)
  const [activeNavList, setActiveNavList] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/signin');
  };

  return (
    <div className={`${homeScreen && "bg-green"} flex h-[60px] sm:h-[80px] border-b border-bg_light items-center justify-between px-4 sm:px-20  bg-bg_light`}>
      <div className={`${homeScreen ? "bg-transparent" : " p-2 text-center items-center bg-green justify-between rounded-full"} flex`}>
        <div className="">
          <Link to='/home'>
            <img src={Alpha}  alt='logo' className="w-4 h-4 sm:h-4 sm:w-4 rotate-180"/>
          </Link>
        </div>
        <div className="sm:hidden">
          {activeNav ? (
            <div className="bg-bg_alt p-2 rounded-full" onClick={() => setActiveNav(!activeNav)}>
                <MdMenuOpen className="w-4 h-4"/>
            </div>
          ) : (
            <div className="bg-bg_alt p-2 rounded-full" onClick={() => setActiveNav(!activeNav)}>
                <MdMenu className="w-4 h-4"/>
            </div>
          )}
        </div>
      </div>
      <div>
      {!email ? (
        <>
          {pathname == '/signup' && (
            <div className="flex items-center gap-4">
              <div className="">
                <button className={`${homeScreen ? "bg-transparent" : " p-2"} `} onClick={() => navigate('/signin')}>
                    <AiOutlineLogin />
                    Sign in
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <Menu className="relative">
          <div className="flex items-center gap-4">
            <div className={`${activeNavList ? "rounded-sm" : "rounded-full"}  flex items-center gap-2 text-base ${homeScreen ? "bg-transparent" : " p-2bg-bg_alt"}  cursor-pointer`}>
              <div>
                <MenuButton>
                  <img src={picture} alt="avatar" className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-full object-cover"/>
                  {/* <BellIcon */}
                </MenuButton>
              </div>
            </div>
          </div>
          <MenuList className="flex flex-col gap-2 rounded-sm absolute z-10 bg-bg_alt">
            <MenuItem className="justify-between rounded-none px-6" onClick={() => (setActiveNavList(false), navigate(`/myprofile`))}>
              <p>My Profile</p>
              <AiOutlineUser />
            </MenuItem>
            <MenuItem className="justify-between rounded-none px-6 p-2" onClick={logout}>
              <p>Log out</p>
              <AiOutlineLogout />
            </MenuItem>
          </MenuList>
        </Menu>
        )}
      </div>
      <>
        {!email && pathname !== '/signup' && pathname !== '/signin'  && (
          <div className="flex items-center gap-4">
            <div className="">
              <button className={`${homeScreen ? "bg-transparent" : " p-2"} `} onClick={() => navigate('/signin')}>
                 <AiOutlineLogin className="h-4 w-4 p-2 bg-primary rounded-full" />
                  Sign in
              </button>
            </div>
          </div>
        )}
      </>
    </div>
)};

export default Navbar;
