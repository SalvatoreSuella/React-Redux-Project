import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../utils";

export const deleteUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(
    `https://json-serverfor-redux.vercel.app/users/${user.id}`
  );
  await pause(1000);
  return user;
});
