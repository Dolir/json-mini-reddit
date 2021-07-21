import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  post: [],
  status: "mounting",
};
export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (postData) => {
    const response = await fetch(
      `https://www.reddit.com/r/${postData.subreddit}/comments/${postData.id}.json`
    );
    const data = response.json();
    return data;
  }
);
export const redditPostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.post = action.payload;
      });
  },
});

export const selectPost = (state) => state.post;
export default redditPostSlice.reducer;
