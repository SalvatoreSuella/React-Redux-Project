import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../utils";

export const deleteUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`http://localhost:3004/users/${user.id}`);
  await pause(1000);
  return user;
});
