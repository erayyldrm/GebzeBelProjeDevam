import axios from 'axios';

// Tarihi yer nesnesi için TypeScript arayüzü
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

// Spring Boot backend için temel API URL'i
const API_BASE_URL = 'http://localhost:8080/api';

export const _TarihiYerlerService = {

    /**
     * Tüm tarihi yerleri getirir
     * @returns TarihiYerler dizisi
     */
    getAllTarihiYerler: async (): Promise<TarihiYerler[]> => {
        try {
            const response = await axios.get<TarihiYerler[]>(`${API_BASE_URL}/tarihi-yerler`);
            return response.data;
        } catch (error) {
            console.error('Error fetching tarihi yerler:', error);
            throw error;
        }
    },

    /**
     * Belirli bir ID'ye sahip tarihi yeri getirir
     * @param id - Tarihi yerin kimliği
     * @returns Tek bir TarihiYerler nesnesi
     */
    getTarihiYerById: async (id: number): Promise<TarihiYerler> => {
        try {
            const response = await axios.get<TarihiYerler>(`${API_BASE_URL}/tarihi-yerler/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching tarihi yer with id ${id}:`, error);
            throw error;
        }
    },

    /**
     * Yeni bir tarihi yer oluşturur
     * @param tarihiYer - ID harici tarihi yer bilgileri
     * @returns Oluşturulan TarihiYerler nesnesi
     */
    createTarihiYer: async (tarihiYer: Omit<TarihiYerler, 'id'>): Promise<TarihiYerler> => {
        try {
            const response = await axios.post<TarihiYerler>(`${API_BASE_URL}/tarihi-yerler`, tarihiYer);
            return response.data;
        } catch (error) {
            console.error('Error creating tarihi yer:', error);
            throw error;
        }
    },

    /**
     * Mevcut bir tarihi yeri günceller
     * @param id - Güncellenecek yerin kimliği
     * @param tarihiYer - Güncellenmiş veriler
     * @returns Güncellenmiş TarihiYerler nesnesi
     */
    updateTarihiYer: async (id: number, tarihiYer: TarihiYerler): Promise<TarihiYerler> => {
        try {
            const response = await axios.put<TarihiYerler>(`${API_BASE_URL}/tarihi-yerler/${id}`, tarihiYer);
            return response.data;
        } catch (error) {
            console.error(`Error updating tarihi yer with id ${id}:`, error);
            throw error;
        }
    },

    /**
     * Belirli bir ID'ye sahip tarihi yeri siler
     * @param id - Silinecek yerin kimliği
     */
    deleteTarihiYer: async (id: number): Promise<void> => {
        try {
            // ❗ Hata: endpoint yanlış yazılmıştı, düzeltilmeli
            await axios.delete(`${API_BASE_URL}/tarihi-yerler/${id}`);
        } catch (error) {
            console.error(`Error deleting tarihi yer with id ${id}:`, error);
            throw error;
        }
    }
};

export default _TarihiYerlerService;
