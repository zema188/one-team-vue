<script setup>
import useCatalog from '@/mixins.js/catalog.js';
const { $axiosPlugin } = useNuxtApp()
const { changeCatalog, getFormattedDate } = useCatalog();
const route = useRoute()

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
            text: 'Южное побережье',
            quantity: null,
            active: true
        },
        {
            text: 'Западное побережье',
            quantity: null,
        },
        {
            text: 'Северное побережье',
            quantity: null,
        }
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


onMounted(() => {
    getObject()
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
        :subtitle="'По локации'"
        :data="instructions"
        :filterStyle="{color: '_brown-border'}"
        @changeFilter="(btn) => changeCatalog(btn, instructions)"
    />
    <catalog-val
        :title="'Общие каталоги по стоимости'"
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