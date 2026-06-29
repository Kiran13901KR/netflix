import { createSlice } from "@reduxjs/toolkit"


const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        userLogin: (state, action) => {
            return action.payload;
        },
        userLogOut: (state) => {
            return null;
        }    }
});


export const { userLogin, userLogOut } = UserSlice.actions;
export default UserSlice.reducer;


