import { createSlice } from "@reduxjs/toolkit";

const myProfileUserSlice = createSlice({
  name: "myProfile",
  initialState: {
    myProfileUser: [],
  },

  reducers: {
    setUserProfile: (state, action) => {
      return { ...state, myProfileUser: action.payload };
    },
    resetUserProfile: (state) => {
      state.myProfileUser = [];
    },
  },
});


export const { setUserProfile, resetUserProfile } = myProfileUserSlice.actions;
export default myProfileUserSlice.reducer;
