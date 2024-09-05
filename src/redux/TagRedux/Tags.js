import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tagsList: [],
  },

  reducers: {
    addTags: (state, action) => {
      state.tagsList.push({ ...action.payload });
    },
    deleteTags: (state, action) => {
      state.tagsList = state.tagsList.filter(
        (tag) => tag.id !== action.payload
      );
    },
    updateTags: (state, action) => {
      // Cập nhật một khoản chi tiêu dựa trên id và thông tin cập nhật
      const { id, updatedTag } = action.payload;
      state.tagsList = state.tagsList.map((tag) =>
        tag.id === id ? { ...tag, ...updatedTag } : tag
      );
    },
    setTags: (state, action) => {
      return { ...state, tagsList: action.payload };
    },
  },
});

export const { addTags, deleteTags, updateTags, setTags } =
tagSlice.actions;
export default tagSlice.reducer;
