<template>
<div class="container">

    <card-component :viszkik="viszkik"/>
</div>
</template>

<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";
const viszkik = ref([])


DataService.getAllWiskkeys()
  .then((resp) => {
    viszkik.value = resp;
    console.log(viszkik.value);
  })
  .catch((err) => {
    console.log(err);
  });

    
</script>