
import { AlertToast } from "@/assets";
import { getAllProjects, addProject, updateProject, getProject, removeProject } from "@/redux/api";
import {
    allProjectsLoading, allProjectsSuccess, allProjectsFailure,
    removeProjectLoading, removeProjectSuccess, removeProjectFailure,
    updateProjectLoading, updateProjectSuccess, updateProjectFailure,
    addProjectLoading, addProjectSuccess, addProjectFailure,
    getProjectLoading, getProjectSuccess, getProjectFailure,
} from "@/redux/reducer";
import { ALERT_TYPES } from "../../../../config";


export const GetAllProjects = (projectBody, moveToNext) => {
    return dispatch => {
        dispatch(allProjectsLoading())
        getAllProjects(projectBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(allProjectsSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(allProjectsFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(allProjectsFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const AddProject = (projectBody, moveToNext) => {
    return dispatch => {
        dispatch(addProjectLoading())
        addProject(projectBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(addProjectSuccess(
                        response.data.data
                    ));

                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addProjectFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(addProjectFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const UpdateProject = (projectBody, moveToNext) => {
    return dispatch => {
        dispatch(updateProjectLoading())
        updateProject(projectBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(updateProjectSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(updateProjectFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(updateProjectFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const GetProject = (projectId, moveToNext) => {
    return dispatch => {
        dispatch(getProjectLoading())
        getProject(projectId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(getProjectSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(getProjectFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(getProjectFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const RemoveProject = (projectId, moveToNext) => {
    return dispatch => {
        dispatch(removeProjectLoading())
        removeProject(projectId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(removeProjectSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(removeProjectFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(removeProjectFailure(error?.message || 'Login failed'));
            }
        )
    }
};