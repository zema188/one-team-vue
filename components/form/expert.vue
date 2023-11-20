<script setup>

</script>

<template>
    <form class="form container">
        <div class="form__body">
            <div class="form__content">
                <p class="form__title">
                    Помощь эксперта
                </p>
                <div class="form__list">
                    <input class="form__list-item" placeholder="Ваше имя">
                    <input class="form__list-item" placeholder="+7 111 222 33 44">
                    <layouts-button
                        class="form__list-item"
                        :styles="['btn_white']"
                        :type="'button'"
                    >
                        Получить консультацию
                    </layouts-button>
                </div>
                <p class="form__desc">
                    Поможем найти и купить недвижимость для
                    лучшей жизни и инвестиций
                </p>
            </div>
            <div class="form__pic">
                <img src="@/assets/images/123.webp">
                <span>
                    Анна, Эксперт
                </span>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form {
    padding-top: 50px;
    &__body {
        display: flex;
        justify-content: space-between;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgb(0, 0, 0) 100%);
        border-radius: 35px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(211, 211, 211);
        padding: 50px 30px 0 150px;
    }

    &__content {
        flex: 0 0 330px;
    }

    &__title {
        font-size: 36px;
        line-height: 1.2;
        letter-spacing: 0em;
        margin-bottom: 30px;
        color: #fff;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 10px;
        & input {
            background-color: rgb(0, 0, 0);
            color: rgb(255, 255, 255);
            border: 1px solid rgb(168, 168, 168);
            border-radius: 50px;
            padding: 13.5px 14.4px;
            font-size: 14px;
            cursor: initial;
        }
    }

    &__list-item {
        flex: 1;
    }

    &__desc {
        text-align: center;
        font-size: 16px;
        line-height: 1.6;
        letter-spacing: 0em;
        color: rgb(255, 255, 255);
        opacity: 0.84;
    }

    &__pic {
        position: relative;
        & span {
            position: absolute;
            bottom: -13px;
            transform: translate(-50%, 0px);
            left: 58%;
            width: 200px;
            padding: 20px;
            text-align: center;
            background-color: rgb(255, 255, 255);
            border-width: 1px;
            border-style: solid;
            border-color: rgb(255, 255, 255);
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
        }
    }
}

</style>