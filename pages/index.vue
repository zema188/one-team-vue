<script setup>
const filterListCountry = ref([
    {
        text: 'Турция',
        quantity: null,
        active: true
    },
    {
        text: 'Северный Кипр',
        quantity: null,
    }
])

const filterListBest = ref([
    {
        text: 'Анталья',
        quantity: null,
        active: true
    },
    {
        text: 'Аланья',
        quantity: null,
    }
])
</script>

<template>
    <choice-country/>
    <catalog
        :title="'Лучший выбор на 17 ноября'"
        :subtitle="'Выберите направление'"
        :list="filterListCountry"
    />
    <catalog
        :title="'Премьеры рынка'"
        :subtitle="'Выберите направление'"
        :list="filterListBest"
    />
</template>

<style lang="scss" scoped>
</style>