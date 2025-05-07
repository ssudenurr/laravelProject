<template>
  <div>
    <img
      :src="artwork.imageSrc"
      :alt="artwork.name"
      class="w-full h-96 object-cover"
    />
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        {{ artwork.name }} / {{ artwork.artist }}
      </h2>

      <p class="text-gray-600 mb-4">
        {{ artwork.description || "No description provided." }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import artworks from "../fake-data/artworks.js"; // Verilerin bulunduğu dosya

// URL'den gelen ID parametresini al
const route = useRoute();
const artworkId = parseInt(route.params.id);

// artwork.js'den ID'ye göre ilgili eseri bul
const artwork = computed(() => {
  return artworks.find((art) => art.id === artworkId);
});
</script>

<style scoped>
/* Styling options */
</style>
