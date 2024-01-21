import { configureStore } from "@reduxjs/toolkit";
import livechatslice from "./livechatslice";

const store = configureStore({
  reducer: {
    livechat: livechatslice,
  },
});

export default store;
