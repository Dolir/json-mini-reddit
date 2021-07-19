import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  post: {},
  status: "mounting",
};
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (postData) => {
    const response = await fetch(`https://www.reddit.com${postData.permalink}`);
    const data = response.json();
    console.log(data);
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
        state.posts = action.payload;
      });
  },
});

export const selectPost = (state) => state.post;
export const selectStatus = (state) => state.status;
export default redditPostSlice.reducer;
