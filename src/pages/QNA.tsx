import React, { useEffect, useState , useRef} from 'react'
import { AiFillProfile, AiOutlineCamera, AiOutlineHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlineDatabase } from 'react-icons/ai';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getEntrepreneurs } from '../actions/users';
import Layout from '../components/Layout/Layout';
import DeveloperCard from '../components/Artist/DeveloperCard';
import EntrepreneurCard from '../components/Artist/EntrepreneurCard';
import BusinesCard from '../components/Artist/BusinesCard';
import Header from '../components/BusinesScreen/Header/Header';
import List from '../components/BusinesScreen/List/List';
// import { getPlaces } from '../actions/places';

const QNA = ({user}) => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [places, setPlaces] = useState([])
  const location = useLocation();
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)
  const [filterEntrepreneurs, setFilterEntrepreneurs] = useState([])
  const { pathname } = location;
  const navigate = useNavigate();
  // map states
  const originRef = useRef();
  const destinationRef = useRef();
  const [directionsResponse, setDirectionsResponse] = useState(null)

  // user location

  useEffect(() => {
    const fetchAllEntrepreneurs = async () => {
      setEntrepreneurs(await getEntrepreneurs());
    }
    fetchAllEntrepreneurs();
  }, [pathname, getEntrepreneurs()]);

  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <div className="flex items-center justify-between">
          <div className="flex sm:flex-nowrap w-full sm:items-center gap-2 text-[14px] ">
            {/* {user && ( */}
              <button  onClick={() => navigate("/business/createjob")}>
                <p>Share opening</p>
                <AiOutlineHome size={11} />
              </button>
            {/* )} */}
            <button  onClick={() => navigate("/business/creategig")}>
              <p>Create Gig</p>
              <AiOutlineHome size={12} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QNA
