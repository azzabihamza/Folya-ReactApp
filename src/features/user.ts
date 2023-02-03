import { createSlice } from '@reduxjs/toolkit';

// intitalState is user object
const initialState = {
    user: {
        id : 0,
        username: '',
        token: ''
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState: { ...initialState },
    reducers: {
       // set user
       setUser : (state, action) => {
           state.user = action.payload;
       }
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;