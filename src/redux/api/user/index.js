import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';
import { getFilteredQuery } from '@/assets';

export const loginAPI = (loginBody) => {
    return axios.post(`${APP_SETTINGS.API_PATH.USER.login}`, loginBody);
}
export const getAllUsers = (userBody) => {
    return axios.get(`${APP_SETTINGS.API_PATH.USER.getAllUsers}?${getFilteredQuery(userBody)}`)
}
export const getUser = (userId) => {
    return axios.get(`${APP_SETTINGS.API_PATH.USER.getUser}/${userId}`)
}
export const addUser = (userBody) => {
    return axios.post(`${APP_SETTINGS.API_PATH.USER.addUser}`, userBody)
}
export const updateUser = (userBody) => {
    return axios.patch(`${APP_SETTINGS.API_PATH.USER.updateUser}`, userBody)
}
export const removeUser = (userId) => {
    return axios.delete(`${APP_SETTINGS.API_PATH.USER.removeUser}/${userId}`)
}