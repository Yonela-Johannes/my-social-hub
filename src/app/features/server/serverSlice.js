import axios from 'axios';
const url = 'http://localhost:5000/api';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user } from '../auth/authSlice'


const initialState = {
  message: '',
  servers: [{
    user,
    members: [user],
    name: '',
    image: "",
    channels: [],
    inviteCode: '',
  }]
}

export const getServers = createAsyncThunk("servers/fetch-servers",  async ({userId}) =>  {
  try {
    console.log(userId)
    const response = await axios.get(`${url}/servers`, {userId: userId});
    console.log(response.data)
    return await response.data;
  } catch (error) {
    console.log(error);
  }
})

export const getServer = async (id) => {
  try {
    const { data } = await axios.get(`${url}/servers/${id}`);
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const createServer = createAsyncThunk("servers/create-server", async (data) => {
  try {
    const response = await axios.post(`${url}/servers`, data);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

export const removeServer = createAsyncThunk("servers/remove-server",async (id) => {
  try {
    await axios.delete(`${url}/servers/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const updateServer = createAsyncThunk("servers/fetch-servers", async (data) => {
  try {
    const response = await axios.patch(`${url}/servers/${id}`, server);
    return response.data
  } catch (error) {
    console.log(error);
  }
});

const  serverSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getServers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.servers = action.payload
        console.log(action.payload)
      })
      .addCase(getServers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching servers error something went wrong.';
      })
    }
})

export default serverSlice.reducer;
