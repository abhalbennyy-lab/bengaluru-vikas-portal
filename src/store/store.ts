// src/store/dataStore.ts
import { create } from 'zustand';
import api from "../lib/api"

interface DataStore {
  data: any[]; // your array type
  loading: boolean;
  fetchData: () => Promise<void>;
}

export const useDataStore = create<DataStore>((set) => ({
  data: [],
  loading: false,
  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await api.get('/content/all-content'); // backend API
      set({ data: response.data, loading: false });
      console.log('Data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      set({ loading: false });
    }
  },
}));
