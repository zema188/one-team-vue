<script setup>
const props = defineProps({
    mobileMenuIsActive: {
        type: Boolean,
        required: true,
    }
})
const emit = defineEmits(['update:mobileMenuIsActive'])

let activeBlock = ref('work')
const topNav = ref([
    {
        value: 'Где работаем?',
        name:  'work'
    },
    {
        value: 'FAQ о районах',
        name:  'faq'
    },
    {
        value: 'О компании',
        name:  'about'
    },
])

</script>

<template>
    <div class="header-m"
        :class="{active: props.mobileMenuIsActive}"
    >
        <div class="header-m__content">
            <div class="top-w">
                <div class="top">
                    <button
                        v-for="btn of topNav" :key="btn.name"
                        :class="{active: btn.name === activeBlock}"
                        @click="activeBlock = btn.name"
                    >
                        {{ btn.value }}
                    </button>
                </div>
                <div class="block" v-if="activeBlock === 'work'">
                    <div class="block__title">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="HomeCatalogue"><path d="M23.79,15.17l-3.976-2.71c-0.879-0.6-2.016-0.6-2.895,0l-3.978,2.711c-0.702,0.479-1.121,1.273-1.121,2.123v4.856   c0,1.417,1.152,2.57,2.569,2.57h7.952c1.417,0,2.57-1.153,2.57-2.57v-4.856C24.913,16.444,24.493,15.65,23.79,15.17z M23.112,22.15   c0,0.425-0.345,0.77-0.77,0.77h-7.952c-0.424,0-0.77-0.345-0.77-0.77v-4.856c0-0.255,0.126-0.493,0.336-0.636l3.978-2.711   c0.129-0.088,0.28-0.132,0.433-0.132c0.151,0,0.304,0.044,0.434,0.133l3.975,2.709c0.211,0.145,0.337,0.382,0.337,0.637V22.15z" fill="#1d8aff" class="color000000 svgShape"/><path d="M26.155,5.849C26.072,3.218,23.92,1.1,21.27,1.1H6C3.298,1.1,1.1,3.298,1.1,6v15.27c0,2.65,2.119,4.803,4.749,4.885   c0.083,2.629,2.235,4.746,4.883,4.746h15.269c2.701,0,4.899-2.198,4.899-4.899V10.732C30.9,8.084,28.783,5.932,26.155,5.849z    M5.833,10.732v13.62C4.203,24.264,2.9,22.922,2.9,21.27V6c0-1.709,1.391-3.1,3.1-3.1h15.27c1.652,0,2.994,1.303,3.083,2.933   h-13.62C8.031,5.833,5.833,8.031,5.833,10.732z M29.1,26.001c0,1.709-1.39,3.099-3.099,3.099H10.732   c-1.709,0-3.099-1.39-3.099-3.099V10.732c0-1.709,1.39-3.099,3.099-3.099h15.269c1.709,0,3.099,1.39,3.099,3.099V26.001z" fill="#1d8aff" class="color000000 svgShape"/></svg>
                        <p>
                            Выберите направление
                        </p>
                    </div>
                    <p class="block__subtitle">
                        Главная
                    </p>
                    <ul>
                        <li>
                            Турция
                        </li>
                        <li>
                            Кипр
                        </li>
                    </ul>
                </div>
                <div class="block" v-if="activeBlock === 'faq'">
                    <div class="block__title">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="Faq"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm1.527-6.3A.938.938,0,0,0,13,13.58V14a1,1,0,0,1-2,0v-.42a2.916,2.916,0,0,1,1.764-2.731,2,2,0,0,0,1.2-2.22,2.024,2.024,0,0,0-1.6-1.6A2,2,0,0,0,10,9,1,1,0,0,1,8,9a4,4,0,1,1,5.527,3.7Z" fill="#1d8aff" class="color000000 svgShape"/></svg>
                        <p>
                            Выберите страну и район
                        </p>
                    </div>
                    <p class="block__subtitle">
                        Главная
                    </p>
                    <ul>
                        <li>
                            Турция
                        </li>
                        <li>
                            Кипр
                        </li>
                    </ul>
                </div>
                <div class="block" v-if="activeBlock === 'about'">
                    <div class="block__title">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="ContactBook"><path d="M44.6,58.7H22.2c-3.5,0-6.7-1.4-9.2-3.8c-2.5-2.5-3.8-5.7-3.8-9.2c0-0.6,0.4-1,1-1s1,0.4,1,1c0,2.9,1.1,5.7,3.2,7.8  s4.8,3.2,7.8,3.2h22.4c2.9,0,5.7-1.1,7.8-3.2c2.1-2.1,3.2-4.8,3.2-7.8v-28c0-2.9-1.1-5.7-3.2-7.8c-2.1-2.1-4.8-3.2-7.8-3.2H22.2  c-2.9,0-5.7,1.1-7.8,3.2s-3.2,4.8-3.2,7.8c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-3.5,1.4-6.7,3.8-9.2c2.5-2.5,5.7-3.8,9.2-3.8h22.4  c3.5,0,6.7,1.4,9.2,3.8c2.5,2.5,3.8,5.7,3.8,9.2v28c0,3.5-1.4,6.7-3.8,9.2C51.3,57.4,48,58.7,44.6,58.7z" fill="#1d8aff" class="color000000 svgShape"/><path d="M10.3 30.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 30.8 10.3 30.8zM10.3 22.8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 22.8 10.3 22.8zM10.3 42.4c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S13.1 42.4 10.3 42.4zM10.3 34.4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S12 34.4 10.3 34.4zM45.4 33.2c-.8-1.9-2.1-3.5-3.9-4.7-.8-.5-1.1-1.6-.7-2.5.6-1.2.8-2.7.6-4.2-.5-3-3-5.4-6-5.7-4.5-.5-8.1 3-7.9 7.4.2 2.9 2.2 5.4 5 6.2 2 .6 4 .2 5.5-.7 2.7 1.1 4.5 2.8 5.4 5 1.3 3 .8 6.6.2 8.7-.2.9-1 1.5-1.9 1.5H27.2c-.8 0-1.6-.5-1.9-1.3-2.3-6.7 2.1-11.3 2.3-11.5.4-.4.4-1 0-1.4s-1-.4-1.4 0c0 .1-6.4 6.7-1.9 15.7.2.4.5.6.9.6H44c.4 0 .7-.3.8-.7C44.9 45.3 47.8 38.8 45.4 33.2zM29.5 22.6c.2-2 1.5-3.7 3.4-4.3 3.5-1.1 7 1.7 6.6 5.3-.3 2.4-2.3 4.3-4.7 4.4C31.7 28.1 29.3 25.7 29.5 22.6z" fill="#1d8aff" class="color000000 svgShape"/></svg>
                        <p>
                            Выберите раздел
                        </p>
                    </div>
                    <p class="block__subtitle">
                        Главная
                    </p>
                    <ul>
                        <li>
                            Подбор и экспертиза объекта
                        </li>
                        <li>
                            Гражданство и ВНЖ
                        </li>
                        <li>
                            Второй паспорт
                        </li>
                        <li>
                            Инвестиции %
                        </li>
                        <li>
                            Экспертиза района
                        </li>
                        <li>
                            Консалтинг
                        </li>
                    </ul>
                </div>
            </div>
            <div class="info-w">
                <div class="info">
                    <a href="tel:88001111111">
                        8 (800) 111-11-11
                    </a>
                    <span>Быстрая консультация</span>
                    <a href="mailto:hello@mail.ru">hello@mail.ru</a>
                    <span>Написать сообщение</span>
                </div>
                <div class="info__footer">
                    <layouts-button
                        :styles="['btn_blue-border']"
                        :type="'button'"
                    >
                        Получить новый каталог
                    </layouts-button>
                    <icons-base
                        width="25"
                        height="25"
                        icon-name="telegram"
                    ><icons-telegram /></icons-base>
                    <icons-base
                        width="25"
                        height="25"
                        icon-name="whatsapp"
                    ><icons-whatsapp /></icons-base>
                </div>
            </div>
            <div class="header-m__close toggle-menu"
                @click="emit('update:mobileMenuIsActive', false)"
            >
                <icons-base
                    width="25"
                    height="25"
                    icon-name="close"
                    iconColor="#fff"
                ><icons-close /></icons-base>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-m {
      background: #e5e3e3;
      max-width: 400px;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      left: -100%;
      transition: .4s;
      padding: 50px 15px 0px;
      height: 100vh;
      overflow: auto;
      &.active {
            left: 0;
      }
      &__content {
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: space-between;
            height: 100%;
      }
      &__nav {
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;
            gap: 7px;
      }
      &__nav-item {
            color: #000;
      }
}

.header-m__close {
      position: absolute;
      right: 10px;
      top: 19px;
      & img {
            width: 13px;
            height: 13px;
      }
}

.top {
    display: flex;
    gap: 5px;
    overflow: auto;
    & button {
        white-space: nowrap;
        border-radius: 10px 10px 10px 10px;
        color: rgb(51, 51, 51);
        padding: 2px 5px;
        border: 1px solid transparent;
        &.active {
            border: 1px solid rgb(51, 51, 51);
        }
    }
}

.block {
    margin-top: 20px;
    margin-bottom: 50px;
    &__title {
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: underline;
        margin-bottom: 20px;
        & svg {
            width: 30px;
        }
    }
}
.block__subtitle {
    font-weight: bold;
}

.info {
    margin-bottom: 20px;
    & a {
        font-size: 24px;
        line-height: 1;
        color: rgb(32, 71, 173);
        display: block;
    }
    & span {
        text-decoration: underline;
    }
}

.info__footer {
    display: flex;
    gap: 10px;
    align-items: center;
    
}

ul {
    & li {
        margin-bottom: 5px;
        font-style: italic;
    }
}
</style>