<template>
    <h1>Új termék adatai</h1>
    <form @submit.prevent="savePlace()">
        <table>
            <tr>
                <td><h5>Szalon neve:</h5></td>
                <td><input type="text" v-model="name" placeholder="pl.: Vean Tattoo"></td>
            </tr>
            <tr>
                <td><h5>Város:</h5></td>
                <td><input type="text" v-model="location" placeholder="pl.: Szeged"></td>
            </tr>
            <tr>
                <td><h5>Egeszségi felkészültség:</h5></td>
                <td><input type="text" v-model="healthcare" placeholder="good, meh or bad"></td>
            </tr>
            <tr>
                <td><h5>Értékelés(*-al):</h5></td>
                <td><input type="text" v-model="rate" placeholder="pl.: ***** "></td>
            </tr>
        </table>
        <input type="submit" value="Mentés" class="btn btn-outline-success">
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
    name.value = location.value = healthcare.value = rate.value = "";
}
</script>

<style scoped>
    input{ display: block;}
</style>