<template>
  <form>
  <div class="mb-3">
    <label for="Nev" class="form-label">id</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.id">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Név</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Whiskey">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Whiskey Age</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Age">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Whiskey Vintage</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Vintage">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Whiskey Botler</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Botler">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Whiskey Price</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Price">
  </div>
  <div class="mb-3">
    <label for="Nev" class="form-label">Whiskey Rating</label>
    <input type="text" class="form-control" id="Nev" v-model="whiskey.Rating">
  </div>
  <button type="submit" class="btn btn-primary" @click="save">Submit</button>
</form>

</template>

<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const whiskey = ref();

DataService.getWhiskyById(route.params.id)
  .then((resp) => {
    whiskey.value = resp;
    console.log(whiskey.value);
  })
  .catch((err) => {
    console.log(err);
  });

const save = () => {
    DataService.saveWhisky(whiskey.value).then((resp) => {
    console.log(resp);
    })
    router.push('/whiskeys')

}

</script>