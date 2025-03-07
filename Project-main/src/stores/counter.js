import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlacesStore = defineStore('Palces', () => {
  const places = ref([])
  const toast = useToast()
  
  return { places, }
})
