<template>
    <h1>Új termék adatai</h1>
    <form @submit.prevent="savePlace()">
        <input type="text" v-model="name" placeholder="Szalon neve">
        <input type="text" v-model="location" placeholder="Város">
        <input type="text" v-model="healthcare" placeholder="Egeszségi felkészültség">
        <input type="text" v-model="rate" placeholder="Értékelés(*-al)">
        <input type="submit" value="Mentés">
    </form>
</template>
<script setup>
import {ref} from 'vue'
import { usePlacesStore } from '../stores/counter.js'
const place = usePlacesStore()
const name = ref()
const location = ref()
const healthcare = ref()
const rate = ref()

const savePlace = () => {
    let p = {"name" : name.value,
             "location" : location.value, 
             "healthcare" : healthcare.value, 
             "rate" : rate.value}
    
    place.addNewSalon(p)
    name.value = desc.value = price.value = unit.value = store.value = "";
}
</script>

<style scoped>
    input{ display: block;}
</style>