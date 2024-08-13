import apiAxios from './apiAxios.js';

export default {
    /**
     * Get all products
     * Filter by params
     * @returns 
     */
    async getAllProducts(params = {}) {
        // Filter logic
        // Remove undefined or null parameters
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([key, value]) => value !== undefined && value !== null)
        );
        const queryParams = new URLSearchParams(filteredParams).toString();

        try {
            const response = await apiAxios.get(`/products/?${queryParams}`);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    /**
     * Get product by id
     * @returns 
     */
    async getProductById(id) {
        try {
            const response = await apiAxios.get(`/products/${id}`);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

}

