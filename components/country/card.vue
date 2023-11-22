<script setup>

</script>

<template>
    <div class="card">
        <img class="bg" src="@/assets/images/about-1.jpeg">
        <div class="card__header">
            <p>
                Турция
            </p>
            <div class="card__header-flags">
                <img src="@/assets/images/flag_of_turkey.png">
            </div>
        </div>
        <p class="card__subtitle">
            Для всей семьи
        </p>
        <div class="hashtags">
            <div class="hashtag">
                ВНЖ
            </div>
            <div class="hashtag">
                Оформление: за 2 недели
            </div>
            <div class="hashtag">
                Получение
            </div>
            <div class="hashtag">
                Для всей семьи
            </div>
            <div class="hashtag">
                От застройщика
            </div>
            <div class="hashtag">
                от 200 000 $ на 2 года
            </div>
            <div class="hashtag">
                Коммерческая недвижимость
            </div>
            <div class="hashtag">
                от 500 000 €
            </div>
            <div class="hashtag">
                Бессрочное
            </div>
        </div>
        <button class="btn-more">
            Подробно
        </button>
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    padding: 20px;
    flex: 0 0 calc(33.333% - 20px);
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0,0,0, 0.5);
    }
    &__header {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    &__header-flags {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
    }

    &__subtitle {
        position: relative;
        z-index: 2;
    }
}
.bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.hashtags {
    position: relative;
    z-index: 2;
}
.hashtag {
}
.btn-more {
    position: relative;
    z-index: 2;
}

</style>