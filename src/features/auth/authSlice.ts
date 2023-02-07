import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, role: null },
    reducers: {
        setCredentials: (state , action) => {
            const { user , token, role } = action.payload
            state.user = user;
            state.token = token;
            state.role = role;
        },
        logOut : (state, action) => {
            state.user = null;
            state.token = null;
            state.role = null;
        }
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;