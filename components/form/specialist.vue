<script setup>

</script>

<template>
    <form class="form container">
        <div class="form__body">
            <img class="bg" src="@/assets/images/bg-4.webp">
            <div class="form__text">
                <p class="form__title">
                    Обсудите запрос со специалистом
                </p>
                <p class="form__subtitle">
                    Оставьте телефон, и мы свяжемся
                    с вами в ближайшее рабочее время
                </p>
                <div class="list">
                    <input
                        class="list__item"
                        :placeholder="'+7 111 222 33 44'"
                    >
                    <input
                        class="list__item"
                        :placeholder="'Ваше имя'"
                    >
                    <layouts-button
                        class="list__item"
                        :styles="['btn_white']"
                        :type="'button'"
                    >
                        Отправить
                    </layouts-button>
                </div>
                <layouts-agree/>
            </div>
            <div class="form__pic">
                <img src="@/assets/images/people.webp">
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    opacity: 0.4;
    border-radius: 20px;
}
.form {
    padding-top: 50px;
    &__body {
        position: relative;
        color: #fff;
        border-radius: 20px;
        padding: 50px 0px 0px 40px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
            padding: 30px 0px 0px 30px;
        }
        @media (max-width: 767px) {
            padding: 20px 0px 0px 20px;
        }
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background: #000000;
            border-radius: 20px;
            z-index: -1;
        }
    }
    &__title {
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 20px;
    }

    &__subtitle {
        font-size: 15px;
        margin-bottom: 15px;
    }

    &__text {
        z-index: 2;
        padding-bottom: 60px;
        @media (max-width: 1023px) {
            flex: 0 0 100%;
            padding-right: 30px;
            padding-bottom: 20px;
        }
        @media (max-width: 767px) {
            padding-right: 20px;
            padding-bottom: 10px;
        }
    }

    &__pic {
        z-index: 2;
        flex: 0 0 475px;
        align-self: end;
        @media (max-width: 1023px) {
            margin: 0 0 0 auto;
            flex: 0 0 300px;
        }
        @media (max-width: 767px) {
            flex: 0 0 250px;
        }
        & img {
            width: 100%;
        }
    }
}
.container {
}
.bg {
}
.list {
    z-index: 2;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
    &__item {
        flex: 0 0 241px;
        @media (max-width: 1023px) {
            flex: 1;
        }
        @media (max-width: 767px) {
            flex: 0 0 100%;
        }
    }
    & input {
        background: #000;
        color: #fff;
        padding: 13px 20px;
        border-radius: 20px;
        box-sizing: border-box;
    }
}

</style>