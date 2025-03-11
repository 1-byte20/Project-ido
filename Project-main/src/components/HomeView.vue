<template>
  <div class="container">
    <nav class="text-center">
      <RouterLink class="btn btn-outline-success m-2" to="/">Szalonok</RouterLink>
      <RouterLink class="btn btn-outline-warning m-2" to="/new">Új szalon</RouterLink>
    </nav>
  </div>
    <div class="container w-75 h-77">
        <h1>Tetoválószalonok</h1>
        <div class="row">
          <div class="card col-12 col-sm-6 col-md-4 col-lg-3 bg-dark text-light p-5" v-for="p in places" :key="p.id">
           <p class="h4">{{ p.name }}</p>
           <div class="card-body">
            <p class="h2 text-center text-secondary">{{p.location}}</p>
           </div>
           <div class="card-footer">
            <RouterLink class="btn btn-outline-info m-2" to="/">Szerkesztés</RouterLink>
            <button class="btn btn-outline-danger m-2">Törlés</button>
            <button class="btn btn-outline-primary m-2">Időpontfoglalás</button>
           </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePlacesStore } from '@/stores/counter';
import axios from 'axios'

const places = usePlacesStore();

onMounted(() => {
  axios
  .get("/helyek.json") 
      .then(response => {
        places.setPlaces(response.data); 
      })
      .catch(error => {
        console.error("Hiba történt az adatok lekérésekor:", error);
      });
})
</script>

<style scoped>

</style>