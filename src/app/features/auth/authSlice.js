import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { baseUrl } from "../../../constants/base_urls";

export const user = {
  _id: "",
  name: '',
  given_name: "",
  family_name: "",
  email: "",
  picture: "",
  quote: '',
  isAdmin: false,
  isBlocked: false,
  servers: [],
  members: [],
  channels: [],
  message: "",
  status: "",
};

const initialState = {
  _id: "",
  name: '',
  given_name: "",
  family_name: "",
  email: "",
  picture: "",
  quote: '',
  isAdmin: false,
  isBlocked: false,
  servers: [],
  members: [],
  channels: [],
  message: "",
  status: "",
  menuState: false,
  showAdmin: false,
};

export const signIn = createAsyncThunk("user/getUser", async (user) => {
  try {
    const response = await axios.post(`${baseUrl}user/login`, {oauthCode: user})
    console.log(response.data)
    return response.data
  } catch (error) {
    throw err
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuState = !state.menuState
    },
    toggleShowAdmin(state) {
      state.showAdmin = !state.showAdmin
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state._id = action.payload.user._id;
        state.given_name = action.payload.user.name;
        state.given_name = action.payload.user.given_name;
        state.family_name = action.payload.user.family_name;
        state.isAdmin = action.payload.user.isAdmin;
        state.isBlocked = action.payload.user.isBlocked;
        state.email = action.payload.user.email;
        state.picture = action.payload.user.picture;
        state.message = action.payload.message;
        state.servers = action.payload.user.servers;
        state.members = action.payload.user.members;
        state.channels = action.payload.user.channels;
        state.channels = action.payload.user.quote;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});
export const { toggleMenu, toggleShowAdmin } = userSlice.actions;
export default userSlice.reducer;
