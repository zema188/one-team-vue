<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
const props = defineProps({
    objects: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <swiper
      :slides-per-view="3.2"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
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