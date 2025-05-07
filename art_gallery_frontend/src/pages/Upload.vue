
<script setup>
import { PhotoIcon } from '@heroicons/vue/24/solid'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { ref } from "vue";

const artworkSource = ref("my-artwork");
const artistName = ref("");
</script> 
<template>
  <form>
    <div class="min-h-screen flex flex-col py-10 px-4">
      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900"
              >About</label
            >
            <div class="mt-2">
              <textarea
                name="about"
                id="about"
                rows="3"
                placeholder="Enter a description"
                class="block w-full border border-gray-300 bg-white rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="cover-photo"
              class="block text-sm/6 font-medium text-gray-900"
              >Upload Artwork</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            >
              <div class="text-center">
                <PhotoIcon
                  class="mx-auto size-12 text-gray-300"
                  aria-hidden="true"
                />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <!-- Radio Buttons -->
          <div>
            <fieldset>
              <legend class="text-sm font-medium text-gray-900 mb-4">
                Artwork Source
              </legend>
              <div class="space-y-4">
                <div class="flex items-center gap-x-3">
                  <input
                    id="my-artwork"
                    name="artwork-source"
                    type="radio"
                    value="my-artwork"
                    v-model="artworkSource"
                    class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                  <label
                    for="my-artwork"
                    class="block text-sm font-medium text-gray-900"
                  >
                    My Artwork
                  </label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input
                    id="someone-else-artwork"
                    name="artwork-source"
                    type="radio"
                    value="someone-else-artwork"
                    v-model="artworkSource"
                    class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  />
                  <label
                    for="someone-else-artwork"
                    class="block text-sm font-medium text-gray-900"
                  >
                    Someone Else's Artwork
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <!-- Artist Name -->
          <div>
            <label
              for="artist-name"
              class="block text-sm font-medium text-gray-900"
            >
              Artist name
            </label>
            <div class="mt-2">
              <input
                type="text"
                id="artist-name"
                name="artist-name"
                v-model="artistName"
                :disabled="artworkSource !== 'someone-else-artwork'"
                placeholder="Enter artist name"
                autocomplete="given-name"
                class="block w-2/4 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>
