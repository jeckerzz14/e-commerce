import apiAxios from './apiAxios.js';

export default {
    /**
     * Get all products
     * @returns 
     */
    async getAllProducts() {
        try {
            const response = await apiAxios.get('/products');
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
}

