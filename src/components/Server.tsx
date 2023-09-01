import { useNavigate } from 'react-router-dom';
import { servers } from '../assets/constants'

const NavLinks = ({setActiveNav, homeScreen}) => {
  const navigate = useNavigate();

  const handleNav = (direction) => {
    navigate(direction)
    setActiveNav(false)
   }

  return (
  <div>
    {servers.map((item, homeScreen) => (
    <button key={item?.name} onClick={() => handleNav(item.to)}
      className={`${homeScreen ? "bg-transparent" : "bg-transparent"} flex p-2 mb-2 justify-between `}
        >
          <img src={item.image} className='w-[40px] h-[40px] object-cover rounded-full' />
      </button>
    ))}
  </div>
)}
const Server = ({setActiveNav, homeScreen}) => {
  return (
    <div className={`${homeScreen ? "sm:flex items-center bg-bg_light justify-evenly gap-2 hidden" : 'flex pt-2 flex-col h-min w-[60px] bg-bg_cl rounded-r-lg shadow-lg'}`}>
      <div className={`${homeScreen ? "flex items-center justify-center gap-2" : 'flex flex-col'}`}>
        <NavLinks setActiveNav={setActiveNav} homeScreen={homeScreen} />
      </div>
    </div>
)};

export default Server;
