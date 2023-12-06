<script setup>
import useCatalog from '@/mixins.js/catalog.js';
const { changeCatalog, getFormattedDate } = useCatalog();
const { $axiosPlugin } = useNuxtApp()

const countries = ref({
    objects: [],
    filter: [],
    activeSlide: 0
})

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
    objects: [],
    filter: [],
    activeSlide: 0
})

const catalogLocations = ref({
    objects: [],
    filter: [],
    activeSlide: 0,
})

const getCountries = async() => {
    try {
        const url = `https://one-team.pro/api/new_site/index`
        const response = await $axiosPlugin.get(url)
        countries.value.objects = [...response.data.countries]
        console.log(response.data)

        response.data.countries.forEach(el => {
            countries.value.filter.push({
                name: el.name,
            })
        });
        countries.value.filter[0].active = true


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


        // Инструкции и чек-листы По странам
        response.data.countries.forEach(el => {
            instructions.value.filter.push({
                name: el.name,
            })
        });
        instructions.value.filter[0].active = true


        // Свежие каталоги по локациям
        response.data.countries.forEach(el => {
            catalogLocations.value.filter.push({
                ...el
            })
        });
        catalogLocations.value.filter[0].active = true

    } catch (err) {
        console.error(err)
    }
}



const catalogPrice = ref({
    filter: [
        {
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
            name: 'до 350 000 $ ',
            quantity: null,
            active: true
        },
        {
            objects: [
                {
                    price: 'от 350 000$',
                },
            ],
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
        :subtitle="'По странам'"
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
        :title="'Каталоги и стоимости'"
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