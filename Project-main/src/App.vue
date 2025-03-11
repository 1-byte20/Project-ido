<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
 <div class="container">
  <div class="row">
    <nav>
      <RouterLink class="btn btn-outline-success m-2" to="/">Szalonok</RouterLink>
      <RouterLink class="btn btn-outline-warning m-2" to="/new">Új szalon</RouterLink>
    </nav>
    <RouterView/>
  </div>
 </div>
</template>