import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookSessionService from "./bookSessionService";

const book_session = {
  _id: null,
  name: null,
  description: null,
  number: null,
  email: null,
  subject: 0,
  time_slot: null,
}

const initialState = {
  book_session: book_session,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const createSession = createAsyncThunk("/create-book-session", async (data, thunkApi) =>{
  try {
    return await bookSessionService.bookSession(data)
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
    }
})

export default bookSlice.reducer;
