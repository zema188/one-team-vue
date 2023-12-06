<script setup>
import useCatalog from '@/mixins.js/catalog.js';
const { $axiosPlugin } = useNuxtApp()
const { changeCatalog, getFormattedDate } = useCatalog();
const route = useRoute()

const object = ref({})
const bestObjects = ref([])
const commissionedObjects = ref([])
const getObject = async() => {
    try {
        const url = `https://one-team.pro/api/houses/detail?country=${route.params.country}&id=${route.params.id}&locale=ru`
        const response = await $axiosPlugin.get(url)
        object.value = {...response.data.detail}
        bestObjects.value = [...response.data.the_best]
        commissionedObjects.value = [...response.data.commissioned]
        console.log(response.data)
    } catch (err) {
        console.error(err)
    }
}

const catalogLocations = ref({
    objects: [],
    filter: [],
    activeSlide: 0,
})

const instructions = ref({
    objects: [],
    filter: [],
    activeSlide: 0
})

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

const getCountries = async() => {
    try {
        const url = `https://one-team.pro/api/new_site/index`
        const response = await $axiosPlugin.get(url)
        console.log(response.data)

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


onMounted(() => {
    getObject()
    getCountries()
})
</script>

<template>
    <object-card
        :object="object"
    />
    <catalog-location
        :title="'Свежие каталоги по локациям'"
        :subtitle="'Обновлено ' + new Date().toLocaleDateString()"
        :data="catalogLocations"
        @changeFilter="(btn) => changeCatalog(btn, catalogLocations)"
    />
    <instruction
        :title="'Инструкции и чек-листы'"
        :subtitle="'По странам'"
        :data="instructions"
        :filterStyle="{color: '_brown-border'}"
        @changeFilter="(btn) => changeCatalog(btn, instructions)"
    />
    <catalog-val
        :title="'Каталоги и стоимости'"
        :subtitle="'Обновлено ' + new Date().toLocaleDateString()"
        :data="catalogPrice"
        @changeFilter="(btn) => changeCatalog(btn, catalogPrice)"
    />
    <form-expert/>
    <why/>
    <object-list-objects
        :typeObject="'big'"
        :objects="bestObjects"
    >
        <template v-slot:title>
            Лучшие объекты
        </template>
        <template v-slot:subtitle>
            на {{ new Date().toLocaleDateString() }}
        </template>
    </object-list-objects>
    <object-list-objects
        :typeObject="'small'"
        :objects="commissionedObjects"
    >
        <template v-slot:title>
            Сданные объекты
        </template>
        <template v-slot:subtitle>
            на {{ new Date().toLocaleDateString() }}
        </template>
    </object-list-objects>
</template>

<style lang="scss" scoped>

</style>