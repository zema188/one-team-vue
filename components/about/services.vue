<script setup>

</script>

<template>
    <div class="services container">
        <img class="services__bg" src="@/assets/images/uslugi.webp">
        <p class="services__title">
            Основные услуги
        </p>
        <div class="services__content">
            <div class="services__content-item">
                <span>
                    1
                </span>
                <p>
                    Жилая недвижимость
                </p>
            </div>
            <div class="services__content-item">
                <span>
                    2
                </span>
                <p>
                    Коммерческая недвижимость
                </p>
            </div>
            <div class="services__content-item">
                <span>
                    3
                </span>
                <p>
                    Зарубежная недвижимость
                </p>
            </div>
            <div class="services__content-item">
                <span>
                    4
                </span>
                <p>
                    Инвестиции
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.services {
    position: relative;
    border-radius: 10px;
    color: #FFF;
    padding: 150px 100px;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(0,0,0, 0.6);
    }
    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        z-index: -1;
    }

    &__title {
        margin-bottom: 30px;
        font-size: 22px;
        line-height: 1.6;
        letter-spacing: 0em;
        opacity: 1;
        z-index: 1;
        position: relative;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        z-index: 1;
        position: relative;
    }

    &__content-item {
        flex: 0 0 calc(50% - 5px);
        display: flex;
        align-items: center;
        gap: 20px;
        & span {
            min-width: 40px;
            min-height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid #1f41a5;
            font-weight: bold;
            color: #1f41a5;
        }
        & p {

        }
    }
}

</style>