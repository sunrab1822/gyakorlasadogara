<template>
 <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Age</th>
          <th scope="col">Botler</th>
          <th scope="col">Price</th>
          <th scope="col">Rating</th>
          <th scope="col">Vintage</th>
          <th scope="col">Whiskey</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="viszki in viszkik">
          <th scope="row">{{ viszki.id }}</th>
          <th scope="row">{{ viszki.Age? viszki.Age : "nincs adat" }}</th>
          <th scope="row">{{ viszki.Botler? viszki.Botler : "nincs adat" }}</th>
          <th scope="row">{{ viszki.Price? viszki.Price : "nincs adat" }}</th>
          <th scope="row">{{ viszki.Rating }}</th>
          <th scope="row">{{ viszki.Vintage? viszki.Vintage : "nincs adat" }}</th>
          <th scope="row">{{ viszki.Whiskey }}</th>
        </tr>
      </tbody>
    </table>
</template>

<script setup>
    defineProps(["viszkik"]);
</script>