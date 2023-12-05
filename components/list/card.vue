<script setup>
const props = defineProps({
    object: {
        type: Object,
        required: true
    }
})

const buildLink = computed(() => {
    const link = `/${props.object.country.slug}/object-${props.object.id}`;
    return link;
})
</script>

<template>
    <nuxt-link :to="buildLink" class="card">
        <div class="card__info">
            <img class="card__pic" 
                :src="`https://one-team.pro/${props.object.photo[0].preview}`"
            >
            <div class="card__info-header">
                <div class="card__info-header-hashtags">
                    <div class="card__info-header-hashtag">
                        {{ props.object.city.name }}
                    </div>
                    <div class="card__info-header-hashtag">
                        {{ Math.floor(props.object.price_size) }} €/м²
                    </div>
                </div>
                <div class="icons">
                    <icons-base
                        width="30"
                        height="30"
                        icon-name="compare"
                        iconColor="#fff"
                    ><icons-compare /></icons-base>
                    <icons-base
                        width="30"
                        height="30"
                        icon-name="love"
                    ><icons-love_red /></icons-base>
                </div>
            </div>
            <div class="card__info-footer">
                <div class="card__info-lead">
                    <!-- <p>
                        Дата сдачи: 2024-05-01
                    </p> -->
                    <!-- <p>
                        Отделка: Да
                    </p> -->
                    <p v-if="props.object.to_sea">
                        До моря: {{ props.object.to_sea }}
                    </p>
                    <p v-if="props.object.is_swimming">
                        Бассейн: Да
                    </p>
                </div>
                <span>
                    Рейтинг 100-3
                </span>
            </div>
        </div>
        <div class="card__text">
            <div class="card__text-name">
                {{ props.object.name }}
            </div>
            <div class="card__text-subtitle">
                Город {{ props.object.city.name }}
            </div>
            <p>
                Роскошные виллы с собственной внутренней инфраструктурой, включая тренажерный зал и личный кинотеатр.
            </p>
            <p>
                Для управления внутренними коммуникациями в вилле, внедрена система "умный дом".
            </p>
            <ul>
                <li>
                    {{ props.object.min_price }} €
                </li>
                <li v-if="props.object.min_size !== props.object.max_size">
                    от {{ props.object.min_size }} до {{ props.object.max_size }} м2
                </li>
                <li v-else>
                    {{ props.object.max_size }} м2
                </li>
                <li>
                    <span style="color: var(--var-blue);">
                        3
                    </span> в наличии
                </li>
            </ul>
            <div class="card__text-btns">
                <button>
                    Подробнее о проекте
                    <icons-base
                        width="25"
                        height="25"
                        icon-name="server"
                    ><icons-server /></icons-base>
                </button>
                <a>
                    Комплектация
                    <icons-base
                        width="25"
                        height="25"
                        icon-name="examination"
                        iconColor="blue"
                    ><icons-examination /></icons-base>
                </a>
            </div>
        </div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.card {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px 0px rgba(81, 149, 255, 0.2);
    display: flex;
    gap: 40px;
    border-radius: 33px 25px 25px 33px;
    @media (max-width: 1023px) {
        flex-wrap: wrap;
        gap: 10px;
        padding: 5px;
    }
    &:not(:last-child) {
        margin-bottom: 50px;
        @media (max-width: 1023) {
            margin-bottom: 30px;
        }
        @media (max-width: 767px) {
            margin-bottom: 20px;
        }
    }
    &__info {
        position: relative;
        border: 2px solid rgb(81, 149, 255);
        border-radius: 33px;
        padding: 25px;
        flex: calc(50% - 20px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        @media (max-width: 1023px) {
            flex: 0 0 100%;
            height: 350px;
        }
        @media (max-width: 539px) {
            height: 280px;
        }
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,0,0, 0.3);
            z-index: 1;
            border-radius: 25px;
        }
    }

    &__pic {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    &__info-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        position: relative;
    }

    &__info-header-hashtags {
        display: flex;
        gap: 5px;
    }

    &__info-header-hashtag {
        border: 1px solid #fff;
        color: #fff;
        padding: 5px 5px;
        height: fit-content;
        white-space: nowrap;
        transition: .2s;
        cursor: pointer;
        &:hover {
            background: rgba(80, 140, 250, 0.5);
        }
    }

    &__info-footer {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: flex-end;
        & span {
            height: fit-content;
            background: rgba(80, 140, 250, 0.7);
            color: #fff;
            font-size: 11px;
            padding: 1px 5px;
            transition: .2s;
            cursor: pointer;
            &:hover {
                background: rgba(80, 140, 250, 1);
            }
        }
    }

    &__info-lead {
        background-image: radial-gradient(rgba(0, 102, 255, 0.02) 0%, rgba(4, 44, 105, 0.5) 100%);
        border-radius: 20px;
        padding: 15px;
        color: #fff;
        @media (max-width: 539px) {
            display: none;
        }
    }

    &__text {
        flex: calc(50% - 20px);
        padding: 40px 20px 50px 0px;
        @media (max-width: 1023px) {
            flex: 0 0 100%;
            padding: 10px 0px 20px 0px;
        }
        & p {
            margin-bottom: 20px;
            @media (max-width: 539px) {
                margin-bottom: 10px;
            }
        }
    }

    &__text-name {
        font-weight: 700;
        font-size: 32px;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-bottom: 20px;
        @media (max-width: 539px) {
            margin-bottom: 10px;
            line-height: normal;
            font-size: 25px;
        }
    }

    &__text-subtitle {
        color: rgb(54, 54, 54);
        font-size: 14px;
        line-height: 1.5999999999999999;
        letter-spacing: 0em;
        opacity: 0.65;
        margin-bottom: 15px;
        @media (max-width: 539px) {
            margin-bottom: 10px;
        }
    }

    &__text-btns {
        display: flex;
        gap: 20px;
        @media (max-width: 539px) {
            flex-wrap: wrap;
        }
        & button {
            border: 2px solid var(--var-blue);
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--var-blue-dark);
            gap: 10px;
            align-items: center;
            transition: .2s;
            &:hover {
                background: #fafbff;
            }
        }
        & a {
            display: flex;
            gap: 5px;
            align-items: center;
            color: var(--var-blue);
            cursor: pointer;
        }
    }
}

.icons {
    display: flex;
    gap: 5px;
    & svg {
        cursor: pointer;
    }
}

ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media (max-width: 1023px) {
        justify-content: flex-start;
        gap: 20px;
    }
    @media (max-width: 767px) {
        flex-wrap: wrap;
        gap: 0;
        row-gap: 5px;
        column-gap: 10px;
    }
    & li {
        font-weight: bold;
    }
}



</style>