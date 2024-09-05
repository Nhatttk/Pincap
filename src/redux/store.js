import { configureStore } from "@reduxjs/toolkit";
import tags from "./TagRedux/Tags";
import MyProfile from "./UserRedux/MyProfile";
import auth from "./auth";

export const store = configureStore({
  reducer: {
    tags: tags,
    myProfile: MyProfile,
    auth: auth
  },
});
