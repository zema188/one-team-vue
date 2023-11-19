<template>
    <swiper
      :slides-per-view="3.2"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="slide"
        v-for="(card, index) in [1,2,3,4,5,6,7]" :key="index"
      >
        <catalog-card
        />
      </swiper-slide>
    </swiper>
</template>
<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
</script>
    
<style lang="scss" scoped>
.swiper {
  border-radius: 20px;
}
</style>