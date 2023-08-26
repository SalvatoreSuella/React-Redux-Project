import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../utils";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(
    "https://json-serverfor-redux.vercel.app/users"
  );
  await pause(1000);
  return response.data;
});

export { fetchUsers };
