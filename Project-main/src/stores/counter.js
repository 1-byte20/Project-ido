import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const usePlacesStore = defineStore('places', () => {
  const places = ref([]);

  const loadPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:3000/places'); 
      console.log(response.data); 
      places.value = response.data; 
    } catch (error) {
      console.error('Hiba történt az adatok betöltésekor:', error);
    }
  };

  return { places, loadPlaces };
});