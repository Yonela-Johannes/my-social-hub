import axios from 'axios';
const url = 'http://localhost:5000/api';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'


const initialState = {
  lovePost: false,
  message: '',
  posts: [{
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
    commentCount: 0,
  }]
}

export const getPosts = createAsyncThunk("posts/fetch-posts",  async () =>  {
  try {
    const response = await axios.get(`${url}/posts`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
})

export const getPost = async (id) => {
  try {
    const { data } = await axios.get(`${url}/posts/${id}`);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = createAsyncThunk("posts/create-post", async (data) => {
  try {
    const response = await axios.post(`${url}/posts`, data);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removePost = createAsyncThunk("posts/remove-post",async (id) => {
  try {
    await axios.delete(`${url}/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const updatePost = createAsyncThunk("posts/fetch-posts", async (data) => {
  try {
    const response = await axios.patch(`${url}/posts/${id}`, post);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const lovePost = createAsyncThunk("posts/love-posts", async (ids) => {
  try {
    const response = await axios.patch(`${url}/posts/love`, ids);
    return await response.data
  } catch (error) {
    console.log(error);
  }
});

const  chatSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
      .addCase(lovePost.pending, (state) => {
        state.lovePost = false
      })
      .addCase(lovePost.fulfilled, (state, action) => {
        state.lovePost = true;

      })
      .addCase(lovePost.rejected, (state) => {
        state.lovePost = false;
        state.message = 'Something went wrong with reacting to post.';
      })
    }
})

export default chatSlice.reducer;
