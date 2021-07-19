import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};
export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.darkmode = action.payload;
    },
  },
});
export const selectDarkMode = (state) => state.darkmode;
export const { toggle } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
