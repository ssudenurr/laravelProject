<script setup>
import { ref } from "vue";
import artworks from "../fake-data/artworks.js";

const artworksData = ref(artworks);
</script>

<template>
  <div >
    <h1 class="text-3xl font-bold text-center mb-10">Artworks</h1>

    <div
      class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
    >
      <!-- Artwork Cards -->
      <div
        v-for="artwork in artworksData"
        :key="artwork.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="artwork.imageSrc"
          :alt="artwork.name"
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-800">
            {{ artwork.name }}
          </h3>
          <routerLink :to="{ name: 'artworksDetails', params: { id: artwork.id } }" class="text-blue-500 hover:underline"
            >View Details</routerLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
  

  
