<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import useCatalogSwiper from '@/mixins.js/swiperCatalog.js';
const { onSwiper, goToSlide, swiperInstance } = useCatalogSwiper();


const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    filterStyle: {
        type: Object,
        required: false,
    }
})
const emit = defineEmits('changeFilter')

watch(() => {
  goToSlide(props.data.activeSlide)
});
</script>

<template>
    <div class="catalog container">
        <layouts-block-header>
            <template v-slot:title>
                {{ title }}
            </template>
            <template v-slot:subtitle>
                {{ subtitle }}
            </template>
        </layouts-block-header>
        <layouts-filter-list
            :list="props.data.filter"
            :style="props.filterStyle"
            @changeFilter="(btn) => emit('changeFilter', btn)"
        />
        <swiper
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
        >
            <swiper-slide class="slide"
                v-for="(object, index) of props.data.filter" :key="index"
            >
                <instruction-swiper
                    :object=object
                />
            </swiper-slide>
        </swiper>

    </div>
</template>

<style lang="scss" scoped>

</style>