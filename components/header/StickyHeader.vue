<script setup>
</script>

<template>
    <div class="header-sticky container">
        <nuxt-link to="/" class="logo">
            <icons-base
                width="112"
                height="100"
                icon-name="logo"
            ><icons-logo /></icons-base>
        </nuxt-link>
        <div class="btns">
            <button>
                Консультация
            </button>
            <button>
                Написать сообщение
            </button>
            <layouts-button
                :styles="['btn_blue-border']"
                :type="'button'"
            >
                Получить новый каталог
            </layouts-button>
        </div>
        <div class="action">
            <icons-base
                width="30"
                height="30"
                icon-name="love"
                iconColor="#007aff"
            ><icons-love /></icons-base>
            <div class="phone">
                <a href="tel:88001111111">
                    8 (800) 111-11-11
                </a>
                <span>
                    Время работы: с 9:00 до 21:00
                </span>
            </div>
            <div class="action__social">
                <icons-base
                    width="30"
                    height="30"
                    icon-name="telegram"
                ><icons-telegram /></icons-base>
                <icons-base
                    width="30"
                    height="30"
                    icon-name="whatsapp"
                ><icons-whatsapp /></icons-base>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-sticky {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 5px;
    z-index: 10;
    width: 100%;
    background-image: radial-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
    border-radius: 100px;
    box-shadow: 0px 0px 3px 0px rgba(75, 113, 216, 0.4);
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    opacity: 0;
    pointer-events: none;
    transition: .2s;
    max-width: 1170px;
    @media (max-width: 1199px) {
        display: none;
    }
    &.active {
        opacity: 1;
        pointer-events: all;
    }
    &__logo {
    }
}
.btns {
    display: flex;
    align-items: center;
    gap: 10px;
}
.action {
    display: flex;
    align-items: center;
    height: fit-content;
    gap: 15px;
}
.phone {
    & a {
        display: block;
        font-size: 18px;
        font-weight: bold;
        color: rgb(18, 63, 176);
        text-align: center;
        line-height: normal;
    }
    & span {
        font-size: 12px;
        line-height: 1;
    }
}

.action__social {
    display: flex;
    gap: 10px;
}

.logo {
    width: 150px;
    position: relative;
    & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

svg {
    cursor: pointer;
}
</style>