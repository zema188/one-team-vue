<script setup>
const props = defineProps({
    layouts: {
        type: Array,
        required: true
    },
    activeValute: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="table">
        <div class="table__body">
            <div class="table__header line">
                <div class="item">
                    <span>
                        Тип
                    </span>
                </div>
                <div class="item">
                    <span>
                        Площадь
                    </span>
                </div>
                <div class="item">
                    <span>
                        Наличие
                    </span>
                </div>
                <div class="item">
                    <span>
                        Стоимость
                    </span>
                </div>
            </div>
            <div class="table__content">
                <div class="row line"
                    v-for="layout in props.layouts" :key="layout.id"
                >
                    <div class="item">
                        <span>
                            {{ layout.building }}
                        </span>
                    </div>
                    <div class="item">
                        <span>
                            {{ layout.total_size }} кв.м
                        </span>
                    </div>
                    <div class="item">
                        <span>
                            1
                        </span>
                    </div>
                    <div class="item valute">
                        <span>
                            {{ layout.price[props.activeValute] }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="date">
            <p>
                Цены обновлены:
            </p>
            <span>
                2023-11-23
            </span>
        </div>
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
.row {
}
.date {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    @media (max-width: 767px) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    & p {

    }
    & span {
        background-color: rgb(255, 255, 255);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-style: solid;
        border-top-width: 2px;
        border-bottom-width: 2px;
        border-left-width: 2px;
        border-right-width: 2px;
        border-color: rgb(45, 121, 254);
        font-size: 15px;
        color: rgb(45, 121, 254)!important;
        padding: 2px 5px;

    }
}
.line {
    display: flex;
    gap: 10px;
    & span {
        font-size: 14px;
    }
}
.item {
    margin-bottom: 20px;
    flex: 0 0 calc(25% - 7px);
    @media (max-width: 767px) {
        flex: 0 0 100px;
    }
}
.table {
    background-color: rgb(210, 227, 255);
    padding: 20px;
    &__body {
        background: #fff;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 15px;
        overflow: auto;
    }

    &__header {
        & span {
            color: #fff;
            background: var(--var-blue);
            border-radius: 8px;
            padding: 5px;
            line-height: normal;
        }
    }

    &__content {
        & span {
            font-weight: bold;
            font-size: 20px;
            @media (max-width: 767px) {
                font-size: 15px;
            }
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