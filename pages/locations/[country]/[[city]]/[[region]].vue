<script setup>
import useCatalog from '@/mixins.js/catalog.js';
import { usePopup } from '~/stores/popup'

const { changeCatalog, getFormattedDate } = useCatalog();
const popupStore = usePopup()
const { $axiosPlugin } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const catalogData = ref({})
const paginationInfo = ref({})
const getObjects = async() => {
    try {
        let url = null
        if(route.params.region) {
            // url = `https://one-team.pro/api/houses/catalog?country=${route.params.country}&page=${route.query.page}`
        } else if(route.params.city) {
            url = `https://one-team.pro/api/houses/catalog?city=${route.params.city}&page=${route.query.page}`
        } else {
            url = `https://one-team.pro/api/houses/catalog?country=${route.params.country}&page=${route.query.page}`
        }
        const response = await $axiosPlugin.get(url)
        catalogData.value.length = 0
        catalogData.value = {...response.data}
        paginationInfo.value.length = 0
        paginationInfo.value = {
            current_page: response.data.current_page,
            from: response.data.from,
            last_page: response.data.last_page,
            per_page: response.data.per_page,
            to: response.data.to,
            total: response.data.total,
        }
        console.log(catalogData.value)
    } catch (err) {
        console.error(err)
    }
}


const changePage = async (numberPage) => {
    await router.push({
        query: {
            page: numberPage
        }
    })
    getObjects()
}

const openMap = () => {
    popupStore.disableScroll('catalogMap')
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


watch(
    () => route.params,
    () => {
        getObjects()
    }
)

onMounted(() => {
    getObjects()
    getCountries()
})
</script>

<template>
    <list-preview
        :catalogData="catalogData"
    />
    <list
        :objects="catalogData.data"
        :paginationInfo="paginationInfo"
        @changePage="(numberPage) => changePage(numberPage)"
        @openMap="openMap"
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

    <list-map/>

</template>

<style lang="scss" scoped>

</style>