import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentComments: null,
  loading: false,
  error: false,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentComments = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    postComment: (state, action) => {
      state.currentComments.push(action.payload);
    },
  },
});

export const { fetchFailure, fetchStart, fetchSuccess, postComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
