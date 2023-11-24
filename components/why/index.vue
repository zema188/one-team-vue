<script setup>

</script>

<template>
    <div class="why container">
        <p class="why__title title title_black">
            Почему выбирают нас
        </p>
        <div class="why__top">
            <div class="why__top-item">
                <!-- <icons-base
                    class="icon"
                    width="260"
                    height="260"
                    icon-name="DigitalProductManager"
                ><icons-DigitalProductManager /></icons-base> -->
                <img src="@/assets/images/digital_product_manager.svg">
                <p class="why__top-item-subtitle">
                    Информация о налогах
                </p>
                <div class="line"></div>
                <p class="why__top-item-desc">
                    Сообщаем о всех налогах в связи со сделкой и дальнейшим владением недвижимости в выбранной вами стране
                </p>
            </div>
            <div class="why__top-item">
                <!-- <icons-base
                    class="icon"
                    width="260"
                    height="260"
                    icon-name="FrontEndEngineer"
                ><icons-FrontEndEngineer /></icons-base> -->
                <img src="@/assets/images/front_end_engineer.svg">
                <p class="why__top-item-subtitle">
                    Объективная оценка стран
                </p>
                <div class="line"></div>
                <p class="why__top-item-desc">
                    Рассказываем о плюсах, минусах и специфических особенностях другой страны
                </p>
            </div>
            <div class="why__top-item">
                <!-- <icons-base
                    class="icon"
                    width="260"
                    height="260"
                    icon-name="BackEndEngineer"
                ><icons-BackEndEngineer /></icons-base> -->
                <img src="@/assets/images/back_end_engineer.svg">
                <p class="why__top-item-subtitle">
                    Надежные партнеры
                </p>
                <div class="line"></div>
                <p class="why__top-item-desc">
                    Обширная партнёрская сеть. Под ваш запрос подберём любую недвижимость.
                </p>
            </div>
        </div>
        <div class="line"></div>
        <div class="why__bottom">
            <div class="why__bottom-item _blue">
                <div class="why__bottom-item-content">
                    12 лет
                </div>
                <div class="vertical-line"></div>
                <div class="why__bottom-item-desc">
                    работаем с российской недвижимостью
                </div>
            </div>
            <div class="why__bottom-item">
                <div class="why__bottom-item-content">
                    8 лет
                </div>
                <div class="vertical-line"></div>
                <div class="why__bottom-item-desc">
                    работаем с зарубежной недвижимостью
                </div>
            </div>
            <div class="why__bottom-item">
                <div class="why__bottom-item-content">
                    <img src="@/assets/images/image_31245.webp">
                </div>
                <div class="vertical-line"></div>
                <div class="why__bottom-item-desc">
                    членство в Международной федерации профессионалов недвижимости
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.why {
    padding-top: 50px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
    &__title {
    }

    &__top {
        display: flex;
        gap: 20px;
        padding-bottom: 30px;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
        }
        @media (max-width: 539px) {
            padding-bottom: 10px;
        }
    }

    &__top-item {
        flex: 0 0 calc(33.333% - 13.3px);
        color: #333;
        padding-bottom: 25px;
        padding-left: 30px;
        padding-right: 30px;
        background: rgb(247,247,247);
        border-radius: 20px;
        @media (max-width: 1023px) {
            flex: 0 0 100%;
        }
        & .icon, img {
            margin: 0 auto;
            display: block;
            margin-top: -30px;
            pointer-events: none;
            @media (max-width: 1023px) {
                width: 100%;
                max-width: 300px;
            }
        }
    }

    &__top-item-subtitle {
        font-weight: bold;
        margin-bottom: 10px;
        font-size: 17px;
        margin-top: -30px;
    }

    &__top-item-desc {
        margin-top: 10px;
    }
}
.line {
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 25px;

}

.why {

    &__bottom {
        padding-top: 30px;
        display: flex;
        gap: 20px;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
        }
        @media (max-width: 539px) {
            padding-top: 10px;
        }
    }

    &__bottom-item {
        flex: 0 0 calc(33.333% - 13.3px);
        color: #333;
        background: rgb(247,247,247);
        border-radius: 20px;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 1099px) {
            padding-left: 15px;
            padding-right: 15px;
        }
        @media (max-width: 1023px) {
            flex: 0 0 100%;
        }
        &._blue {
            background-image: linear-gradient(to bottom, rgba(48, 100, 255, 0.8) 0%, rgba(48, 100, 255, 0.97) 100%);
            color: #fff;
            .vertical-line {
                background: #fff;
            }
        }
        border-radius: 15px;
    }

    &__bottom-item-content {
        font-size: 26px;
        line-height: 1.6;
        letter-spacing: 0em;
        white-space: nowrap;
        font-weight: bold;
        @media (max-width: 1023px) {
            min-width: 150px;
        }
        @media (max-width: 539px) {
            font-size: 20px;
            min-width: 60px;
        }
    }

    &__bottom-item-desc {
        font-size: 13px;
        line-height: 1.6;
        letter-spacing: 0em;
        max-width: 191px;
    }
}

.vertical-line {
    height: 100%;
    width: 1px;
    background: rgba(0, 0, 0, 0.2);
}

</style>