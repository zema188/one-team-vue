<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    }
})

const filterList = ref([
    {
        text: 'Турция',
        quantity: null,
    },
    {
        text: 'Северный Кипр',
        quantity: null,
    }
])
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
            :list="filterList"
        />
        <catalog-swiper/>
    </div>
</template>

<style lang="scss" scoped>
</style>