import axios from 'axios';
import { baseUrl } from '../../../constants/base_urls';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'


const initialState = {
  lovePost: false,
  message: '',
  commentCount: 0,
  posts: [{
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
  }],
  recentPosts: [{
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
  }],
  popularPosts: [{
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
  }]
}

export const getPosts = createAsyncThunk("posts/fetch-posts",  async () =>  {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getRecentPosts = createAsyncThunk("posts/fetch-recent-posts",  async () =>  {
  try {
    const response = await axios.get(`${baseUrl}/posts/recent`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPopularPosts = createAsyncThunk("posts/fetch-popular-posts",  async () =>  {
  try {
    const response = await axios.get(`${baseUrl}/posts/popular`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPost = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/posts/${id}`);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = createAsyncThunk("posts/create-post", async (post) => {
  try {
    const response = await axios.post(`${baseUrl}/posts`, post);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removePost = createAsyncThunk("posts/remove-post",async (id) => {
  try {
    await axios.delete(`${baseUrl}/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const updatePost = createAsyncThunk("posts/fetch-posts", async (data) => {
  try {
    const response = await axios.patch(`${baseUrl}/posts/${id}`, post);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const lovePost = createAsyncThunk("posts/love-posts", async (ids) => {
  try {
    const response = await axios.patch(`${baseUrl}/posts/love`, ids);
    return await response.data
  } catch (error) {
    console.log(error);
  }
});

export const viewPost = createAsyncThunk("posts/view-post", async (id) => {
  try {
    const { data } = await axios.patch(`${baseUrl}/posts/view/${id}`);
    return await data
  } catch (error) {
    console.log(error);
  }
});

const  postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postComments(state, payload) {
      state.commentCount = payload.payload
    },
  },
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
      .addCase(getRecentPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecentPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recentPosts = action.payload
      })
      .addCase(getRecentPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
      .addCase(getPopularPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPopularPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.popularPosts = action.payload
      })
      .addCase(getPopularPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
    }
});

export const { postComments } = postsSlice.actions;
export default postsSlice.reducer;
