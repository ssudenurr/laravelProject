import api from '../axios';
import { API_ENDPOINTS } from '../endpoints';

export const userServices = {
    getUser() {
        return api.get(API_ENDPOINTS.USER.GET_USER);
    },
    updateUser(data) {
        return api.put(API_ENDPOINTS.USER.UPDATE_USER, data);
    }
}