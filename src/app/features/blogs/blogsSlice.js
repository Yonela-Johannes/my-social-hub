import axios from 'axios';
const url = 'http://localhost:5000/api';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'


const initialState = {
  loveBlog: false,
  message: '',
  blogs: [{
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
    commentCount: 0,
  }]
}

export const getBlogs = createAsyncThunk("blogs/fetch-blogs",  async () =>  {
  try {
    const { data } = await axios.get(`${url}/blogs`);
    return await data;
  } catch (error) {
    console.log(error);
  }
})

export const getBlog = createAsyncThunk("blogs/fetch-blogs", async (id) => {
  try {
    const { data } = await axios.get(`${url}/blogs`);
    return await data;
  } catch (error) {
    console.log(error);
  }
});

export const createBlog = createAsyncThunk("blogs/fetch-blogs", async (data) => {
  try {
    console.log(data)
    const response = await axios.post(`${url}/blogs/`, data);
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removeBlog = createAsyncThunk("blogs/fetch-blogs",async (id) => {
  try {
    await axios.delete(`${url}/blogs/${id}`);
    // dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
});

export const updateBlog = createAsyncThunk("blogs/fetch-blogs",async (data) => {
  try {
    const { data } = await axios.patch(`${url}/blogs/${id}`, post);
    // dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
});

export const loveBlog = createAsyncThunk("blogs/love-blogs", async (ids) => {
  try {
    const { data } = await axios.patch(`${url}/blogs/love`, ids);
    return await data
  } catch (error) {
    console.log(error);
  }
});

const  blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload
      })
      .addCase(getBlogs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
      .addCase(loveBlog.pending, (state) => {
        state.loveBlog = false
      })
      .addCase(loveBlog.fulfilled, (state, action) => {
        state.loveBlog = true;

      })
      .addCase(loveBlog.rejected, (state) => {
        state.loveBlog = false;
        state.message = 'Something went wrong with reacting to post.';
      })
    }
})

export default blogsSlice.reducer;
