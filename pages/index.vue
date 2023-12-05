<script setup>
import useCatalog from '@/mixins.js/catalog.js';
const { changeCatalog, getFormattedDate } = useCatalog();
const { $axiosPlugin } = useNuxtApp()

const countries = ref({
    objects: [],
    filter: [],
    activeSlide: 0
})
const getCountries = async() => {
    try {
        const url = `https://one-team.pro/api/new_site/index`
        const response = await $axiosPlugin.get(url)
        countries.value.objects = [...response.data.countries]
        response.data.countries.forEach(el => {
            countries.value.filter.push({
                name: el.name,
            })
        });
        countries.value.filter[0].active = true
        console.log(response.data)

        // лучшие 
        response.data.cities.forEach(el => {
            bestСhoice.value.filter.push({
                name: el.name,
                quantity: el.best_choice.length
            })
            bestСhoice.value.objects.push(
                [...el.best_choice]
            )
            bestСhoice.value.filter[0].active = true
        });

        // премьеры 
        response.data.cities.forEach(el => {
            premieres.value.filter.push({
                name: el.name,
                quantity: el.market_premier.length
            })
            premieres.value.objects.push(
                [...el.market_premier]
            )
            premieres.value.filter[0].active = true
        });
    } catch (err) {
        console.error(err)
    }
}

const bestСhoice = ref({
    objects: [],
    filter: [],
    activeSlide: 0
})


const premieres = ref({
    objects: [],
    filter: [],
    activeSlide: 0
})

const instructions = ref({
    filterList: [
        {
            name: 'Аланья',
            quantity: 14,
            active: true
        },
        {
            name: 'Анталья',
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
            name: 'Турция',
            quantity: null,
            active: true
        },
        {
            name: 'Кипр',
            quantity: null,
        },
        {
            name: 'ОАЭ',
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
            name: 'до 350 000 $ ',
            quantity: null,
            active: true
        },
        {
            name: 'Премиум',
            quantity: null,
        },
    ],
})

onMounted(() => {
    getCountries()
})


</script>

<template>
    <choice-country
        :data="countries"
        :filterStyle="{color: '_blue-border'}"
        @changeFilter="(btn) => changeCatalog(btn, countries)"
    />
    <catalog
        :title="'Лучший выбор на ' + getFormattedDate()"
        :subtitle="'Выберите направление'"
        :data="bestСhoice"
        :filterStyle="{color: '_blue-border'}"
        @changeFilter="(btn) => changeCatalog(btn, bestСhoice)"
    />
    <catalog
        :title="'Премьеры рынка'"
        :subtitle="'Выберите направление'"
        :data="premieres"
        :filterStyle="{color: '_blue-border'}"
        @changeFilter="(btn) => changeCatalog(btn, premieres)"
    />
    <instruction
        :title="'Инструкции и чек-листы'"
        :subtitle="'По городам'"
        :data="instructions"
        :filterStyle="{color: '_brown-border'}"
        @changeFilter="(btn) => changeCatalog(btn, instructions)"
    />
    <catalog-location
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено ' + new Date().toLocaleDateString()"
        :data="catalogLocations"
        @changeFilter="(btn) => changeCatalog(btn, catalogLocations)"
    />
    <catalog-val
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено ' + new Date().toLocaleDateString()"
        :data="catalogPrice"
        @changeFilter="(btn) => changeCatalog(btn, catalogPrice)"
    />
    <form-specialist/>
    <why/>
    <algorithm/>
    <form-expert/>
</template>

<style lang="scss" scoped>
</style>