import axios from 'axios';

interface TarihiYerler {
    id: number;
    resimUrl: string;
    yerIsmi: string;
    genelBilgi: string;
    konum: string;
    aktiviteler: string;
    nasilGidilir: string;
    galeri: string;
}

// Base API URL - adjust this to match your Spring backend URL
const API_BASE_URL = 'http://localhost:8080/api';

export const _TarihiYerlerService = {
    // Get all tarihiYerler
    getAllTarihiYerler: async (): Promise<TarihiYerler[]> => {
        try {
            const response = await axios.get<TarihiYerler[]>(`${API_BASE_URL}/tarihiyerler`);
            return response.data;
        } catch (error) {
            console.error('Error fetching tarihi yerler:', error);
            throw error;
        }
    },

    // Get tarihi yer by ID
    getTarihiYerById: async (id: number): Promise<TarihiYerler> => {
        try {
            const response = await axios.get<TarihiYerler>(`${API_BASE_URL}/tarihiyerler/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching tarihi yer with id ${id}:`, error);
            throw error;
        }
    },

    // Create new tarihi yer
    createTarihiYer: async (tarihiYer: Omit<TarihiYerler, 'id'>): Promise<TarihiYerler> => {
        try {
            const response = await axios.post<TarihiYerler>(`${API_BASE_URL}/tarihiyerler`, tarihiYer);
            return response.data;
        } catch (error) {
            console.error('Error creating tarihi yer:', error);
            throw error;
        }
    },

    // Update existing tarihi yer
    updateTarihiYer: async (id: number, tarihiYer: TarihiYerler): Promise<TarihiYerler> => {
        try {
            const response = await axios.put<TarihiYerler>(`${API_BASE_URL}/tarihiyerler/${id}`, tarihiYer);
            return response.data;
        } catch (error) {
            console.error(`Error updating tarihi yer with id ${id}:`, error);
            throw error;
        }
    },

    // Delete tarihi yer
    deleteTarihiYer: async (id: number): Promise<void> => {
        try {
            await axios.delete(`${API_BASE_URL}/tarihiyerler/${id}`);
        } catch (error) {
            console.error(`Error deleting tarihi yer with id ${id}:`, error);
            throw error;
        }
    }
};

export default _TarihiYerlerService;