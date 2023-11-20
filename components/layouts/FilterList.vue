<script setup>
const props = defineProps({
    list: {
        type: Object,
        required: true,
    },
    style: {
        type: Object,
        required: false,
    }
})
const emit = defineEmits('changeFilter')
</script>

<template>
    <div class="filter__list">
        <layouts-button
            v-for="(btn, index) in list" :key="index"
            class="filter__list-btn"
            :styles="{ [`btn${props.style.color}`]: btn.active }"
            :type="'button'"
            @click="emit('changeFilter', btn)"
        >
        {{ btn.text }}
        <span>
            <sup>
                {{ btn.quantity }}
            </sup>
        </span>
        </layouts-button>
    </div>
</template>

<style lang="scss" scoped>
.filter {

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 20px;
    }

    &__list-btn {
        border: 2px solid transparent;
        &.btn_blue-border {
            border: 2px solid var(--var-blue);
        }
        &.btn_brown-border {
            border: 2px solid var(--var-brown);
        }
        & span {
            opacity: 0.5;
        }
    }
}

</style>