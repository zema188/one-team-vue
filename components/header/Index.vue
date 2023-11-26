<script setup>
let mobileMenuIsActive = ref(false)
</script>

<template>
    <div class="header-w">
        <header class="header container">
            <div class="header__top">
                <div class="header__menu"
                    @click="mobileMenuIsActive = !mobileMenuIsActive"
                >
                    <div class="nav-icon toggle-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <header-navigation/>
                <div class="header__top-action">
                    <div class="header__search input-w">
                        <input
                            placeholder="Поиск по сайту"
                        >
                    </div>
                    <layouts-lang/>
                    <icons-base
                        class="header__phone"
                        width="25"
                        height="25"
                        icon-name="phone"
                    ><icons-phone /></icons-base>
                    <icons-base
                        class="header__love"
                        width="25"
                        height="25"
                        icon-name="love"
                    ><icons-love /></icons-base>
                </div>
            </div>
            <div class="header__bottom">
                <div class="header__bottom-connect">
                    <div class="header__bottom-info">
                        <a href="tel:88001111111">
                            8 (800) 111-11-11
                        </a>
                        <p>
                            Время работы: с 9:00 до 21:00
                        </p>
                    </div>
                    <layouts-button
                        class="header__bottom-get-catalog"
                        :styles="['btn_blue-border']"
                        :type="'button'"
                    >
                        Получить новый каталог
                    </layouts-button>
                    <p>
                        Обратный звонок
                    </p>
                </div>
                <nuxt-link :to="'/'">
                    <icons-base
                        class="header__logo"
                        width="112"
                        height="100"
                        icon-name="logo"
                    ><icons-logo /></icons-base>
                </nuxt-link>
                <ul class="header__bottom-action">
                    <li class="active">
                        Выбрать регион
                    </li>
                    <li>
                        Консультация
                    </li>
                    <li>
                        Подобрать
                    </li>
                    <li>
                        Контакты
                    </li>
                    <li>
                        Задать вопрос?
                    </li>
                </ul>
            </div>
        </header>
    </div>
    <header-mobile-menu
        v-model:mobileMenuIsActive="mobileMenuIsActive"
    />
</template>

<style lang="scss" scoped>
.header-w {
}
.header {
    padding-top: 10px;
    padding-bottom: 10px;
    &__top {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;

    }

    &__top-action {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    &__search {
        @media (max-width: 539px) {
            display: none;
        }
    }

    &__lang {
    }

    &__lang-preview {
    }

    &__lang-list {
    }

    &__lang-item {
    }

    &__phone {
        cursor: pointer;
    }

    &__love {
        cursor: pointer;
    }
    
    &__bottom {
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: space-between;
        font-size: 15px;
        @media(max-width: 1199px) {
            display: none;
        }
    }

    &__bottom-get-catalog {
        padding: 4px 5px;
    }

    &__bottom-connect {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__bottom-info {
        & a {
            font-size: 19px;
            font-weight: 700;
            color: var(--var-blue-dark);
        }
        & p {
            font-size: 13px;
            color: var(--var-blue-dark);
        }
    }

    &__logo {

    }

    &__bottom-action {
        display: flex;
        gap: 12px;
        align-items: center;
        font-size: 15px;
        letter-spacing: -1px;
        & li {
            transition: .2s;
            cursor: pointer;
            &:hover {
                color: var(--var-blue-dark);
            }
            &.active {
                color: var(--var-blue);
                &:hover {
                    color: var(--var-blue);
                }
            }
        }
    }
}
.nav-icon {
      width: 19px;
      height: 15px;
      position: relative;
      transform: rotate(0deg);
      transition: .5s ease-in-out;
      cursor: pointer;
}
.nav-icon span {
      display: block;
      position: absolute;
      height: 1.62px;
      width: 100%;
      background: #000;
      border-radius: 10px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
}

.nav-icon span:nth-child(1) {
      top: 0px;
}
.nav-icon span:nth-child(2) {
      top: 6px;
      width: 13px;
      margin-left: 6px;
}
.nav-icon span:nth-child(3) {
  top: 12px;
}
.nav-icon.open span {
  left: 7px;
}
.nav-icon.open span:nth-child(1) {
  top: 5px;
  transform: rotate(135deg);
  max-width: 30px;
  left: 0px;
}
.nav-icon.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}
.nav-icon.open span:nth-child(3) {
  top: 5px;
  transform: rotate(-135deg);
  max-width: 30px;
  left: 0px;
}

.header__menu {
  display: none;

  @media (max-width: 1199px) {
    display: block;
  }
}



</style>