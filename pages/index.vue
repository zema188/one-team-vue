<script setup>
const countries = ref({
    objects: [
        {

        },
    ],
    filterList: [
        {
            text: 'Турция',
            quantity: null,
            active: true
        },
        {
            text: 'Кипр',
            quantity: null,
        }
    ]
})

const bestСhoice = ref({
    objects: [
        {
            country: 'Аланья',
            region: 'Каргыджак',
            squareMeter: '4143 $/м²',
            name: 'Richmond Villas',
            square: 'от 268 - до 377 м',
            price: 'от 1110439 $',
            id: '291',
            quantity: '16',
        },
        {
            country: 'Аланья',
            region: 'Каргыджак',
            squareMeter: '4143 $/м²',
            name: 'Richmond Villas',
            square: 'от 268 - до 377 м',
            price: 'от 1110439 $',
            id: '292',
            quantity: '20',
        },
    ],
    filterList: [
        {
            text: 'Аланья',
            quantity: 14,
            active: true
        },
        {
            text: 'Анталья',
            quantity: 15,
        }
    ]
})


const premieres = ref({
    objects: [
        {
            country: 'Аланья',
            region: 'Оба',
            squareMeter: '2992 $/м²',
            name: 'The Colosseum',
            square: 'от 268 - до 377 м',
            price: 'от 1110439 $',
            id: '291',
            quantity: '16',
        },
        {
            country: 'Аланья',
            region: 'Кызлар Пынары',
            squareMeter: '5432 $/м²',
            name: 'Miss Cleopatra',
            square: 'от 268 - до 377 м',
            price: 'от 1110439 $',
            id: '292',
            quantity: '20',
        },
    ],
    filterList: [
        {
            text: 'Аланья',
            quantity: 14,
            active: true
        },
        {
            text: 'Анталья',
            quantity: 15,
        }
    ]
})

const instructions = ref({
    filterList: [
        {
            text: 'Аланья',
            quantity: 14,
            active: true
        },
        {
            text: 'Анталья',
            quantity: 15,
        }
    ]
})

</script>

<template>
    <choice-country
        :data="countries"
        :filterStyle="{color: '_blue-border'}"
    />
    <catalog
        :title="'Лучший выбор на 17 ноября'"
        :subtitle="'Выберите направление'"
        :data="bestСhoice"
        :filterStyle="{color: '_blue-border'}"
    />
    <catalog
        :title="'Премьеры рынка'"
        :subtitle="'Выберите направление'"
        :data="premieres"
        :filterStyle="{color: '_blue-border'}"
    />
    <instruction
        :title="'Инструкции и чек-листы'"
        :subtitle="'По городам'"
        :data="instructions"
        :filterStyle="{color: '_brown-border'}"
    />
</template>

<style lang="scss" scoped>
</style>