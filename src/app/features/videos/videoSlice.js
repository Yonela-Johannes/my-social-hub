import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'
import { baseUrl } from '../../../constants/base_urls';

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
  }],
  recentStories: [{
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
    const response = await axios.get(`${baseUrl}/stories`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
})

export const getRecententStories = createAsyncThunk("stories/fetch-recent-stories",  async () =>  {
  try {
    const response = await axios.get(`${baseUrl}/stories/recent`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
})


export const getStory = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/stories/${id}`);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const createStory = createAsyncThunk("stories/create-story", async (story) => {
  try {
    const response = await axios.post(`${baseUrl}/stories`, story);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removeStory = createAsyncThunk("story/remove-story",async (id) => {
  try {
    await axios.delete(`${baseUrl}/stories/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const updateStory = createAsyncThunk("stories/fetch-stories", async (data) => {
  try {
    const response = await axios.patch(`${baseUrl}/stories/${id}`, story);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const loveStory = createAsyncThunk("stories/love-stories", async (ids) => {
  try {
    const response = await axios.patch(`${baseUrl}/stories/love`, ids);
    return await response.data
  } catch (error) {
    console.log(error);
  }
});

export const viewStory = createAsyncThunk("stories/view-story", async (id) => {
  try {
    const { data } = await axios.patch(`${baseUrl}/stories/view/${id}`);
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
      .addCase(getRecententStories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecententStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recentStories = action.payload
      })
      .addCase(getRecententStories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
    }
});

export const { storyComments } = storiesSlice.actions;
export default storiesSlice.reducer;
