import { createSlice } from '@reduxjs/toolkit';
// import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface AuthState {
    uid: string;
    name: string;
    avatar: string;
}

// Initial state
const initialState: AuthState = {
    uid: '',
    name: '',
    avatar: '',
};

// Actual Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuth(state, action) {
            state.uid = action.payload.uid;
            state.name = action.payload.name;
            state.avatar = action.payload.avatar;
        },
        setLogout(state, action) {
            state = initialState;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.auth,
    //         };
    //     },
    // },
});

export const { setAuth, setLogout } = authSlice.actions;

// export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
