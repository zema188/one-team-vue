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
const emit = defineEmits('changeFilter')
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
            :list="props.data.filter"
            :style="props.filterStyle"
            @changeFilter="(btn) => emit('changeFilter', btn)"
        />
        <choice-country-swiper
            :activeSlide="props.data.activeSlide"
            :data="props.data.objects"
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
        @media (max-width: 899px) {
            flex: 0 0 100%;
        }
    }

    & .input-w {
        flex: 1;
        max-width: 400px;
    }
}
</style>