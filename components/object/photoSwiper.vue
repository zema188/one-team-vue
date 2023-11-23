<script>
import { ref } from 'vue';
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
    setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs],
    };
    },
};
</script>
  
<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="big"
    >
        <swiper-slide>
            <img src="@/assets/images/obj-1.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-2.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-3.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-4.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-5.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-6.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-7.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-8.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-9.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-10.webp"/>
        </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="10"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="small"
    >
        <swiper-slide>
            <img src="@/assets/images/obj-1.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-2.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-3.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-4.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-5.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-6.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-7.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-8.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-9.webp"/>
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/obj-10.webp"/>
        </swiper-slide>
    </swiper>
</template>

<style scoped lang="scss">
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
</style>