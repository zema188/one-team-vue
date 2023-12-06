<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    layouts: {
        type: Array,
        required: true
    }
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const slidePerView = ref(10);
    const spaceBetween = ref(10);

    const resizeSwiper = () => {
      const widthWindow = window.innerWidth;
      if (widthWindow > 1023) {
        slidePerView.value = 10;
      } else if (widthWindow <= 1023 && widthWindow > 767) {
        slidePerView.value = 8;
      } else if (widthWindow <= 767 && widthWindow > 539) {
        slidePerView.value = 7;
      } else {
        slidePerView.value = 4;
      }
    };

    const prev = ref(null);
    const next = ref(null);

    onMounted(() => {
      resizeSwiper();
      window.addEventListener('resize', resizeSwiper);
    });

    return {
      thumbsSwiper,
      setThumbsSwiper,
      slidePerView,
      spaceBetween,
      modules: [FreeMode, Navigation, Thumbs],
      prev,
      next,
    };
  },
};
</script>
  
<template>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="spaceBetween"
    :slidesPerView="slidePerView"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="small"
  >
      <swiper-slide
          v-for="layout in layouts" :key="layout.id"
      >
          <img :src="`https://one-team.pro/${layout.photos[0].url}`"/>
      </swiper-slide>
  </swiper>
  <div class="swiper-w">
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="big"
    >
        <swiper-slide
            v-for="layout in layouts" :key="layout.id"
        >
            <img :src="`https://one-team.pro/${layout.photos[0].url}`"/>
        </swiper-slide>
    </swiper>
    <div ref="prev" class="swiper-button swiper-button-prev"></div>
    <div ref="next" class="swiper-button swiper-button-next"></div>
  </div>
</template>

<style scoped lang="scss">
.swiper-w {
  position: relative;
}
.big {
    border-radius: 20px;
    margin-bottom: 10px;
    & .swiper-button-prev {
        display: none !important;
        background: rgb(255, 255, 255, 0.8);
        border-radius: 14px;
        display: flex;
        &::after {
            font-size: 20px;
        }
    }
    & .swiper-slide {
        height: 400px;
        border-radius: 20px;
        & img {
            border-radius: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.small {
    margin-bottom: 20px;
    & .swiper-slide {
        height: 60px;
        width: 60px;
        border-radius: 15px;
        cursor: pointer;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255, 0.5);
            transition: .2s;
        }
        &.swiper-slide-thumb-active{
            &::after {
                background: rgba(255,255,255, 0);
            }
        }
        & img {
            border-radius: 15px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


.swiper-button {
  background: rgba(255,255,255, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    color: var(--var-blue);
    font-size: 30px;
  }
}


</style>