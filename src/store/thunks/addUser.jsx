import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { pause } from "../../utils";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(
    "https://json-serverfor-redux.vercel.app/users",
    {
      name: faker.person.fullName(),
    }
  );

  await pause(1000);

  return response.data;
});
