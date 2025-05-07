<template>
  <div class="bg-white h-screen">
    <!-- Artworks Slider -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Featured Artworks
      </h2>
      <slider :items="artworks"></slider>
    </div>
      <!-- Artists Slider -->

    <div class="pt-10 max-h-150">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Featured Artists</h2>
      <slider :items="artist" ></slider>
    </div>
  </div>
</template>

<script setup>
import Slider from "../components/Slider.vue";
import artworksData from "../fake-data/artworks.js";
import artistData from "../fake-data/artists.js";
import { ref } from "vue";

const artworks = ref(artworksData);
const artist = ref(artistData);
</script>
