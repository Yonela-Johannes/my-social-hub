import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookSessionService from "./contactService";

const contact = {
  first_name: null,
  last_name: null,
  email: null,
  number: null,
  comment: null,
  company: 0,
}

const initialState = {
  contact: contact,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const createContact = createAsyncThunk("/create-contact", async (data, thunkApi) =>{

  try {
    return await bookSessionService.createContact(data)
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
});

export const  contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contact = action.payload
      })
      .addCase(createContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact
        act = null;
        state.message = 'Fetching contact error something went wrong.';
      })
    }
})

export default contactSlice.reducer;
