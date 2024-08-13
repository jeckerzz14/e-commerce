import apiAxios from './apiAxios.js';

export default {
    /**
     * Get all categories
     * @returns 
     */
    async getAllCategories() {
        try {
            const response = await apiAxios.get('/categories');
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
}

