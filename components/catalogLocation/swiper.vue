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
        type: Object,
        required: true
    },
})
</script>

<template>
    <swiper
        :slides-per-view="4"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide class="slide"
            v-for="(card, index) in props.objects" :key="index"
        >
            <catalog-location-card
                :info="card"
                :number="index"
            />
        </swiper-slide>
    </swiper>
</template>


<style lang="scss" scoped>

</style>