<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="text-center">
      <RouterLink class="btn btn-outline-success m-2" to="/">Főoldal</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>