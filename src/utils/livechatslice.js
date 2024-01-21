import { createSlice } from "@reduxjs/toolkit";

const livechatSlice = createSlice({
  name: "livechat",
  initialState: {
    chatmsg: [],
  },
  reducers: {
    addmsg: (state, action) => {
      state.chatmsg.slice(15, 1);
      state.chatmsg.unshift(action.payload);
    },
  },
});

export const { addmsg } = livechatSlice.actions;

export default livechatSlice.reducer;
