<script setup>
import { ref, reactive } from "vue";
import users from "../fake-data/users";

import { TrashIcon } from '@heroicons/vue/24/solid'

const editMode = ref(false);

// Düzenlenebilir alanlar için reaktif nesne
const editableField = reactive({
  email: "",
  fullname: "",
  username: "",
  bio: "",
});

// Sayfa açıldığında editableField'i kullanıcı bilgileriyle doldur
function loadEditableFields() {
  editableField.email = users.email;
  editableField.fullname = users.name;
  editableField.username = users.username;
  editableField.bio = users.bio;
}

// Edit moduna girildiğinde alanları doldur
function toggleEditMode() {
  editMode.value = !editMode.value;
  if (editMode.value) {
    loadEditableFields();
  }
}

// Kaydet butonu
function saveChanges() {
  users.email = editableField.email;
  users.name = editableField.fullname;
  users.username = editableField.username;
  users.bio = editableField.bio;
  editMode.value = false;
}
</script>



<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Profile Header -->
      <div class="flex flex-col md:flex-row items-start gap-6 p-6">
        <img class="w-32 h-32 rounded-full object-cover border-4 border-indigo-500" :src="users.image" alt="Profile" />
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left w-full relative">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 v-if="!editMode" class="text-2xl font-bold text-gray-800">
                {{ users.name }}
              </h2>
              <input v-else v-model="editableField.fullname"
                class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />

              <p v-if="!editMode" class="text-gray-600">
                @{{ users.username }}
              </p>
              <input v-else v-model="editableField.username"
                class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <!-- Düzenleme ikonu -->
            <button @click="toggleEditMode" class="text-gray-500 hover:text-indigo-600 mt-2 md:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.232 5.232l3.536 3.536M9 13h3l9-9a1.5 1.5 0 00-2.121-2.121l-9 9v3z" />
              </svg>
            </button>
          </div>

          <p v-if="!editMode" class="mt-2 text-gray-700">{{ users.bio }}</p>
          <textarea v-else v-model="editableField.bio" rows="3"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <!-- Contact Info -->
      <div class="border-t border-gray-200 px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
        <div v-if="!editMode">
          <p class="text-gray-600"><strong>Email:</strong> {{ users.email }}</p>
        </div>
        <div v-else>
          <label class="text-m font-semibold text-gray-600">Email: </label>
          <input v-model="editableField.email" type="email"
            class="border border-gray-300 rounded-lg px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <!-- Save Changes Button -->
      <div v-if="editMode" class="px-6 py-4 flex justify-end">
        <button @click="saveChanges" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Kaydet
        </button>
      </div>

      <!-- Artworks -->
      <div class="border-t border-gray-200 px-6 py-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Artworks</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="art in users.artworks" :key="art.id"
            class="relative bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <!-- Silme butonu -->
            <button class="absolute top-2 right-2 text-gray-500 hover:text-red-600" @click="deleteArtwork(art.id)"
              title="Sil">
              <TrashIcon @click="deleteArtwork(art.id)" class="w-6 h-6" />
            </button>
            <RouterLink :to="{ name: 'artworksDetails', params: { id: art.id } }">
              <img :src="art.imageSrc" :alt="art.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h4 class="text-gray-800 font-semibold">{{ art.name }}</h4>
                <p class="text-sm text-gray-600">{{ art.description }}</p>
              </div>
            </RouterLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Gerekirse özelleştirilebilir */
</style>