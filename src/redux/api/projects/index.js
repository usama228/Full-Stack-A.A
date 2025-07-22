import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';
import { getFilteredQuery } from '@/assets';


export const getAllProjects = (projectBody) => {
    return axios.get(`${APP_SETTINGS.API_PATH.PROJECTS.getAllProjects}?${getFilteredQuery(projectBody)}`)
}
export const getProject = (projectId) => {
    return axios.get(`${APP_SETTINGS.API_PATH.PROJECTS.getProject}/${projectId}`)
}
export const addProject = (projectBody) => {
    return axios.post(`${APP_SETTINGS.API_PATH.PROJECTS.addProject}`, projectBody)
}
export const updateProject = (projectBody) => {
    return axios.patch(`${APP_SETTINGS.API_PATH.PROJECTS.updateProject}`, projectBody)
}
export const removeProject = (projectId) => {
    return axios.delete(`${APP_SETTINGS.API_PATH.PROJECTS.removeProject}/${projectId}`)
}