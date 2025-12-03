import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type User, users } from "@/data/users";

interface UserState {
  list: User[];
  selectedUser: User | null;
}

const initialState: UserState = {
  list: [...users.slice(0, 5)],
  selectedUser: null,
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
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
    editUser: (state, action: PayloadAction<User>) => {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, removeUser, updateUser, setUsers, setSelectedUser, editUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
