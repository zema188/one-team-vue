
<script setup>

</script>

<template>
    <div class="employees container">
        <div class="employees__title">
            Лучшие специалисты
        </div>
        <div class="employees__subtitle">
            Знакомьтесь, one-team
        </div>
        <div class="employees__preview-pic">
            <img src="@/assets/images/employees.webp">
        </div>
        <div class="employees__list">
            <div class="employees__item">
                <div class="employees__item-pic">
                    <img src="@/assets/images/test.jpeg">
                </div>
                <p class="employees__name">
                    ОЛЬГА ДМИТРИЕВА
                </p>
                <p class="employees__info">
                    Финансовый Директор (CFO) - Real Estate
                </p>
            </div>
            <div class="employees__item">
                <div class="employees__item-pic">
                    <img src="@/assets/images/test.jpeg">
                </div>
                <p class="employees__name">
                    ОЛЬГА ДМИТРИЕВА
                </p>
                <p class="employees__info">
                    Финансовый Директор (CFO) - Real Estate
                </p>
            </div>
            <div class="employees__item">
                <div class="employees__item-pic">
                    <img src="@/assets/images/test.jpeg">
                </div>
                <p class="employees__name">
                    ОЛЬГА ДМИТРИЕВА
                </p>
                <p class="employees__info">
                    Финансовый Директор (CFO) - Real Estate
                </p>
            </div>
            <div class="employees__item">
                <div class="employees__item-pic">
                    <img src="@/assets/images/test.jpeg">
                </div>
                <p class="employees__name">
                    ОЛЬГА ДМИТРИЕВА
                </p>
                <p class="employees__info">
                    Финансовый Директор (CFO) - Real Estate
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.employees {
    padding-top: 50px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
    &__title {
        text-transform: uppercase;
        margin-bottom: 15px;
        font-size: 44px;
        line-height: 1.1;
        font-weight: bold;
        letter-spacing: -3px;
        text-align: center;
        @media (max-width: 1023px) {
            margin-bottom: 15px;
            font-size: 40px;
        }
        @media (max-width: 767px) {
            margin-bottom: 10px;
            font-size: 35px;
        }
        @media (max-width: 539px) {
            margin-bottom: 0px;
            font-size: 22px;
        }
    }

    &__subtitle {
        margin-bottom: 21px;
        font-size: 15px;
        line-height: 1.4;
        letter-spacing: 0em;
        color: rgb(49, 101, 255);
        text-align: center;
        @media (max-width: 1023px) {
            margin-bottom: 15px;
        }
        @media (max-width: 767px) {
            margin-bottom: 10px;
        }
        @media (max-width: 539px) {

        }
    }

    &__preview-pic {
        max-width: 482px;
        border-radius: 20px;
        margin: 0 auto 30px;
        & img {
            border-radius: 20px;
            width: 100%;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    &__item {
        flex: 0 0 calc(25% - 15px);
        @media (max-width: 1023px) {
            flex: 0 0 calc(50% - 10px);
        }
        @media (max-width: 539px) {
            flex: 0 0 100%;
        }
    }

    &__item-pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
        & img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    &__name {
        text-align: center;
    }

    &__info {
        font-size: 14px;
        line-height: 1.7142857142857142;
        letter-spacing: 0em;
        color: rgb(49, 101, 255);
        text-align: center;
    }
}

</style>