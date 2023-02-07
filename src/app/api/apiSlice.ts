import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type } from 'os';
import { setCredentials, logOut } from '../../features/auth/authSlice';



// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }: any ) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        console.log('send the refresh token to the server');
        // send the refresh token to get new access token
        const refreshResult = await baseQuery('/authentication/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult) {
            const user = api.getState().auth.user;
            // store the new access token
            api.dispatch(setCredentials({ ...refreshResult, user }));
            // retry the original request with the new access token
            result = await baseQuery(args, api, extraOptions);
        }else{
            api.dispatch(logOut(refreshResult));
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});