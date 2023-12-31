import { ref } from 'vue';

export default function useCatalogSwiper() {
    const swiperInstance = ref()

    function goToSlide(index) {
      if(swiperInstance.value) {
        swiperInstance.value.slideTo(index)
      }
    }

    function onSwiper(swiper) {
      swiperInstance.value = swiper
    }
    
    return {
        swiperInstance,
        goToSlide,
        onSwiper,
    };
}
