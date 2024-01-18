<template>
  <div class="flex w-[600px] ml-[100px] gap-5">
    <div v-for="(item, i) in 4" :key="i" class="innerImage flex">
      <img
        :class="getIsopenIndexComp.includes(i.toString()) ? 'avantageActive' : ''"
        :src="'/src/assets/images/avantageIMG' + (i + 1) + '.jpg'"
        class="w-[100px] object-cover h-full hover:w-[200px] hover:rounded-[50px] transition-all ease-in-out object-cover rounded-[100px]"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '../store/store.js'
const getIsopenIndexComp = computed(() => {
  return store.getters.getIsopenIndex
})
</script>

<style>
.avantageActive {
  width: 200px !important;
  border-radius: 50px !important;
}
</style>
