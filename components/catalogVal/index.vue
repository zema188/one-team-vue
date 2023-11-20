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
            :list="data.filterList"
            :style="filterStyle"
        />
        <catalog-val-swiper
            :objects="data.objects"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>