import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';
import { getFilteredQuery } from '@/assets';


export const getAllCategories = (categoryBody) => {
    return axios.get(`${APP_SETTINGS.API_PATH.CATEGORIES.getAllCategories}?${getFilteredQuery(categoryBody)}`)
}
export const getAllChildCategories = (categoryId, categoryBody) => {
    return axios.get(`${APP_SETTINGS.API_PATH.CATEGORIES.getAllChildCategories}/${categoryId}?${getFilteredQuery(categoryBody)}`)
}
export const getCategory = (categoryId) => {
    return axios.get(`${APP_SETTINGS.API_PATH.CATEGORIES.getCategory}/${categoryId}`)
}
export const addCategory = (categoryBody) => {
    return axios.post(`${APP_SETTINGS.API_PATH.CATEGORIES.addCategory}`, categoryBody)
}
export const updateCategory = (categoryBody) => {
    return axios.patch(`${APP_SETTINGS.API_PATH.CATEGORIES.updateCategory}`, categoryBody)
}
export const removeCategory = (categoryId) => {
    return axios.delete(`${APP_SETTINGS.API_PATH.CATEGORIES.removeCategory}/${categoryId}`)
}