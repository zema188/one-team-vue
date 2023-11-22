<template>
    <div class="card">
        <div class="card__info">
            <img class="card__pic" src="@/assets/images/ob-1.webp">
            <div class="card__info-header">
                <div class="card__info-header-hashtags">
                    <div class="card__info-header-hashtag">
                        Аланья
                    </div>
                    <div class="card__info-header-hashtag">
                        1317 $/м²
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
                    <p>
                        Дата сдачи: 2024-05-01
                    </p>
                    <p>
                        Отделка: Да
                    </p>
                    <p>
                        До моря: 3000 м
                    </p>
                    <p>
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
                La Datcha Futura
            </div>
            <div class="card__text-subtitle">
                Город Аланья, район Каргыджак
            </div>
            <p>
                Роскошные виллы с собственной внутренней инфраструктурой, включая тренажерный зал и личный кинотеатр.
            </p>
            <p>
                Для управления внутренними коммуникациями в вилле, внедрена система "умный дом".
            </p>
            <ul>
                <li>
                    от 1053795 $
                </li>
                <li>
                    от 800 до 800 м2
                </li>
                <li>
                    3 в наличии
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
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px 0px rgba(81, 149, 255, 0.2);
    display: flex;
    gap: 40px;
    border-radius: 33px 25px 25px 33px;
    &:not(:last-child) {
        margin-bottom: 50px;
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
    }

    &__text {
        flex: calc(50% - 20px);
        padding: 40px 20px 50px 0px;
        & p {
            margin-bottom: 20px;
        }
    }

    &__text-name {
        font-weight: 700;
        font-size: 32px;
        line-height: 1.4;
        letter-spacing: 0em;
        margin-bottom: 20px;
    }

    &__text-subtitle {
        color: rgb(54, 54, 54);
        font-size: 14px;
        line-height: 1.5999999999999999;
        letter-spacing: 0em;
        opacity: 0.65;
        margin-bottom: 15px;
    }

    &__text-btns {
        display: flex;
        gap: 20px;
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
    & li {
        font-weight: bold;
    }
}



</style>