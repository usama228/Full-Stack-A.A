import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';

export const getCountries = () => {
    return axios.get(`${APP_SETTINGS.API_PATH.LOOKUPS.getCountries}`);
}
export const getCountryStates = (countryId) => {
    return axios.get(`${APP_SETTINGS.API_PATH.LOOKUPS.getCountryStates.replace("{:countryId}",countryId)}`);
}
export const getStateCities = (data) => {
    return axios.get(`${APP_SETTINGS.API_PATH.LOOKUPS.getStateCities.replace("{:countryId}",data.countryId).replace("{:stateId}",data.stateId)}`);
}