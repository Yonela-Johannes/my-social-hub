import axios from 'axios';

const url = 'http://localhost:5000/api';

// Places
export const fetchPlaces = (sw, ne) => axios.get(`${url}/places`,
  {params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng
  }});

export const fetchPlace = (id) => axios.get(`${url}/places/${id}`);
export const createPlace = (data) => axios.post(`${url}/places/`, data);
export const updatePlace = (id, post) => axios.patch(`${url}/places/${id}`, post);
export const deletePlace = (id) => axios.delete(`${url}/places/${id}`);
export const supportPlace = (id) => axios.patch(`${url}/places/support/${id}`);
export const likePlace = (id) => axios.patch(`${url}/places/like/${id}`);
export const lovePlace = (id) => axios.patch(`${url}/places/love/${id}`);
export const viewPlace = (id) => axios.patch(`${url}/places/view/${id}`);
export const sharePlace = (id) => axios.patch(`${url}/places/share/${id}`);
export const ratePlace = (id) => axios.patch(`${url}/places/share/${id}`);
