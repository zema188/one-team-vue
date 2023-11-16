<script setup>
// const filterList = ref(['Россия','Турция','Кипр','ОАЭ','Тайланд','Бали','Черногория','Испания',])
const filterList = ref([
    {
        text: 'Турция',
        quantity: null,
    },
    {
        text: 'Северный Кипр',
        quantity: null,
    }
])
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
            :list="filterList"
        />
        <choice-country-swiper/>
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