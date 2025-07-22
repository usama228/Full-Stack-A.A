import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';
import { getFilteredQuery } from '@/assets';


export const getAllProducts = (productBody) => {
    return axios.get(`${APP_SETTINGS.API_PATH.PRODUCTS.getAllProducts}?${getFilteredQuery(productBody)}`)
}
export const getProduct = (productId) => {
    return axios.get(`${APP_SETTINGS.API_PATH.PRODUCTS.getProduct}/${productId}`)
}
export const addProduct = (productBody) => {
    return axios.post(`${APP_SETTINGS.API_PATH.PRODUCTS.addProduct}`, productBody)
}
export const updateProduct = (productBody) => {
    return axios.patch(`${APP_SETTINGS.API_PATH.PRODUCTS.updateProduct}`, productBody)
}
export const removeProduct = (productId) => {
    return axios.delete(`${APP_SETTINGS.API_PATH.PRODUCTS.removeProduct}/${productId}`)
}