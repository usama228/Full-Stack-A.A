import { AlertToast } from "@/assets";
import { loginAPI, getAllUsers, addUser, updateUser, getUser, removeUser } from "@/redux/api";
import {
    loginStart, loginSuccess, loginFailure,
    getAllLoading, getAllSuccess, getAllFailure,
    removeUserLoading, removeUserSuccess, removeUserFailure,
    updateUserLoading, updateUserSuccess, updateUserFailure,
    addUserLoading, addUserSuccess, addUserFailure,
    getUserLoading, getUserSuccess, getUserFailure,
} from "@/redux/reducer";
import { ALERT_TYPES } from "../../../../config";



export const login = (loginBody, moveToNext, moveToFailure) => {
    return dispatch => {
        dispatch(loginStart())
        loginAPI(loginBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(loginSuccess(response.data.user));
                    if (moveToNext) {
                        moveToNext(response.data.user)
                    }
                }
                else {
                    dispatch(loginFailure(response?.data?.message || 'Login failed'));
                    if (moveToFailure) {
                        moveToFailure(response?.data?.message || 'Login failed')
                    }

                }
            }, error => {
                dispatch(loginFailure(error?.response?.data?.message || error?.message || 'Login failed'));
                if (moveToFailure) {
                    moveToFailure(error?.response?.data?.message || error?.message || 'Login failed')
                }
            }
        )
    }
};

export const GetAllUsers = (userBody, moveToNext) => {
    return dispatch => {
        dispatch(getAllLoading())
        getAllUsers(userBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(getAllSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(getAllFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(getAllFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const AddUser = (userBody, moveToNext) => {
    return dispatch => {
        dispatch(addUserLoading())
        addUser(userBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(addUserSuccess(
                        response.data.data
                    ));

                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addUserFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(addUserFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const UpdateUser = (userBody, moveToNext) => {
    return dispatch => {
        dispatch(updateUserLoading())
        updateUser(userBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(updateUserSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext(response.data.data)
                    }
                }
                else {
                    dispatch(updateUserFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(updateUserFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const GetUser = (userId, moveToNext) => {
    return dispatch => {
        dispatch(getUserLoading())
        getUser(userId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(getUserSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(getUserFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(getUserFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const RemoveUser = (userId, moveToNext) => {
    return dispatch => {
        dispatch(removeUserLoading())
        removeUser(userId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(removeUserSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(removeUserFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(removeUserFailure(error?.message || 'Login failed'));
            }
        )
    }
};