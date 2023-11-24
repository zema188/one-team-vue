<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

let slidePerView = ref(3)
let spaceBetween = ref(25)

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
const props = defineProps({
    objects: {
        type: Object,
        required: true
    },
})

onMounted(() => {
  window.addEventListener('resize', function(e) {
    const widthWindow = window.innerWidth
    if(widthWindow > 1023) {
      slidePerView.value = 3
    }
    if(widthWindow <= 1023) {
      slidePerView.value = 3
    }
    if(widthWindow <= 767) {
      slidePerView.value = 2
      spaceBetween.value = 15
    }
    if(widthWindow <= 539) {
      slidePerView.value = 1
    }
  });
})

</script>

<template>
    <swiper
        :slides-per-view="slidePerView"
        :space-between="spaceBetween"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide class="slide"
            v-for="(card, index) in props.objects" :key="index"
        >
            <catalog-val-card
                :info="card"
                :number="index"
            />
        </swiper-slide>
    </swiper>
</template>


<style lang="scss" scoped>

</style>