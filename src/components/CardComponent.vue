<template>
  <div class="row">
    <div v-for="viszki in viszkik" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ viszki.Whiskey }}</h5>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <router-link :to="'/whiskey/' + viszki.id" class="btn btn-primary">See Whiskey</router-link>
        <button :to="'/whiskey/' + viszki.id" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps(["viszkik"])
</script>