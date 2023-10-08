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
  blogModal: false,
  workModal: false,
  emailUsModal: false,
  aboutMeModal: false,
  ourWorkModal: false,
  ourTeamModal: false,
  contactUsModal: false,
  ourReviews: false,
  blog: false,
  blogDetails: false,
  selectedBlog: '',
  postDetails: false,
  selectedPost: '',
  portfolioModal: false,
};

export const signIn = createAsyncThunk("user/getUser", async (user) => {
  try {
    const response = await axios.post(`${baseUrl}user/login`, {oauthCode: user})
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
    },
    toggleServer(state) {
      state.serverPopup = !state.serverPopup
    },
    togglePostModal(state) {
      state.postModal = !state.postModal
    },
    toggleBlogModal(state) {
      state.blogModal = !state.blogModal
    },
    toggleWorkModal(state) {
      state.workModal = !state.workModal
    },
    toggleDevModal(state) {
      state.devModal = !state.devModal
    },
    toggleVideoModal(state) {
      state.videoModal = !state.videoModal
    },
    toggleBookSessionModal(state) {
      state.bookSessionModal = !state.bookSessionModal
    },
    toggleSearchUserModal(state) {
      state.searchUserModal = !state.searchUserModal
    },
    emailModal(state) {
      state.emailUsModal = !state.emailUsModal
    },
    aboutModal(state) {
      state.aboutMeModal = !state.aboutMeModal
    },
    workModal(state) {
      state.ourWorkModal = !state.ourWorkModal
    },
    teamModal(state) {
      state.ourTeamModal = !state.ourTeamModal
    },
    contactModal(state) {
      state.contactUsModal = !state.contactUsModal
    },
    reviewsModal(state) {
      state.ourReviews = !state.ourReviews
    },
    blogModal(state) {
      state.blog = !state.blog
    },
    blogDetailsToggle(state, payload) {
      state.selectedBlog = payload.payload
      state.blogDetails = !state.blogDetails
    },
    postDetailsToggle(state, payload) {
      state.selectedPost = payload.payload
      state.postDetails = !state.postDetails
    },
    portfolioToggle(state) {
      state.portfolioModal = !state.portfolioModal
    },
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

export const {
  toggleMenu,
  toggleShowAdmin,
  toggleServer,
  togglePostModal,
  toggleBlogModal,
  toggleWorkModal,
  toggleDevModal,
  toggleVideoModal,
  toggleBookSessionModal,
  toggleSearchUserModal,
  emailModal,
  aboutModal,
  workModal,
  teamModal,
  reviewsModal,
  contactModal,
  blogModal,
  blogDetailsToggle,
  postDetailsToggle,
  portfolioToggle
} = userSlice.actions;
export default userSlice.reducer;
