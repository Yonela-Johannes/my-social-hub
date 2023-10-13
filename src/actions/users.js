import * as api from '../api';
// action creators
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
} from "../constants/actionTypes";

export const getOwner = async () => {
  try {
    const { data } = await api.fetchOwner();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

// CREATE Admin
export const createAdmin = (writer) => async (dispatch) => {
  try {
    const { data } = await api.createAdmin(writer);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAdmins = async () => {
  try {
    const { data } = await api.fetchAdmins();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getAdmin = async (id) => {
  try {
    const { data } = await api.fetchAdmin(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAdmin = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateAdmin(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// CREATE ARTIST
export const createArtist = (artist) => async (dispatch) => {
  try {
    const { data } = await api.createArtist(artist);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getArtists = async () => {
  try {
    const { data } = await api.fetchArtists();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = async (id) => {
  try {
    const { data } = await api.fetchArtist(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateArtist = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateArtist(id, updateData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// CREATE DEVELOPER
export const createDeveloper = (developer) => async (dispatch) => {
  try {
    const { data } = await api.createDeveloper(developer);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getDevelopers = async () => {
  try {
    const { data } = await api.fetchDevelopers();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getDeveloper = async (id) => {
  try {
    const { data } = await api.fetchDeveloper(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDeveloper = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateDeveloper(id, updateData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// ========================================================
// CREATE DEV POST
export const createDev = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.createDev(id, post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getDevs = async () => {
  try {
    const { data } = await api.fetchDevs();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getDev = async (id) => {
  try {
    const { data } = await api.fetchDev(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDev = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateDev(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const likeDev = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeDev(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const supportDev = (id) => async (dispatch) => {
  try {
    const { data } = await api.supportDev(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loveDev = (id) => async (dispatch) => {
  try {
    const { data } = await api.loveDev(id);
    console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const viewDev = (id) => async (dispatch) => {
  try {
    const { data } = await api.viewDev(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const shareDev = (id) => async (dispatch) => {
  try {
    const { data } = await api.shareDev(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// -------------------------------------------------
// CREATE DEVELOPER JOBS
export const createDevjob = (developer) => async (dispatch) => {
  try {
    const { data } = await api.createDevjob(developer);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getDevjobs = async () => {
  try {
    const { data } = await api.fetchDevjobs();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getDevjob = async (id) => {
  try {
    const { data } = await api.fetchDevjob(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDevjob = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateDevjob(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};



// -------------------------------------------------------------------

// CREATE WRITER
export const createWriter = (writer) => async (dispatch) => {
  try {
    const { data } = await api.createWriter(writer);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getWriters = async () => {
  try {
    const { data } = await api.fetchWriters();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getWriter = async (id) => {
  try {
    const { data } = await api.fetchWriter(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWriter = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateWriter(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// CREATE ENTREPRENEUR
export const createEntrepreneur = (entrepreneur) => async (dispatch) => {
  try {
    const { data } = await api.createEntrepreneur(entrepreneur);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEntrepreneurs = async () => {
  try {
    const { data } = await api.fetchEntrepreneurs();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getEntrepreneur = async (id) => {
  try {
    const { data } = await api.fetchEntrepreneur(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEntrepreneur = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateEntrepreneur(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await api.fetchUsers();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await api.fetchUser(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const removeUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeUser(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const rateUser = (id, number) => async (dispatch) => {
  try {
    const { data } = await api.rateUser(id, number);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loveUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.loveUser(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const viewUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.viewUser(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const shareUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.shareUser(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const supportUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.supportUser(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// ============================================
// CREATE PLAYLIST
export const addToPlaylist = (id, songId, userId) => async (dispatch) => {
  try {
    const { data } = await api.addToPlaylist(id, songId, userId);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPlaylist = (name) => async (dispatch) => {
  try {
    const { data } = await api.createPlaylist(name);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylists = async () => {
  try {
    const { data } = await api.fetchPlaylists();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylist = async (id) => {
  if(!id) return ''
  console.log("This is fetching:: ::", id)

  try {
    const { data } = await api.fetchPlaylist(id);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePlaylist = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePlaylist(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const lovePlaylist = (id) => async (dispatch) => {
  try {
    const { data } = await api.lovePlaylist(id);
    console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const viewPlaylist = (id) => async (dispatch) => {
  try {
    const { data } = await api.viewPlaylist(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const sharePlaylist = (id) => async (dispatch) => {
  try {
    const { data } = await api.sharePlaylist(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
