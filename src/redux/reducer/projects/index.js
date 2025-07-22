import { createSlice } from '@reduxjs/toolkit';


const projectSlice = createSlice({
    name: 'project',
    initialState: {


        getAllProjectsLoading: false,
        getAllProjectsSuccess: false,
        getAllProjectsFailure: false,
        getAllProjectsError: null,
        getAllProjects: { projects: [] },

        addProjectLoading: false,
        addProjectSuccess: false,
        addProjectFailure: false,
        addProjectError: null,

        deleteProjectLoading: false,
        deleteProjectSuccess: false,
        deleteProjectFailure: false,
        deleteProjectError: null,

        updateProjectLoading: false,
        updateProjectSuccess: false,
        updateProjectFailure: false,
        updateProjectError: null,

        projectLoading: false,
        projectSuccess: false,
        projectFailure: false,
        projectError: null,
        project: null

    },
    reducers: {


        allProjectsLoading: (state) => {
            state.getAllProjectsLoading = true;
            state.getAllProjectsSuccess = false;
            state.getAllProjectsFailure = false
            state.getAllProjectsError = null
        },
        allProjectsSuccess: (state, action) => {
            state.getAllProjectsLoading = false;
            state.getAllProjectsSuccess = true;
            state.getAllProjectsFailure = false
            state.getAllProjectsError = null
            state.getAllProjects = action.payload
        },
        allProjectsFailure: (state, action) => {
            state.getAllProjectsLoading = false;
            state.getAllProjectsSuccess = false;
            state.getAllProjectsFailure = true
            state.getAllProjectsError = action.payload
        },

        getProjectLoading: (state) => {
            state.projectLoading = true;
            state.projectSuccess = false;
            state.projectFailure = false
            state.projectError = null
        },
        getProjectSuccess: (state, action) => {
            state.projectLoading = false;
            state.projectSuccess = true;
            state.projectFailure = false
            state.projectError = null
            state.project = action.payload
        },
        getProjectFailure: (state, action) => {
            state.projectLoading = false;
            state.projectSuccess = false;
            state.projectFailure = true
            state.projectError = action.payload
        },

        addProjectLoading: (state) => {
            state.addProjectLoading = true;
            state.addProjectSuccess = false;
            state.addProjectFailure = false
            state.addProjectError = null
        },
        addProjectSuccess: (state, action) => {
            state.addProjectLoading = false;
            state.addProjectSuccess = true;
            state.addProjectFailure = false
            state.addProjectError = null
        },
        addProjectFailure: (state, action) => {
            state.addProjectLoading = false;
            state.addProjectSuccess = false;
            state.addProjectFailure = true
            state.addProjectError = action.payload
        },

        updateProjectLoading: (state) => {
            state.updateProjectLoading = true;
            state.updateProjectSuccess = false;
            state.updateProjectFailure = false
            state.updateProjectError = null
        },
        updateProjectSuccess: (state, action) => {
            state.updateProjectLoading = false;
            state.updateProjectSuccess = true;
            state.updateProjectFailure = false
            state.updateProjectError = null
        },
        updateProjectFailure: (state, action) => {
            state.updateProjectLoading = false;
            state.updateProjectSuccess = false;
            state.updateProjectFailure = true
            state.updateProjectError = action.payload
        },

        removeProjectLoading: (state) => {
            state.deleteProjectLoading = true;
            state.deleteProjectSuccess = false;
            state.deleteProjectFailure = false
            state.deleteProjectError = null
        },
        removeProjectSuccess: (state, action) => {
            state.deleteProjectLoading = false;
            state.deleteProjectSuccess = true;
            state.deleteProjectFailure = false
            state.deleteProjectError = null
        },
        removeProjectFailure: (state, action) => {
            state.deleteProjectLoading = false;
            state.deleteProjectSuccess = false;
            state.deleteProjectFailure = true
            state.deleteProjectError = action.payload
        },
    },
});

export const {
    allProjectsLoading, allProjectsSuccess, allProjectsFailure,
    removeProjectLoading, removeProjectSuccess, removeProjectFailure,
    updateProjectLoading, updateProjectSuccess, updateProjectFailure,
    addProjectLoading, addProjectSuccess, addProjectFailure,
    getProjectLoading, getProjectSuccess, getProjectFailure,
} = projectSlice.actions;
export default projectSlice.reducer;

