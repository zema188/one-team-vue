<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


let slidePerView = ref(3.2)
let spaceBetween = ref(30)

const props = defineProps({
    objects: {
        type: Array,
        required: true
    },
})

const resizeSwiper = () => {
  const widthWindow = window.innerWidth
    if(widthWindow > 1023) {
      slidePerView.value = 3.2
    }
    if(widthWindow <= 1023) {
      slidePerView.value = 2.4
    }
    if(widthWindow <= 767) {
      slidePerView.value = 1.5
      spaceBetween.value = 15
    }
    if(widthWindow <= 539) {
      slidePerView.value = 1.2
    }
}

onMounted(() => {
  resizeSwiper()
  window.addEventListener('resize', function(e) {
    resizeSwiper()
  });
})

</script>

<template>
    <swiper
      :slides-per-view="slidePerView"
      :space-between="spaceBetween"
    >
      <swiper-slide class="slide"
        v-for="(card, index) in props.objects" :key="index"
      >
        <catalog-card
          :object="card"
        />
      </swiper-slide>
    </swiper>
</template>
    
<style lang="scss" scoped>
.swiper {
  border-radius: 20px;
}
</style>