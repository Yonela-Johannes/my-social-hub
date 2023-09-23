import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../constants/base_urls";

const initialState = {
  name: null,
  description: null,
  number: null,
  email: null,
  subject: '',
  days: [],
  closeDays: [],
  isError: false,
  isLoading: false,
  isLoadingDays: false,
  isDaysSuccess: false,
  dayError: false,
  isCloseDays: false,
  isCloseDaysSuccess: false,
  isSuccess: false,
  closeError: false,
  message: "",
}

export const getDays = createAsyncThunk("days*session/fetch-days", async (data, thunkApi) =>{
  try {
    const response = await axios.get(`${baseUrl}book-session/days`)
    return response.data
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
});

export const getCloseDays = createAsyncThunk("days*session/fetch-close-days", async (data, thunkApi) =>{
  try {
    const response = await axios.get(`${baseUrl}book-session/close-days`)
    return response.data
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
});

export const createSession = createAsyncThunk("create-book-session", async (data, thunkApi) =>{
  try {
    const response = await axios.post(`${baseUrl}book-session`, {data: data})
    return response.data
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
});

export const  bookSlice = createSlice({
  name: "book_session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book_session = action.payload
      })
      .addCase(createSession.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.book_session = null;
        state.message = 'Fetching book session error something went wrong.';
      })
      .addCase(getDays.pending, (state) => {
        state.isLoadingDays = true
      })
      .addCase(getDays.fulfilled, (state, action) => {
        state.isLoadingDays = false;
        state.isDaysSuccess = true;
        state.days = action.payload
        console.log(action.payload.days)
      })
      .addCase(getDays.rejected, (state) => {
        state.isLoadingDays = false;
        state.dayError = true;
        state.isDaysSuccess = false;
        // state.book_session = null;
        state.message = 'Fetching days error something went wrong.';
      })
      .addCase(getCloseDays.pending, (state) => {
        state.isCloseDays = true
      })
      .addCase(getCloseDays.fulfilled, (state, action) => {
        state.isCloseDays = false;
        state.isCloseDaysSuccess = true;
        state.closeDays = action.payload
        console.log(action.payload.closeDays)
      })
      .addCase(getCloseDays.rejected, (state) => {
        state.isCloseDays = false;
        state.closeError = true;
        state.isCloseDaysSuccess = false;
        state.book_session = null;
        state.message = 'Fetching days error something went wrong.';
      })
    }
})

export default bookSlice.reducer;
