<script setup>

</script>

<template>
    <footer class="footer-w">
        <img class="bg" src="@/assets/images/footer-bg.webp">
        <div class="footer container">
            <div class="footer__info">
                <div class="footer__info-item">
                    <icons-base
                        width="50"
                        height="50"
                        icon-name="loveChat"
                    ><icons-love-chat /></icons-base>
                    <div class="footer__info-item-text">
                        <p>
                            <a href="tel:88001001010">
                                8 (800) 100-10-10
                            </a>
                        </p>
                        <span>
                            единый номер телефона
                        </span>
                    </div>
                </div>
                <div class="footer__info-item">
                    <icons-base
                        width="50"
                        height="50"
                        icon-name="mail"
                    ><icons-mail /></icons-base>
                    <div class="footer__info-item-text">
                        <p>
                            <a href="mailto:hello@mail.ru">
                                hello@mail.ru                  
                            </a>
                        </p>
                        <span>
                            единый e-mail
                        </span>
                    </div>
                </div>
                <div class="footer__info-item">
                    <icons-base
                        width="50"
                        height="50"
                        icon-name="time"
                    ><icons-time /></icons-base>
                    <div class="footer__info-item-text">
                        <p>
                            пн-вс c 9:00 до 21:00                                              
                        </p>
                        <span>
                            время работы
                        </span>
                    </div>
                </div>
            </div>
            <div class="footer__content">
                <div class="footer__content-list">
                    <p class="footer__content-list-subtitle">
                        Каталоги
                    </p>
                    <ul>
                        <li>
                            Турция
                        </li>
                        <li>
                            Кипр
                        </li>
                        <li>
                            ОАЭ
                        </li>
                    </ul>
                </div>
                <div class="footer__content-list">
                    <p class="footer__content-list-subtitle">
                        Информация
                    </p>
                    <ul>
                        <li>
                            Турция
                        </li>
                        <li>
                            Кипр
                        </li>
                        <li>
                            ОАЭ
                        </li>
                    </ul>
                </div>
                <div class="footer__content-list">
                    <p class="footer__content-list-subtitle">
                        Услуги
                    </p>
                    <ul>
                        <li>
                            Гражданство и ВНЖ
                        </li>
                        <li>
                            Второй паспорт
                        </li>
                        <li>
                            Подбор и экспертиза
                        </li>
                        <li>
                            Инвестиции %
                        </li>
                        <li>
                            Аналитика и консалтинг
                        </li>
                        <li>
                            Экспертиза районов
                        </li>
                        <li>
                            О компании
                        </li>
                        <li>
                            Общая карта
                        </li>
                        <li>
                            <button>
                                Банки и тарифы
                            </button>
                        </li>
                        <li>
                            <button>
                                Партнерам
                            </button>
                        </li>
                        <li>
                            <button>
                                Контакты
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="footer__content-list">
                    <p class="footer__content-list-subtitle">
                        Контакты
                    </p>
                    <div class="info-item">
                        <a href="tel:88001001010">
                            8 (800) 100-10-10
                        </a>
                        <span>
                            Заказать консультацию
                        </span>
                    </div>
                    <div class="info-item">
                        <a href="mailto:hello@mail.ru">
                            hello@mail.ru                  
                        </a>
                        <span>
                            Написать сообщение
                        </span>
                    </div>
                    <div class="action">
                        <layouts-lang
                            class="footer__lang"
                        />
                        <div class="icons">
                            <icons-base
                                width="30"
                                height="30"
                                icon-name="customerService"
                            ><icons-customer-service /></icons-base>
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
                            <icons-base
                                width="25"
                                height="25"
                                icon-name="love"
                                iconColor="#fff"
                            ><icons-love /></icons-base>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__lead">
                <p>
                    © 2022 - 2023 OneTeam Все права защищены
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer-w {
    margin-top: 70px;
    position: relative;
    @media (max-width: 1023px) {
        margin-top: 50px;
    }
    @media (max-width: 539px) {
        margin-top: 30px;
    }
    & .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
        opacity: 0.4;
    }
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background: #042854;
        z-index: -1;
    }
}
.footer {
    color: #fff;
    z-index: 1;
    position: relative;
    padding-top: 50px;
    &__info {
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
        @media (max-width: 1023px) {
            display: none;
        }
    }

    &__info-item {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 30px;
        & p, a {
            color: #fff;
        }
        & span {
            color: rgb(205 199 199);
            font-size: 13px;
        }
    }

    &__info-item-text {

    }

    &__content {
        display: flex;
        gap: 20px;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
        }
    }

    &__content-list {
        flex: 0 0 calc(25% - 15px);
        @media (max-width: 1023px) {
            flex: 0 0 calc(50% - 10px);
        }
        & li {
            font-size: 14px;
            line-height: 1.4;
            letter-spacing: 0.06666666666666667em;
            color: rgb(235, 235, 235);
            opacity: 1;
            cursor: pointer;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            & button {
                font-size: 14px;
                line-height: 1.8;
                letter-spacing: 0.06666666666666667em;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
                border-width: 1px;
                border-style: solid;
                border-color: rgb(155, 155, 155);
                color: #fff;
                padding: 2px 13px;
            }
        }
    }

    &__content-list-subtitle {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    &__lead {
        margin-top: 50px;
        font-size: 13px;
        line-height: 1.6;
        letter-spacing: 0em;
        text-align: center;
        @media (max-width: 1023px) {
        }
        @media (max-width: 539px) {
        }
    }
}
.footer__lang {
    @media (max-width: 539px) {
        display: none;
    }
}
.info-item {
    margin-bottom: 10px;
    & a {
        display: block;
        font-size: 20px;
        line-height: 1;
        letter-spacing: 0em;
        color: #fff;
        white-space: nowrap;
    }
    & span {
        cursor: pointer;
        text-decoration: underline;
    }
}
.action {
    display: flex;
    gap: 30px;
    align-items: center;
}
.icons {
    display: flex;
    gap: 10px;
    align-items: center;
}

</style>