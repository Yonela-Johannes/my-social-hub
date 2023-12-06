import { useState, useEffect } from 'react'
import { getOwner } from '../actions/users';
import SideProfile from './Profile/SideProfile';

const InnerLeftbar = ({user}) => {
  const [brand, setBrand] = useState();
  useEffect(() => {
      const fetchBrand = async () => {
        setBrand(await getOwner())
      }
      fetchBrand();
  }, [getOwner()]);

  return (
    <div>
      <SideProfile brand={brand} />
    </div>
)};

export default InnerLeftbar;
