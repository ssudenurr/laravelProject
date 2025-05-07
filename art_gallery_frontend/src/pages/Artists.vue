<script setup>
import { ref } from "vue";
import artists from "../fake-data/artists.js";

const artistsData = ref(artists);
</script>

<template>
  <div >
    <h1 class="text-3xl font-bold text-center mb-10">Artists</h1>

    <div
      class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
    >
      <!-- Artists Cards -->
      <div
        v-for="artist in artistsData"
        :key="artist.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-800">
            {{ artist.name }}
          </h3>
          <routerLink :to="{ name: 'artistDetails', params: { id: artist.id } }" class="text-blue-500 hover:underline"
            >View Details</routerLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
  

  
