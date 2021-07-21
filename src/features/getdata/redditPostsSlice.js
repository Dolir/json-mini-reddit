import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  status: "mounting",
};
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (searchTerm) => {
    if (searchTerm) {
      const response = await fetch(
        `https://www.reddit.com/search.json?q=${searchTerm}`
      );
      const data = response.json();

      return data;
    }
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const data = response.json();
    console.log(data);
    return data;
  }
);
export const redditPostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      });
  },
});

export const selectPosts = (state) => state.posts;
export const selectStatus = (state) => state.status;
export default redditPostsSlice.reducer;
