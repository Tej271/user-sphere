import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserState {
  list: User[];
}

const initialState: UserState = {
  list: [], // multiple user records stored here
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
  },
});

export const { addUser, removeUser, updateUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
