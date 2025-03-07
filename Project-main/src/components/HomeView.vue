<template>
    <div class="container">
        <h1>Tetoválószalonok</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePlacesStore } from '@/stores/counter';

const places = usePlacesStore();

onMounted(() => {
  places.loadPlaces()
})
</script>

<style scoped>

</style>