import { createSlice } from "@reduxjs/toolkit";

const TokenUserSlice = createSlice({
  name: "token",
  initialState: {
    tokenProfile: "",
  },

  reducers: {
    setToken: (state, action) => {
      return { ...state, tokenProfile: action.payload };
    },
  },
});

export const { setToken } =
TokenUserSlice.actions;
export default TokenUserSlice.reducer;
