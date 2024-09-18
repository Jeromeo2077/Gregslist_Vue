<script setup>
import { homesService } from '@/services/HomesService.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';



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
  <h1>Homes Page</h1>
</template>


<style lang="scss" scoped></style>