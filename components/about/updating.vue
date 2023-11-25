<script setup>

</script>

<template>
    <div class="updating">
        <img class="bg" src="@/assets/images/ap.webp">
        <div class="updating__content container">
            <p class="updating__title">
                Кто работает над актуализацией?
            </p>
            <p class="updating__subtitle">
                Опытные дизайнеры и эксперты
            </p>
            <div class="updating__list">
                <div class="col">
                    <div class="updating__item">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                    <div class="updating__item mobile">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                    <div class="updating__item mobile">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="updating__item">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                    <div class="updating__item">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                    <div class="updating__item mobile">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="updating__item pc">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                    <div class="updating__item pc">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="updating__item pc">
                        <div class="updating__item-pic">
                            <img src="@/assets/images/asdd.jpg">
                        </div>
                        <p>
                            Андрей Лебедев
                        </p>
                        <span>
                            Арт-директор
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.updating {
    position: relative;
    padding-top: 20px;
    padding-bottom: 50px;
}
.bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
}
.updating {

    &__content {
        z-index: 1;
        position: relative;
    }

    &__title {
        font-size: 32px;
        line-height: 1.2;
        text-align: center;
        letter-spacing: 0em;
        color: rgb(0, 0, 0);
        margin-bottom: 50px;
        font-weight: bold;
        @media (max-width: 1023px) {
            font-size: 28px;
            margin-bottom: 30px;
            line-height: normal;
        }
        @media (max-width: 767px) {
            font-size: 24px;
            margin-bottom: 20px;
        }
        @media (max-width: 539px) {
            font-size: 20px;
            margin-bottom: 15px;
        }
    }

    &__subtitle {
        font-size: 20px;
        line-height: 1.6;
        letter-spacing: 0em;
        color: rgb(0, 0, 0);
        margin-bottom: 50px;
        font-weight: 500;
        text-align: center;
        @media (max-width: 1023px) {
            font-size: 18px;
            margin-bottom: 30px;
            line-height: normal;
        }
        @media (max-width: 767px) {
            font-size: 16px;
            margin-bottom: 20px;
        }
        @media (max-width: 539px) {

        }
    }

    &__list {
        display: flex;
        gap: 40px;
        justify-content: center;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
        }
        @media (max-width: 539px) {
            gap: 0px;
        }   
    }

    &__item {
        width: 200px;
        padding: 20px 10px;
        background: #fff;

        &.mobile {
            display: none;
            @media (max-width: 1023px) {
                display: block;
            }
        }
        &.pc {
            @media (max-width: 1023px) {
                display: none;
            }
        }
        & p {
            text-align: center;
            font-weight: 500;
        }
        & span {
            text-align: center;
            display: block;
            font-size: 12px;
        }
    }

    &__item-pic {
        margin-bottom: 20px;
        & img {
            width: 100%;
        }
    }
}

.col {
    display: flex;
    flex-direction: column;
    gap: 130px;
    @media (max-width: 1023px) {
        gap: 0;
        flex: 0 0 calc(50% - 20px);
        align-items: center;
    }
    @media (max-width: 539px) {
        flex: 0 0 100%;
    }   
    &:first-child {
        @media (min-width: 1024px) {
            justify-content: center;
        }
    }
    &:nth-child(3) {
        @media (min-width: 1024px) {
            padding-top: 50px;
        }
    }
    &:nth-child(4) {
        @media (min-width: 1024px) {
            padding-bottom: 80px;
            justify-content: center;
        }
    }
}
</style>