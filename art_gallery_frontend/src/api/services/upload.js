import api from '../axios';
import { API_ENDPOINTS } from '../endpoints';

export const uploadService = {
    upload(data) {
        return api.post(API_ENDPOINTS.UPLOAD, data);
    }
}