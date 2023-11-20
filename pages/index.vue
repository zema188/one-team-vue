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

const catalogLocations = ref({
    objects: [
        {
            name: 'Аланья',
            date: '19.11.2023',
        },
        {
            name: 'Анталья',
            date: '19.11.2023',
        },
        {
            name: 'Аланья',
            date: '19.11.2023',
        },
        {
            name: 'Анталья',
            date: '19.11.2023',
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
        },
        {
            text: 'ОАЭ',
            quantity: null,
        }
    ],
    regions: [
        'Южное побережье',
        'Западное побережье',
        'Северное побережье',
    ],
})

const catalogPrice = ref({
    objects: [
        {
            price: '50 000 - 100 000$',
        },
        {
            price: '100 000 - 250 000$',
        },
        {
            price: 'от 250 000$',
        },
    ],
    filterList: [
        {
            text: 'до 350 000 $ ',
            quantity: null,
            active: true
        },
        {
            text: 'Премиум',
            quantity: null,
        },
    ],
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
    <catalog-location
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено 19.11.2023'"
        :data="catalogLocations"
    />
    <catalog-val
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено 19.11.2023'"
        :data="catalogPrice"
    />
    <form-specialist/>
    <why/>
    <algorithm/>
    <form-expert/>
</template>

<style lang="scss" scoped>
</style>