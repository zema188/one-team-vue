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
const filterStyle = ref({color: '_blue-border'})
const emit = defineEmits('changeFilter')


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
            :list="props.data.filter"
            :style="filterStyle"
            @changeFilter="(btn) => emit('changeFilter', btn)"
        />
        <!-- <div class="filter-regions">
            <layouts-button
                v-for="(region, index) of props.data.filter.cities" :key="index"
                class="filter-regions__btn"
                :styles="[{btn_blue: index === 0}]"
                :type="'button'"
            >
            {{ region.name }}
            </layouts-button>
        </div> -->
        <swiper
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
            :allowTouchMove="false"
        >
            <swiper-slide class="slide"
                v-for="(card, index) of props.data.filter" :key="index"
            >
                <span v-if="!card.cities.length">
                    скоро открытие
                </span>
                <catalog-location-swiper
                    :objects="card"
                />
            </swiper-slide>
        </swiper>

    </div>
</template>

<style lang="scss" scoped>
.filter-regions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 15px;
    &__btn {
        font-weight: bold;
        font-size: 16px;
    }
}

</style>