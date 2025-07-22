import axios from 'axios';
import { APP_SETTINGS } from '../../../../config';

export const uploadImage = (avatarData) => {
    return axios.post(APP_SETTINGS.API_PATH.AVATAR.uploadImage, avatarData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}