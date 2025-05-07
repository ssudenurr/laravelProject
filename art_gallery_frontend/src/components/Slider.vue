<template>
  <div>
    
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="4"
      :space-between="14"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }"
      navigation
      pagination
      class="mySwiper"
    >
      <SwiperSlide v-for="item in items" :key="item.id">
        <div class="bg-white rounded-lg shadow-md p-4">
          <img v-if="item.imageSrc" :src="item.imageSrc" :alt="item.name" class="w-full h-64 object-cover rounded-md" />
          <h3 class="mt-2 text-center font-semibold text-gray-700">{{ item.name }}</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.mySwiper {
  --swiper-navigation-color: #4f46e5;
  --swiper-pagination-color: #4f46e5;
}
</style>
