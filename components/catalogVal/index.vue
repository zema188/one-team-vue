<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import useCatalogSwiper from '@/mixins.js/swiperCatalog.js';
const { onSwiper, goToSlide, swiperInstance } = useCatalogSwiper();

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
})
const emit = defineEmits('changeFilter')

const filterStyle = ref({color: '_blue-border'})

watch(() => {
  goToSlide(props.data.activeSlide)
});
</script>

<template>
    <div class="catalog container">
        <layouts-block-header>
            <template v-slot:title>
                {{ props.title }}
            </template>
            <template v-slot:subtitle>
                {{ props.subtitle }}
            </template>
        </layouts-block-header>
        <layouts-filter-list
            :list="data.filterList"
            :style="filterStyle"
            @changeFilter="(btn) => emit('changeFilter', btn)"
        />

        <swiper
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
        >
            <swiper-slide class="slide"
                v-for="(card, index) of [1,2,3,4,5]" :key="index"
            >
                <catalog-val-swiper
                    :objects="data.objects"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>

</style>