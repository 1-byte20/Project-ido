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

  const addNewSalon = async (salon) => {
    try {
        const response = await axios.post("http://localhost:3000/places", salon);
        places.value.push(response.data); 
    } catch (error) {
        console.error("Hiba a szalon mentésekor:", error);
    }
}

const deleteSalon = async (id) => {
  try {
      await axios.delete(`http://localhost:3000/places/${id}`);
      places.value = places.value.filter(salon => salon.id !== id); 
  } catch (error) {
      console.error("Hiba a szalon törlésekor:", error);
  }
}

  return { places, loadPlaces, addNewSalon, deleteSalon };
});