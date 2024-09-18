<script setup>
import { AppState } from '@/AppState.js';
import { homesService } from '@/services/HomesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const homes = computed(() => AppState.homes)

onMounted(() => {
  getHomes()
})

async function getHomes() {
  try {
    await homesService.getHomes()
  }
  catch (error) {
    Pop.meow(error);
  }
}

</script>


<template>
  <div class="container">
    <section class="row">
      <h1>Homes</h1>

      <div>
        <div v-for="home in homes" :key=home.id class="d-flex flex-columnn m-3 home-card">
          <div class="col-md-4">
            <img :src="home.imgUrl" :alt="home.description" class="img-fluid home-img">
          </div>
          <div class="col-md-8 p-3">
            <h2>{{ home.year }} Home with {{ home.bedrooms }} Bedroom {{ home.bathrooms }} Bath</h2>
            <h4>{{ home.description }}</h4>
            <h4>Created: {{ home.createdAt }}</h4>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>


<style lang="scss" scoped>
.home-img {
  height: 50dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.home-card {
  border: 2px solid;
  box-shadow: 0 2px 15px rgb(144, 144, 144);
}
</style>