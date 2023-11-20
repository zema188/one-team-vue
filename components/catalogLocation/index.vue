<script setup>
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
            :list="props.data.filterList"
            :style="filterStyle"
        />
        <div class="filter-regions">
            <layouts-button
                v-for="(region, index) of props.data.regions" :key="index"
                class="filter-regions__btn"
                :styles="[{btn_blue: index === 0}]"
                :type="'button'"
            >
                {{ region }}
            </layouts-button>
        </div>
        <catalog-location-swiper
            :objects="props.data.objects"
        />
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