<script setup>
const btns = ref([1,2,3])
let activePage = ref(2)
const props = defineProps({
    type: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="pagination"
        :class="{circle: props.type === 'circle'}"
    >
        <button class="text">
            Назад
        </button>
        <button
            v-for="btn of btns" :key="btn"
            class="number"
            :class="{active: btn === activePage}"
        >
            {{ btn }}
        </button>
        <span>
            ...
        </span>
        <button class="number">
            20
        </button>
        <button class="text">
            Вперед
        </button>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: 5px;
    padding-top: 10px;
    height: fit-content;
    flex: 1;
    &.circle {
        & .text {
            border-radius: 30px;
        }
        & .number {
            min-width: 38px;
            min-height: 38px;
            max-height: 38px;
            border-radius: 50%;
            @media (max-width: 767px) {
                min-width: 27px;
                min-height: 27px;
                max-height: 27px;
                font-size: 13px;
            }
        }
    }
    & button {
        color: rgb(103, 132, 170);
        background: rgba(255, 255, 255, 0.78);
        border: 1px solid rgb(8, 84, 189);
        transition: all .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
            font-size: 15px;
        }
        &:hover {
            background: rgb(8, 84, 189);
            color: #fff;
        }
    }
    & .text {
        border-radius: 15px;
        padding: 6px 10px;
        @media (max-width: 767px) {
            padding: 2px 10px;
        }
    }
    & .number {
        min-width: 50px;
        min-height: 50px;
        max-height: 50px;
        border-radius: 15px;
        @media (max-width: 767px) {
            min-width: 30px;
            min-height: 30px;
            max-height: 30px;
            border-radius: 10px;
        }
        &.active {
            background: rgb(8, 84, 189);
            color: #fff;
        }
    }
}

span {
    display: flex;
    align-items: flex-end;
    margin: 0 15px;
    @media (max-width: 767px) {
        margin: 0 5px;
    }
}

</style>

