<script setup>
import {ref} from 'vue'
import advantagesSectionVue from '@/components/imageCard.vue'
const avantages = ref([
  {
    index: "0",
    isOpen: false,
    title: "Discover Your Freedom",
    desc: "Explore the city by renting a bike. Enjoy the taste of freedom with speed, flexibility, and environmentally friendly transportation.",
    img: {
      imgType: "1",
      width: "40",
      height: "40",
    },
  },
  {
    index: "1",
    isOpen: false,
    title: "Practical and Cost-Effective Option",
    desc: "Bike rental offers a practical and cost-effective option. Avoid city traffic and keep the costs low.",
    img: {
      imgType: "2",
      width: "40",
      height: "40",
    },
  },
  {
    index: "2",
    isOpen: false,
    title: "Healthy and Fun Journeys",
    desc: "Embark on a healthy and enjoyable journey with bike rentals. Preserve both your well-being and the environment.",
    img: {
      imgType: "3",
      width: "40",
      height: "40",
    },
  },
  {
    index: "3",
    isOpen: false,
    title: "Effortless and Enjoyable Riding",
    desc: "Experience effortless and enjoyable rides through bike rentals. Discover the joy of convenient and pleasurable transportation.",
    img: {
      imgType: "4",
      width: "40",
      height: "40",
    },
  },
]);

</script>

<template>
          <div class="w-[600px]">
            <advantagesSectionVue
            :avantages="avantages"
            :item="item"
            v-for="(item, index) in avantages"
            :key="index"
          ></advantagesSectionVue>
          </div>
</template>
