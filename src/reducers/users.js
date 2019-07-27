import { createSlice } from "redux-starter-kit";

export const users = createSlice({
  slice: "users",
  initialState: { name: "" },
  reducers: {
    "login": (state, action) => {
      state.name = action.payload.name;
    },
    "logout": (state, action) => {
      state.name = "";
    }
  }
});

export default users.reducer;

