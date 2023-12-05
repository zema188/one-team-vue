<script setup>
let sortIsActive = ref(false)
const filter = ref(['По популярности', 'По площади', 'По цене м²', 'Новые'])


const { $axiosPlugin } = useNuxtApp()
const route = useRoute()

const objects = ref({})
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
        objects.value = {...response.data}
        paginationInfo.value = {
            current_page: response.data.current_page,
            from: response.data.from,
            last_page: response.data.last_page,
            per_page: response.data.per_page,
            to: response.data.to,
            total: response.data.total,
        }
        console.log(objects.value)
    } catch (err) {
        console.error(err)
    }
}

onMounted(() => {
    getObjects()
})

</script>

<template>
    <div class="catalog container">
        <div class="catalog__action">
            <div class="filter-icon action__item">
                <icons-base
                    width="26"
                    height="26"
                    icon-name="filter"
                    iconColor="#fff"
                ><icons-filter /></icons-base>
            </div>
            <button class="action__item">
                Карта
            </button>
            <button class="action__item">
                Сброс фильтра
            </button>
        </div>
        <div class="filter-block">
            <list-pagination
                :info="paginationInfo"
                :type="'circle'"
            />
            <div class="sort">
                <div class="sort__header"
                    @click="sortIsActive = !sortIsActive"
                >
                    <span>≡</span>
                    <icons-base
                        :class="{active: sortIsActive}"
                        width="20"
                        height="20"
                        icon-name="arrow"
                    ><icons-arrow /></icons-base>
                </div>
                <div class="sort__list"
                    v-if="sortIsActive"
                >
                    <p class="sort__list-item"
                        v-for="btn of filter" :key="btn"
                        @click="sortIsActive = !sortIsActive"
                    >
                        {{ btn }}
                    </p>
                </div>
            </div>
        </div>
        <div class="list">
            <list-card
                v-for="object of objects.data" :key="object.id" :object="object"
            />
        </div>
        <list-pagination style="margin: 10px auto 0; width: fit-content;"
            :info="paginationInfo"
        />
    </div>
</template>

<style lang="scss" scoped>
.catalog {
    padding-top: 40px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }

&__action {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    & button {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border: 1px solid rgb(132, 158, 193);
        padding: 5px 5px;
        font-size: 12px;
        color: rgb(103, 132, 170)!important;
    }

}
}
.action__item {
    transition: .2s;
    &:hover {
        background: #fafbff;
    }
}
.container {
}
.filter-icon {
    background: var(--var-blue-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 5pxc;
}

.filter-block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
}
.sort {
    position: relative;
    padding-top: 10px;
    @media (max-width: 539px) {
        margin: 0 0 0 auto;
    }
    &__header {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border: 1px solid rgb(132, 158, 193);
        padding: 5px 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        & svg {
            transition: .2s;
            &.active {
                transform: rotate(180deg);
            }
        }
    }

    &__list {
        position: absolute;
        right: 0;
        background: #fff;
        z-index: 2;
        top: 100%;
        min-width: max-content;
        max-width: 200px;
        color: rgb(103, 132, 170);
        font-size: 12px;
        border: none;
        border-top: none;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0px 0px 4px 0px rgba(81, 149, 255, 0.2);
    }

    &__list-item {
        padding: 10px;
        transition: .2s;
        cursor: pointer;
        &:hover {
            background-color: #f5f5f5;
        }
    }
}

.list {
    padding-top: 50px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
}



</style>