<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card" v-if="props.data">
        <img class="bg" 
            :src="props.data.image">
        <div class="card__header">
            <p>
                {{ props.data.name }}
            </p>
            <div class="card__header-flags">
                <img :src="flag"
                    v-for="flag of props.data.flags" :key="flag"
                >
            </div>
        </div>
        <div class="card__content">
            <p class="card__subtitle">
                Для всей семьи
            </p>
            <div class="hashtags">
                <div class="hashtags__list" v-if="props.data.vnj">
                    <div class="hashtag">
                        ВНЖ
                    </div>
                    <div class="hashtag blue">
                        {{ props.data.vnj }}
                    </div>
                </div>
                <div class="hashtags__list" v-if="props.data.citizenship">
                    <div class="hashtag">
                        Гражданство
                    </div>
                    <div class="hashtag blue">
                        {{ props.data.citizenship }}
                    </div>
                </div>
                <div class="hashtags__list">
                    <div class="hashtag green">
                        От застройщика
                    </div>
                    <div class="hashtag pink">
                        от 200 000 $ на 2 года
                    </div>
                </div>
                <div class="hashtags__list">
                    <div class="hashtag green">
                        Коммерческая недвижимость
                    </div>
                    <div class="hashtag lite-green">
                        от 500 000 €
                    </div>
                </div>
                <div class="hashtags__list">
                    <div class="hashtag">
                        Бессрочное
                    </div>
                </div>
            </div>
        </div>
        <button class="btn-more">
            Подробно
        </button>
    </div>
</template>

<style lang="scss" scoped>
.card__content {
    flex: 1;
}
.card {
    position: relative;
    padding: 25px;
    flex: 0 0 calc(33.333% - 13.4px);
    color: #fff;
    min-height: 390px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1023px) {
        flex: 0 0 calc(50% - 10px);
    }
    @media (max-width: 767px) {
        flex: 0 0 100%;
    }
    &.bigger {
        flex: 0 0 calc(50% - 10px);
        @media (max-width: 1023px) {
            flex: 0 0 100%;
        }
    }
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0,0,0, 0.2);
    }
    &__header {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        @media (max-width: 767px) {
            gap: 10px;
            margin-bottom: 10px;
        }
        & p {
            text-transform: uppercase;
            text-decoration: underline;
            font-size: 30px;
            @media (max-width: 767px) {
                font-size: 25px;
            }
        }
    }

    &__header-flags {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        & img {
            width: 26px;
            height: 26px;
            object-fit: cover;
        }
    }

    &__subtitle {
        position: relative;
        z-index: 2;
        margin-bottom: 15px;
    }
}
.hashtags__list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex: 0 0 100%;
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
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.hashtag {
    background: rgba(255,255,255,0.5);
    padding: 0 5px;
    font-size: 12px;
    cursor: pointer;
    &.blue {
        background-color: rgba(0, 79, 255, 0.65);
    }
    &.green {
        background-color: rgba(16, 102, 16, 0.65);
    }
    &.lite-green {
        background-color: rgb(16, 102, 16);
    }
    &.pink {
        background-color: rgb(194, 9, 187);
    }
}
.btn-more {
    position: relative;
    z-index: 2;
    margin: 0 0 0 auto;
    display: block;
    color: #fff;
    background-color: rgba(0, 127, 255, 0.6);
    font-size: 13px;
    box-shadow: 0px 4px 0px -1px rgba(255, 255, 255, 0.25);
    padding: 5px 13px;
}

</style>