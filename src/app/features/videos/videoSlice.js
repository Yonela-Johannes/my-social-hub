import axios from 'axios';
const url = 'http://localhost:5000/api';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'


const initialState = {
  loveStory: false,
  commentCount: 0,
  stories: [{
    description: '',
    video: '',
    topic: '',
    user,
    image: "",
    loveCount: 0,
    lovedUsers:[],
    comment: [],
  }]
}

export const getStories = createAsyncThunk("stories/fetch-stories",  async () =>  {
  try {
    const response = await axios.get(`${url}/stories`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
})

export const getStory = async (id) => {
  try {
    const { data } = await axios.get(`${url}/stories/${id}`);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const createStory = createAsyncThunk("stories/create-story", async (story) => {
  try {
    const response = await axios.post(`${url}/stories`, story);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removeStory = createAsyncThunk("story/remove-story",async (id) => {
  try {
    await axios.delete(`${url}/stories/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const updateStory = createAsyncThunk("stories/fetch-stories", async (data) => {
  try {
    const response = await axios.patch(`${url}/stories/${id}`, story);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const loveStory = createAsyncThunk("stories/love-stories", async (ids) => {
  try {
    const response = await axios.patch(`${url}/stories/love`, ids);
    return await response.data
  } catch (error) {
    console.log(error);
  }
});

export const viewStory = createAsyncThunk("stories/view-story", async (id) => {
  try {
    const { data } = await axios.patch(`${url}/stories/view/${id}`);
    return await data
  } catch (error) {
    console.log(error);
  }
});

const  storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    storyComments(state, payload) {
      state.commentCount = payload.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stories = action.payload
      })
      .addCase(getStories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
      .addCase(loveStory.pending, (state) => {
        state.loveStory = false
      })
      .addCase(loveStory.fulfilled, (state, action) => {
        state.loveStory = true;

      })
      .addCase(loveStory.rejected, (state) => {
        state.loveStory = false;
        state.message = 'Something went wrong with reacting to story.';
      })
    }
});

export const { storyComments } = storiesSlice.actions;
export default storiesSlice.reducer;
