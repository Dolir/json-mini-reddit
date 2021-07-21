import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/getdata/redditPostsSlice";
import postReducer from "../features/getdata/redditPostSlice";

import darkModeReducer from "../features/darkmode/darkmode";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    darkmode: darkModeReducer,
  },
});
