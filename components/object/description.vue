<script setup>
const props = defineProps({
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="text">
        {{ props.description }}
    </div>
    <div class="details__text-footer">
        <p>
            Полный комплект
        </p>
        <span>
            Richmond Villas
        </span>
        <button>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
        </button>
    </div>
    <button class="btn-get">
        <span>
            Получить свежий прайс-лист и график оплаты
        </span>
        <p>
            ТМ
        </p>
    </button>
</template>

<style lang="scss" scoped>
.details__text-footer {
    width: fit-content;
    margin: 0 auto;
    & p {
        font-size: 20px;
        color: rgb(45, 121, 254);
        text-align: center;
        margin-top: 20px;
    }
    & span {
        color: rgb(45, 121, 254);
        text-align: center;
        display: block;
    }
    & button {
        margin: 20px auto 20px;
        background-color: rgba(51, 99, 198, 0.6);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-style: solid;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-left-width: 1px;
        border-right-width: 1px;
        border-color: rgb(138, 183, 247);
        box-shadow: 0px 0px 15px 0px rgba(45, 121, 254, 0.72);
        width: 65px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        & svg {
            width: 30px;
            height: 30px;
        }
    }
}

.btn-get {
    margin: 20px auto 0;
    color: var(--var-blue);
    background-color: rgba(3, 41, 105, 0);
    border-color: rgb(235, 235, 235);
    color: rgb(45, 121, 254)!important;
    display: flex;
    background-color: rgba(3, 41, 105, 0);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
    border-color: rgb(235, 235, 235);
    padding: 35px 35px;
    font-size: 15px;
    color: rgb(8, 88, 226);
    box-shadow: 0px 0px 14px -5px rgba(8, 88, 226, 0.72);
    width: max-content;
    transition: .2s;
    align-items: center;
    gap: 7px;
    &:hover {
        transform: scale(1.1);
    }
    & p {
        font-weight: 700;
        font-size: 20px;
    }
}
</style>