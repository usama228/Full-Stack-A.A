import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: null,
        loading: false,
        error: null,

        getAllUserLoading: false,
        getAllUserSuccess: false,
        getAllUserFailure: false,
        getAllUserError: null,
        getAllUsers: { users: [] },

        addUserLoading: false,
        addUserSuccess: false,
        addUserFailure: false,
        addUserError: null,

        deleteUserLoading: false,
        deleteUserSuccess: false,
        deleteUserFailure: false,
        deleteUserError: null,

        updateUserLoading: false,
        updateUserSuccess: false,
        updateUserFailure: false,
        updateUserError: null,

        userLoading: false,
        userSuccess: false,
        userFailure: false,
        userError: null,
        user: null

    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },

        getAllLoading: (state) => {
            state.getAllUserLoading = true;
            state.getAllUserSuccess = false;
            state.getAllUserFailure = false
            state.getAllUserError = null
        },
        getAllSuccess: (state, action) => {
            state.getAllUserLoading = false;
            state.getAllUserSuccess = true;
            state.getAllUserFailure = false
            state.getAllUserError = null
            state.getAllUsers = action.payload
        },
        getAllFailure: (state, action) => {
            state.getAllUserLoading = false;
            state.getAllUserSuccess = false;
            state.getAllUserFailure = true
            state.getAllUserError = action.payload
        },

        getUserLoading: (state) => {
            state.userLoading = true;
            state.userSuccess = false;
            state.userFailure = false
            state.userError = null
        },
        getUserSuccess: (state, action) => {
            state.userLoading = false;
            state.userSuccess = true;
            state.userFailure = false
            state.userError = null
            state.user = action.payload
        },
        getUserFailure: (state, action) => {
            state.userLoading = false;
            state.userSuccess = false;
            state.userFailure = true
            state.userError = action.payload
        },

        addUserLoading: (state) => {
            state.addUserLoading = true;
            state.addUserSuccess = false;
            state.addUserFailure = false
            state.addUserError = null
        },
        addUserSuccess: (state, action) => {
            state.addUserLoading = false;
            state.addUserSuccess = true;
            state.addUserFailure = false
            state.addUserError = null
            state.addUser = action.payload
        },
        addUserFailure: (state, action) => {
            state.addUserLoading = false;
            state.addUserSuccess = false;
            state.addUserFailure = true
            state.addUserError = action.payload
        },

        updateUserLoading: (state) => {
            state.updateUserLoading = true;
            state.updateUserSuccess = false;
            state.updateUserFailure = false
            state.updateUserError = null
        },
        updateUserSuccess: (state, action) => {
            state.updateUserLoading = false;
            state.updateUserSuccess = true;
            state.updateUserFailure = false
            state.updateUserError = null
            state.user = action.payload
        },
        updateUserFailure: (state, action) => {
            state.updateUserLoading = false;
            state.updateUserSuccess = false;
            state.updateUserFailure = true
            state.updateUserError = action.payload
        },

        removeUserLoading: (state) => {
            state.deleteUserLoading = true;
            state.deleteUserSuccess = false;
            state.deleteUserFailure = false
            state.deleteUserError = null
        },
        removeUserSuccess: (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserSuccess = true;
            state.deleteUserFailure = false
            state.deleteUserError = null
            state.getAllUsers = action.payload
        },
        removeUserFailure: (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserSuccess = false;
            state.deleteUserFailure = true
            state.deleteUserError = action.payload
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout,
    getAllLoading, getAllSuccess, getAllFailure,
    removeUserLoading, removeUserSuccess, removeUserFailure,
    updateUserLoading, updateUserSuccess, updateUserFailure,
    addUserLoading, addUserSuccess, addUserFailure,
    getUserLoading, getUserSuccess, getUserFailure,
} = userSlice.actions;
export default userSlice.reducer;

