import { createSlice } from "@reduxjs/toolkit";

type Users = {
    id: number;
    firstName: string;
    lastName: boolean;
    email: boolean;
    phone: string;
};

type UsersState = {
    list: Users[];
    isLoading: boolean;
};

const initialState: UsersState = {
    list: [],
    isLoading: false,
};

export const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.list = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { getUsers, setLoading } = users.actions;
export default users.reducer;