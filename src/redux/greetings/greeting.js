import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const STATUS = 'hello/greetingsReducer/GREETING';
const initialState = null;
export const getGreeting = createAsyncThunk(STATUS, async () => {
  const result = await fetch('http://localhost:3000/')
    .then((result) => result.json());
  return result.greeting;
});
const greetingSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
