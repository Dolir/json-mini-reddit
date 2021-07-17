import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/getdata/redditPostsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
