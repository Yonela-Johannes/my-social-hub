import * as api from '../api';
// action creators
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
} from "../constants/actionTypes";

export const getVideos = async () => {
  try {
    const { data } = await api.fetchVideos();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideo = async () => {
  try {
    const { data } = await api.fetchVideo();
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const addVideo = (video) => async (dispatch) => {
  try {
    const { data } = await api.addVideo(video);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideo = (id) => async (dispatch) => {
  try {
    await api.deleteVideo(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateVideo = (id, video) => async (dispatch) => {
  try {
    const { data } = await api.updateVideo(id, video);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const likeVideo = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const loveVideo = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.lovePost(id);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const viewVideo = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.viewPost(id);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const shareVideo = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.sharePost(id);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
