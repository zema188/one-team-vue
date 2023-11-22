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
    }

    &__subtitle {
        font-size: 20px;
        line-height: 1.6;
        letter-spacing: 0em;
        color: rgb(0, 0, 0);
        margin-bottom: 50px;
        font-weight: 500;
        text-align: center;
    }

    &__list {
        display: flex;
        gap: 40px;
        justify-content: center;
    }

    &__item {
        width: 200px;
        padding: 20px 10px;
        background: #fff;
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
    &:first-child {
        justify-content: center;
    }
    &:nth-child(3) {
        padding-top: 50px;
    }
    &:nth-child(4) {
        padding-bottom: 80px;
        justify-content: center;
    }
}
</style>