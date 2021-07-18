import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/getdata/redditPostsSlice";
import darkModeReducer from "../features/darkmode/darkmode";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    darkmode: darkModeReducer,
  },
});
