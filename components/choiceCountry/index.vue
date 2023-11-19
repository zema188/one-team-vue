<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    filterStyle: {
        type: Object,
        required: false,
    }
})
</script>
 
<template>
    <div class="choice-country container">
        <div class="choice-country__header">
            <p class="choice-country__title title">
                Выберите страну или закажите экспертизу
            </p>
            <div class="input-w">
                <input placeholder="Введите название объекта">
            </div>
        </div>
        <layouts-filter-list
            :list="props.data.filterList"
            :style="props.filterStyle"
        />
        <choice-country-swiper
            
        />
    </div>
</template>

<style lang="scss" scoped>
.choice-country {
    &__header {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    &__title {

    }

    & .input-w {
        flex: 1;
        max-width: 400px;
    }
}
</style>