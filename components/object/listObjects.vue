<script setup>
const props = defineProps({
    typeObject: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="list-w container">
        <div class="list__header">
            <div class="list__header-title">
                <slot name="title">
                    Лучшие объекты
                </slot>
            </div>
            <div class="list__header-subtitle">
                <slot name="subtitle">
                    на 23.11.2023
                </slot>
            </div>
        </div>
        <div class="list"
            v-if="props.typeObject === 'big'"
        >
            <object-list-item
                v-for="(card, index) of [1,2,3,4,5,6]" :key="index"
            />
        </div>
        <div class="list"
            v-if="props.typeObject === 'small'"
            :class="props.typeObject"
        >
            <object-list-item-small
                v-for="(card, index) of [1,2,3,4,5,6]" :key="index"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-w {
    padding-top: 50px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 767px) {

    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
}
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    &.small {
        gap: 40px;
        @media (max-width: 767px) {
            gap: 20px;
        }
    }
    &__header {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        @media (max-width: 767px) {
            margin-bottom: 20px;
        }
        @media (max-width: 539px) {
            margin-bottom: 10px;
        }
    }

    &__header-title {
        background-color: rgb(238, 29, 151);
        border-radius: 15px;
        font-size: 16px;
        color: rgb(255, 255, 255);
        box-shadow: 0px 3px 9px 0px rgba(238, 29, 151, 0.35);
        padding: 9px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        @media (max-width: 767px) {
            font-size: 14px;
            padding: 3px 5px;
        }
    }

    &__header-subtitle {
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        border: 2px solid rgb(0, 45, 255);
        font-size: 16px;
        color: rgb(0, 0, 0);
        box-shadow: 0px 3px 9px 0px rgba(238, 29, 151, 0.35);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 9px 10px;
        text-transform: uppercase;
        @media (max-width: 767px) {
            font-size: 14px;
            padding: 3px 5px;
        }
    }
}


</style>