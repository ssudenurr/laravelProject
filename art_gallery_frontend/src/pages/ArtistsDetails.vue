<template>
  <div>

  <!-- Sanatçı bilgileri -->
  <div class="p-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-2 text-center">
      {{ artist.name }}
    </h2>
    <p class="text-gray-800 mb-4">
      {{ artist.description || "No description provided." }}
    </p>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Artist's Artworks</h2>
  </div>

  <!-- Sanatçının eserleri -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full p-4"
  >
    <div
      v-for="artwork in artist.artworks"
      :key="artwork.id"
      class="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        :src="`/images/${artwork.imageSrc}`"
        :alt="artwork.name"
        class="w-full h-64 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800">
          {{ artwork.name }}
        </h3>
        <routerLink
          :to="{ name: 'artworksDetails', params: { id: artwork.id } }"
          class="text-blue-500 hover:underline"
        >
          View Details
        </routerLink>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import artists from "../fake-data/artists.js"; // Verilerin bulunduğu dosya

// URL'den gelen ID parametresini al
const route = useRoute();
const artistId = parseInt(route.params.id);

const artist = computed(() => {
  return artists.find((art) => art.id === artistId);
});
</script>

<style scoped>
/* Styling options */
</style>
