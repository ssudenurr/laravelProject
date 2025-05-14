import api from '../axios';
import { API_ENDPOINTS } from '../endpoints';

export const artworksService = {
    getArtworks() {
        return api.get(API_ENDPOINTS.ARTWORKS);
    },
    getArtworksDetails(id) {
        return api.get(API_ENDPOINTS.ARTWORKS_DETAİLS.replace(':id', id));
    }
}