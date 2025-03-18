<template>
    <div class="container w-100 h-75">
        <h1>Tetoválószalonok</h1>
        <div class="row">
          <div class="card col-12 col-sm-6 col-md-4 col-lg-3 bg-dark text-light p-5 m-3" v-for="p in places.places" :key="p.id">
           <p class="h4 text-center">{{ p.name }}</p>
           <div class="card-body">
            <p class="h6 text-center text-light">{{p.location}}</p>
           </div>
           <div class="card-footer">
            <button class="btn btn-outline-info">Szerkesztés</button>
            <button class="btn btn-outline-danger" @click="deleteSalon(places.places.id)">Törlés</button>
            <button class="btn btn-outline-primary">Időpontfoglalás</button>
           </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePlacesStore } from '../stores/counter';

const places = usePlacesStore();

onMounted(() => {
 places.loadPlaces()
 places.deleteSalon()
})
</script>

<style scoped>

</style>