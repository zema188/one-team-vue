<script setup>
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

const changeCatalog = (btn, catalog) => {
    catalog.filterList.forEach(el => {
        if(el.active) {
            el.active = false
        }
    });
    btn.active = true
}


</script>

<template>
    <list-preview/>
    <list/>
    <catalog-location
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено 19.11.2023'"
        :data="catalogLocations"
        @changeFilter="(btn) => changeCatalog(btn, catalogLocations)"
    />
    <instruction
        :title="'Инструкции и чек-листы'"
        :subtitle="'По городам'"
        :data="instructions"
        :filterStyle="{color: '_brown-border'}"
        @changeFilter="(btn) => changeCatalog(btn, instructions)"
    />
    <catalog-val
        :title="'Каталоги по стоимости'"
        :subtitle="'Обновлено 19.11.2023'"
        :data="catalogPrice"
        @changeFilter="(btn) => changeCatalog(btn, catalogPrice)"
    />
    <form-expert/>
    <why/>

</template>

<style lang="scss" scoped>

</style>