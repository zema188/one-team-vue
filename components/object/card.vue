<script setup>
let activeBlock = ref('photos')
const contentNav = ref([
    {
        value: 'Фото',
        name:  'photos'
    },
    {
        value: 'Планы',
        name:  'layouts'
    },
    {
        value: 'Видео',
        name:  'videos'
    },
    {
        value: 'Цены',
        name:  'prices'
    },
])


let activeFooterBlock = ref('details')
const footerNav = ref([
    {
        value: 'Детали',
        name:  'details',
    },
    {
        value: 'Описание',
        name:  'description'
    },
    {
        value: 'Инвест',
        name:  'invest'
    },
    {
        value: 'Карта',
        name:  'map'
    },
    {
        value: 'Инфраструктура',
        name:  'infrastructure'
    },
])

</script>

<template>
    <div class="object container">
        <div class="object__nav">
            <nuxt-link class="object__nav-item" to="/">Главная</nuxt-link>
            <nuxt-link class="object__nav-item" to="">Турция</nuxt-link>
            <nuxt-link class="object__nav-item" to="">Аланья</nuxt-link>
            <nuxt-link class="object__nav-item" to="">район Каргыджак</nuxt-link>
        </div>
        <div class="object__name">Виллы в Richmond Villas, в городе Аланья</div>
        <div class="object__body">
            <div class="object__content">
                <div class="object__content-nav">
                    <div class="object__content-nav-item"
                        v-for="btn of contentNav" :key="btn.name"
                        :class="{active: activeBlock === btn.name}"
                        @click="activeBlock = btn.name"
                    >
                        {{ btn.value }}
                    </div>
                </div>
                <div class="object__block">
                    <object-photo-swiper
                        v-if="activeBlock === 'photos'"
                    />
                    <object-layouts-swiper
                        v-if="activeBlock === 'layouts'"
                    />
                    <object-videos
                        v-if="activeBlock === 'videos'"
                    />
                    <object-prices
                        v-if="activeBlock === 'prices'"
                    />
                </div>
                <div class="object__text">
                    Виллы предоставляют возможность получения турецкого гражданства.
                </div>
                <div class="object__text">
                    Вы можете выбрать для себя оптимальный вариант планировки и площади из широкого ассортимента в комплексе.
                </div>
                <div class="object__leads">
                    <div class="object__lead">
                        <img src="@/assets/images/svg-1.svg">
                        <div>
                            <span>
                                Стадия:
                            </span>
                            <p>
                                Строится
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-2.svg">
                        <div>
                            <span>
                                Дата сдачи:
                            </span>
                            <p>
                                2024-09-01
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-3.svg">
                        <div>
                            <span>
                                Отделка:
                            </span>
                            <p>
                                Да
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-4.svg">
                        <div>
                            <span>
                                Дней до сдачи:
                            </span>
                            <p>
                                283
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-5.svg">
                        <div>
                            <span>
                                Паркинг:
                            </span>
                            <p>
                                Крытая
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-6.svg">
                        <div>
                            <span>
                                Рассрочка:
                            </span>
                            <p>
                                До конца строительства
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-7.svg">
                        <div>
                            <span>
                                Район:
                            </span>
                            <p class="blue">
                                Каргыджак
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-8.svg">
                        <div>
                            <span>
                                Рейтинг:
                            </span>
                            <p class="blue">
                                100
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/svg-1.svg">
                        <div>
                            <span>
                                Генератор:
                            </span>
                            <p>
                                Да
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-9.svg">
                        <div>
                            <span>
                                До моря:
                            </span>
                            <p>
                                2000 м
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/svg-1.svg">
                        <div>
                            <span>
                                Бассейн:
                            </span>
                            <p>
                                Да
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/svg-1.svg">
                        <div>
                            <span>
                                Вид на море:
                            </span>
                            <p>
                                Да
                            </p>
                        </div>
                    </div>
                    <div class="object__lead">
                        <img src="@/assets/images/advantages-10.svg">
                        <div>
                            <span>
                                ПВ:
                            </span>
                            <p>
                                30%
                            </p>
                        </div>
                    </div>
                </div>
                <div class="object__big-btns">
                    <div class="object__big-btn blue">
                        <span>
                            Рассчитать ипотеку
                        </span>
                        <p>
                            Richmond Villas
                        </p>
                        <button>
                            <svg fill="#fff" viewBox="0 0 512 512"  stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></g></svg>
                        </button>
                    </div>
                    <div class="object__big-btn green">
                        <span>
                            Свежий прайс-лист и планировки
                        </span>
                        <p>
                            Richmond Villas
                        </p>
                        <button>
                            <svg fill="#fff" viewBox="0 0 22 22"  id="memory-chart-bar" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 2H4V18H20V20H2V2M6 16V8H10V16H6M11 16V4H15V16H11M16 16V11H20V16H16Z"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="aside">
                <div class="aside__header">
                    <div class="aside__price">
                        <span class="active">
                            $
                        </span>
                        <span>
                            ₽
                        </span>
                    </div>
                    <div class="aside__header-action">
                        <svg class="compare" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 8V15.3C18 16.4201 18 16.9802 17.782 17.408C17.5903 17.7843 17.2843 18.0903 16.908 18.282C16.4802 18.5 15.9201 18.5 14.8 18.5H12M18 8C19.3807 8 20.5 6.88071 20.5 5.5C20.5 4.11929 19.3807 3 18 3C16.6193 3 15.5 4.11929 15.5 5.5C15.5 6.88071 16.6193 8 18 8ZM12 18.5L14 16M12 18.5L14 21M6 16V8.7C6 7.5799 6 7.01984 6.21799 6.59202C6.40973 6.21569 6.71569 5.90973 7.09202 5.71799C7.51984 5.5 8.0799 5.5 9.2 5.5H12M6 16C4.61929 16 3.5 17.1193 3.5 18.5C3.5 19.8807 4.61929 21 6 21C7.38071 21 8.5 19.8807 8.5 18.5C8.5 17.1193 7.38071 16 6 16ZM12 5.5L10 8M12 5.5L10 3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <icons-base
                            width="30"
                            height="30"
                            icon-name="love_red"
                        ><icons-love_red /></icons-base>
                    </div>
                </div>
                <div class="aside__info">
                    <div class="aside__info-price">
                        <span>
                            от 1110439 $
                        </span>
                        <p>
                            4143 $/м
                            <sup>2</sup>
                        </p>
                    </div>
                    <div class="aside__hashtags">
                        <span>
                            № 291
                        </span>
                        <span>
                            16
                        </span>
                    </div>
                </div>
                <div class="aside__header-btns">
                    <button>
                        <svg viewBox="0 0 24 24" fill="none"  stroke="#c73d3d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 9H14V19H10V9Z" stroke="#529c50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 5H21V19H17V5Z" stroke="#529c50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 14H7V19H3V14Z" stroke="#529c50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span>
                            Следить за ценой
                        </span>
                    </button>
                    <button>
                        <svg class="examination" viewBox="0 0 20 20"  fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#508CFA"  d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"></path> </g></svg>
                        <span>
                            Как оплатить?
                        </span>
                    </button>
                </div>
                <div class="aside__list">
                    <div class="aside__list-body">
                        <div class="aside__list-item">
                            <span>
                                Локация:
                            </span>
                            <p>
                                Аланья, район Каргыджак
                            </p>
                        </div>
                        <div class="aside__list-item">
                            <span>
                                До моря:
                            </span>
                            <p>
                                2000 м
                            </p>
                        </div>
                        <div class="aside__list-item">
                            <span>
                                Площадь:
                            </span>
                            <p>
                                от 268 м<sup>2</sup> до 377 м<sup>2</sup>
                            </p>
                        </div>
                    </div>
                    <button>
                        Написать в WhatsApp
                        <icons-base
                            width="20"
                            height="20"
                            icon-name="whatsapp"
                        ><icons-whatsapp /></icons-base>                        
                    </button>
                </div>
                <div class="aside__btns">
                    <button class="blue">
                        Полный комплект
                    </button>
                    <button class="green">
                        Быстрая консультация
                    </button>
                </div>
            </div>
        </div>
        <div class="object__footer">
            <div class="object__footer-nav">
                <div class="object__footer-nav-item"
                    v-for="btn of footerNav" :key="btn.name"
                    :class="{active: activeFooterBlock === btn.name}"
                    @click="activeFooterBlock = btn.name"
                >
                <svg v-if="btn.name === 'details'" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M149.163008 685.952h89.286656c28.653568 0 51.881984 23.228416 51.881984 51.883008v89.285632c0 28.654592-23.228416 51.883008-51.881984 51.883008h-89.286656c-28.653568 0-51.883008-23.228416-51.883008-51.883008v-89.285632c0-28.654592 23.22944-51.883008 51.883008-51.883008m0-270.272512h89.286656c28.653568 0 51.881984 23.228416 51.881984 51.883008v89.286656c0 28.653568-23.228416 51.881984-51.881984 51.881984h-89.286656C120.50944 608.731136 97.28 585.50272 97.28 556.849152v-89.286656c0-28.654592 23.22944-51.883008 51.883008-51.883008m0-270.272512h89.286656c28.653568 0 51.881984 23.22944 51.881984 51.883008v89.286656c0 28.653568-23.228416 51.881984-51.881984 51.881984h-89.286656C120.50944 338.458624 97.28 315.230208 97.28 286.57664v-89.286656C97.28 168.636416 120.50944 145.408 149.163008 145.408" fill="#FFF200"></path><path d="M238.44864 685.952h-89.286656C120.508416 685.952 97.28 709.18144 97.28 737.835008v89.285632c0 28.654592 23.228416 51.883008 51.881984 51.883008h89.286656c28.653568 0 51.883008-23.228416 51.883008-51.883008v-89.285632c0-28.654592-23.22944-51.883008-51.883008-51.883008m0 40.96c6.023168 0 10.923008 4.89984 10.923008 10.923008v89.285632c0 6.023168-4.89984 10.923008-10.923008 10.923008h-89.286656c-6.02112 0-10.921984-4.89984-10.921984-10.923008v-89.285632c0-6.023168 4.89984-10.923008 10.921984-10.923008h89.286656m0-311.232512h-89.286656c-28.653568 0-51.881984 23.228416-51.881984 51.883008v89.286656c0 28.653568 23.228416 51.881984 51.881984 51.881984h89.286656c28.653568 0 51.883008-23.228416 51.883008-51.881984v-89.286656c0-28.654592-23.22944-51.883008-51.883008-51.883008m0 40.96c6.023168 0 10.923008 4.89984 10.923008 10.923008v89.286656c0 6.022144-4.89984 10.921984-10.923008 10.921984h-89.286656c-6.02112 0-10.921984-4.89984-10.921984-10.921984v-89.286656c0-6.023168 4.89984-10.923008 10.921984-10.923008h89.286656m0-311.232512h-89.286656C120.508416 145.408 97.28 168.636416 97.28 197.289984v89.286656c0 28.653568 23.228416 51.881984 51.881984 51.881984h89.286656c28.653568 0 51.883008-23.228416 51.883008-51.881984v-89.286656c0-28.653568-23.22944-51.883008-51.883008-51.883008m0 40.96c6.023168 0 10.923008 4.89984 10.923008 10.923008v89.286656c0 6.022144-4.89984 10.921984-10.923008 10.921984h-89.286656c-6.02112 0-10.921984-4.89984-10.921984-10.921984v-89.286656c0-6.023168 4.89984-10.923008 10.921984-10.923008h89.286656m669.718528 576.805888H348.17536c-10.543104 0-19.233792 8.64256-19.233792 19.304448 0 10.73664 8.61184 19.305472 19.233792 19.305472h559.991808c10.544128 0 19.234816-8.64256 19.234816-19.305472 0-10.735616-8.61184-19.304448-19.234816-19.304448m0-270.272512H348.17536c-10.543104 0-19.233792 8.643584-19.233792 19.305472 0 10.735616 8.61184 19.304448 19.233792 19.304448h559.991808c10.544128 0 19.234816-8.64256 19.234816-19.304448 0-10.73664-8.61184-19.305472-19.234816-19.305472m0-270.272512H348.17536c-10.543104 0-19.233792 8.643584-19.233792 19.305472 0 10.73664 8.61184 19.305472 19.233792 19.305472h559.991808c10.544128 0 19.234816-8.64256 19.234816-19.305472 0-10.73664-8.61184-19.305472-19.234816-19.305472" fill="#000000"></path></g></svg>
                <svg v-if="btn.name === 'description'"  xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28"><defs><symbol id="plus-more" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="white"/>
                        <path   d="M18.5 14.75C18.8846 14.75 19.2016 15.0395 19.245 15.4125L19.25 15.5V17.75H21.5C21.9142 17.75 22.25 18.0858 22.25 18.5C22.25 18.8846 21.9605 19.2016 21.5875 19.245L21.5 19.25H19.25V21.5C19.25 21.9142 18.9142 22.25 18.5 22.25C18.1154 22.25 17.7984 21.9605 17.755 21.5875L17.75 21.5V19.25H15.5C15.0858 19.25 14.75 18.9142 14.75 18.5C14.75 18.1154 15.0395 17.7984 15.4125 17.755L15.5 17.75H17.75V15.5C17.75 15.0858 18.0858 14.75 18.5 14.75Z" fill="currentColor"/>
                        <path   d="M19.25 8.75C19.6642 8.75 20 9.08579 20 9.5C20 9.88463 19.7105 10.2016 19.3375 10.245L19.25 10.25H6.5C6.08579 10.25 5.75 9.91421 5.75 9.5C5.75 9.11537 6.03953 8.79837 6.41253 8.75505L6.5 8.75H19.25Z" fill="currentColor"/>
                        <path   d="M14.75 13.25C15.1642 13.25 15.5 13.5858 15.5 14C15.5 14.3846 15.2105 14.7016 14.8375 14.745L14.75 14.75H6.5C6.08579 14.75 5.75 14.4142 5.75 14C5.75 13.6154 6.03953 13.2984 6.41253 13.255L6.5 13.25H14.75Z" fill="currentColor"/>
                        <path   d="M11 17.75C11.4142 17.75 11.75 18.0858 11.75 18.5C11.75 18.8846 11.4605 19.2016 11.0875 19.245L11 19.25H6.5C6.08579 19.25 5.75 18.9142 5.75 18.5C5.75 18.1154 6.03953 17.7984 6.41253 17.755L6.5 17.75H11Z" fill="currentColor"/>
                        </symbol></defs>
                        <use xlink:href="#plus-more" fill="#888888"/>
                </svg>
                <svg v-if="btn.name === 'invest'"   width="26" height="26" id="chart"><g fill="#fff" transform="translate(4.5 -1032.681)"><circle cx="8" cy="1044.362" r="13" fill="#1d67b1" transform="translate(.5 1.32)"/><path  d="M15.457 3.639a.527.527 0 0 0-.248.07l-1.945 1.123a.527.527 0 0 0-.264.455v9.186c0 .291.236.527.527.527h1.946a.527.527 0 0 0 .527-.527V4.164a.527.527 0 0 0-.543-.525Zm-4 2.31a.527.527 0 0 0-.248.07L9.264 7.144A.527.527 0 0 0 9 7.598v6.875c0 .291.236.527.527.527h1.946a.527.527 0 0 0 .527-.527V6.475a.527.527 0 0 0-.543-.526Zm-4 2.309a.527.527 0 0 0-.248.07L5.264 9.451A.527.527 0 0 0 5 9.906v4.567c0 .291.236.527.527.527h1.946A.527.527 0 0 0 8 14.473v-5.69a.527.527 0 0 0-.543-.525Zm-4 2.31a.526.526 0 0 0-.248.07l-1.945 1.124a.527.527 0 0 0-.264.455v2.256c0 .291.236.527.527.527h1.946A.527.527 0 0 0 4 14.473v-3.38a.527.527 0 0 0-.543-.525Z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(-.5 1036.362)" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"/></g></svg>
                <svg v-if="btn.name === 'map'"   viewBox="0 0 512 512" id="google-map"><path fill="#ccc" d="M451.809 239.542v217.654l-68.402-12.661-30.156-36.174-127.06-141.254 107.876-76.649c54.037 71.326 55.741 53.938 55.741 53.938s26.692-39.85 60.936-5.607l1.065.753z"/><path fill="#518ef8" d="m190.707 223.105 224.311 288.696a40.57 40.57 0 0 1-3.96.199H44.336l146.371-288.895z"/><path fill="#28b446" d="M334.068 190.458.447 471.248V101.389c0-22.512 18.254-40.752 40.752-40.752h243.289c-10.447 17.956 28.289 29.481 28.289 51.752 0 22.414 10.717 60.028 21.291 78.069z"/><path fill="#f2f2f2" d="M451.809 457.196v14.052c0 21.164-16.139 38.566-36.791 40.553L227.313 326.567l45.436-46.046 104.867 103.476 5.791 5.72 68.402 67.479z"/><path fill="#ffd837" d="m322.514 230.088-49.765 50.432-45.436 46.046L44.336 512h-3.137C18.701 512 .447 493.746.447 471.248L284.701 183.19c5.323 9.113 41.93-.114 49.368 7.267l13.67 17.572c6.671 7.113-30.959 14.508-25.225 22.059z"/><path fill="#fff" d="M106.904 227.775c-35.808 0-64.939-29.131-64.939-64.939s29.131-64.939 64.939-64.939c17.334 0 33.637 6.758 45.91 19.03l-15.057 15.054c-8.248-8.25-19.206-12.793-30.853-12.793-24.068 0-43.647 19.58-43.647 43.647s19.58 43.647 43.647 43.647c20.396 0 37.571-14.062 42.334-33.002h-42.334v-21.291h64.939v10.646c-.001 35.809-29.131 64.94-64.939 64.94z"/><path fill="#f14336" d="M284.488 60.638C305.566 24.386 344.842 0 389.809 0c67.238 0 121.744 54.506 121.744 121.744 0 16.863-3.435 32.916-9.624 47.522a121.976 121.976 0 0 1-26.245 38.764c-9.226 9.808-17.501 20.17-24.939 30.759-48.729 69.424-60.936 148.685-60.936 148.685s-13.257-86.06-67.295-157.386c-5.734-7.551-11.923-14.947-18.594-22.058h.014a120.9 120.9 0 0 1-19.233-24.84c-10.575-18.041-16.636-39.034-16.636-61.447 0-22.27 5.976-43.15 16.423-61.105z"/><path fill="#7e2d25" d="M389.81 56.947c35.781 0 64.781 29.017 64.781 64.798s-29 64.781-64.781 64.781-64.798-29-64.798-64.781 29.018-64.798 64.798-64.798z"/></svg>
                <svg v-if="btn.name === 'infrastructure'"  xmlns:xlink="http://www.w3.org/1999/xlink"  width="54" height="59" viewBox="0 0 54 59" fill="none">
                    <path    d="M30.733 44.6601C40.5501 42.8522 48 34.0607 48 23.8235C48 12.323 38.598 3 27 3C15.402 3 6 12.323 6 23.8235C6 34.0607 13.4499 42.8522 23.267 44.6601C25.2449 45.442 26.6441 47.3712 26.6441 49.6271C26.6441 49.7467 26.6401 49.8654 26.6324 49.9831H27.3676C27.3599 49.8654 27.3559 49.7467 27.3559 49.6271C27.3559 47.3712 28.7551 45.442 30.733 44.6601Z" fill="#D0103A"/>
                    <path  d="M37 23.916C37 29.3924 32.5228 34 27 34C21.4772 34 17 29.3924 17 23.916C17 18.4395 21.4772 14 27 14C32.5228 14 37 18.4395 37 23.916Z" fill="white"/>
                </svg>
                {{ btn.value }}
                </div>
            </div>
        </div>
        <div class="object__footer-block">
            <object-details
                v-if="activeFooterBlock === 'details'"
            />
            <object-description
                v-if="activeFooterBlock === 'description'"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.object {
    @media (max-width: 1023px) {
        
    }
    @media (max-width: 767px) {
        
    }
    @media (max-width: 539px) {
        
    }
    &__nav {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 5px;
        align-items: center;
        margin-bottom: 20px;
        @media (max-width: 1023px) {
            
        }
        @media (max-width: 767px) {
            
        }
        @media (max-width: 539px) {
            
        }
    }

    &__nav-item {
        display: flex;
        gap: 5px;
        &::after {
            content: ">";
            display: none;
        }
        &:nth-child(1), &:nth-child(2) {
            &::after {
                display: block;
            }
        }
        &:nth-child(3) {
            border: 2px solid rgb(231, 78, 183);
            border-radius: 8px;
            font-size: 15px;
            color: rgb(231, 78, 183);
            padding: 2px 4px;
        }
        &:nth-child(4) {
            border: 2px solid rgb(45, 121, 254);
            border-radius: 8px;
            font-size: 15px;
            color: rgb(45, 121, 254);
            padding: 2px 4px;
        }
    }

    &__name {
        font-weight: bold;
        font-size: 23px;
        margin-bottom: 20px;

    }

    &__body {
        display: flex;
        gap: 25px;
        @media (max-width: 1023px) {
            flex-wrap: wrap;
        }
        @media (max-width: 767px) {
            
        }
        @media (max-width: 539px) {
            
        }
    }

    &__content {
        width: 61%;
        @media (max-width: 1023px) {
            width: 100%;
        }
        @media (max-width: 767px) {
            
        }
        @media (max-width: 539px) {
            
        }
    }

    &__content-nav {
        display: flex;
        align-items: center;
        gap: 7px;
        margin-bottom: 8px;
    }

    &__content-nav-item {
        border-radius: 8px;
        font-size: 15px;
        padding: 2px 4px;
        cursor: pointer;
        &.active {
            border: 2px solid rgb(45, 121, 254);
            color: rgb(45, 121, 254);
        }
    }

    &__block {
    }
}

.aside {
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    box-shadow: 0px 0px 3px 0px rgba(38, 117, 255, 0.45);
    padding: 30px;
    flex: 1;
    height: fit-content;
    position: sticky;
    top: 20px;
    @media (max-width: 1023px) {
        padding: 20px;
        flex: 0 0 100%;
    }
    @media (max-width: 767px) {
        padding: 15px;
    }
    &__header {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
    }

    &__price {
        display: flex;
        gap: 5px;
        & span {
            min-width: 38px;
            min-height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 50%;
            color: rgb(45, 121, 254);
            font-size: 14px;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(45, 121, 254, 0.3);
            &.active {
                color: #fff;
                background: rgb(45, 121, 254);;
            }
        }
    }

    &__header-action {
        display: flex;
        align-items: center;
        gap: 5px;
        & svg {
            cursor: pointer;
        }
        & .compare {
            width: 30px;
            & path {
                stroke: var(--var-blue);
            }
        }
    }

    &__info {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    &__info-price {
        & span {
            font-size: 24px;
            line-height: 1.4;
            letter-spacing: 0em;
            color: rgb(1, 5, 12);
        }
        & p {
            font-size: 17px;
            line-height: 1.4;
            letter-spacing: 0em;
            opacity: 0.8;

        }
    }


    &__hashtags {
        display: flex;
        gap: 4px;
        padding-top: 8px;
        & span {
            color: #fff;
            background: rgb(82, 93, 125);
            height: fit-content;
            font-size: 10px;
            line-height: normal;
            padding: 2px 6px;
        }
    }

    &__header-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 15px;
        @media (max-width: 539px) {
            flex-direction: column;
        }
        & button {
            flex: 1;
            display: flex;
            gap: 5px;
            align-items: center;
            color: rgb(82, 156, 80);
            text-decoration: underline;
            font-size: 13px;
            & svg {
                width: 20px;
            }
            & .examination {
                & path {
                    fill: rgb(82, 156, 80);;
                }
            }
        }
    }
}
.aside {
    &__list {
        background-color: rgb(255, 255, 255);
        border-radius: 30px;
        box-shadow: 0px 0px 3px 0px rgba(38, 117, 255, 0.45);
        padding: 30px;
        margin-bottom: 35px;
        @media (max-width: 1023px) {
            padding: 20px;
            margin-bottom: 20px;
        }
        @media (max-width: 767px) {
            padding: 15px;
            margin-bottom: 15px;
        }
        & button {
            color: rgb(82, 156, 80);
            display: flex;
            gap: 7px;
            align-items: center;
            font-size: 14px;
            margin: 0 0 0 auto;
        }
    }

    &__list-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;
    }

    &__list-item {
        & span {
            font-size: 13px;
            line-height: 1.4;
            letter-spacing: 0em;
            color: rgb(45, 121, 254);
            display: block;
            border-bottom: 1px solid rgba(74, 87, 133, 0.18);
        }
        & p {
            font-size: 16px;
            line-height: 1.4;
            letter-spacing: 0em;
            font-weight: bold;
        }
    }
}

.aside {

    &__btns {
        & button {
            width: 100%;
            max-width: 190px;
            border-radius: 10px;
            padding: 22px 12px;
            font-size: 14px;
            display: block;
        }
        & .blue {
            background: linear-gradient(207deg, rgb(7, 80, 209),rgb(7, 80, 209));
            color: #fff;
            margin: 0 auto 15px;
        }
        & .green {
            color: rgb(90, 174, 87);
            border: 2px solid rgb(90, 174, 87);
            margin: 0 auto;
        }
    }
}

.object {

    &__text {
        border-radius: 10px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(202, 221, 255);
        padding: 10px;
        font-weight: bold;
        margin-top: 15px;
    }

    &__leads {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        border-radius: 10px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(202, 221, 255);
        margin-top: 15px;
        padding: 25px;
        @media (max-width: 1023px) {
            display: none;
        }
    }

    &__lead {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 0 0 calc(50% - 7.5px);
        & img {
            width: 37px;
            height: 37px;
        }
        & div {

        }
        & span {
            font-size: 13px;
            line-height: 1;
            letter-spacing: 0em;
            color: rgb(177, 176, 176);
        }
        & p {
            font-weight: 700;
            font-size: 14px;
            line-height: 1.6;
            letter-spacing: 0em;
            opacity: 0.85;
            &.blue {
                color: var(--var-blue);
            }
        }
    }
}

.object {

    &__big-btns {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding: 0 20px;
        @media (max-width: 1023px) {
            display: none;
        }
    }

    &__big-btn {
        color: #fff;
        padding: 15px;
        flex: 0 0 calc(50% - 5px);
        display: flex;
        flex-direction: column;
        & span {
            font-size: 20px;
        }
        & p {
            font-size: 12px;
            margin-bottom: 20px;
            flex: 1;
        }
        &.blue {
            background-color: rgb(52, 73, 113);
            border-radius: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(228, 227, 227);
            box-shadow: 0px 0px 1px 0px rgba(31, 104, 152, 0.1);
        }
        &.green {
            background-color: rgba(24, 62, 41, 0.77);
            border-radius: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(228, 227, 227);
            box-shadow: 0px 0px 1px 0px rgba(31, 104, 152, 0.1);
        }
        & button {
            background-color: rgba(255, 255, 255, 0.25);
            border-top-left-radius: 10px;
            border-radius: 10px;
            border: 1px solid rgb(203, 200, 200);
            padding: 17px 20px;
            font-size: 13px;
            color: rgb(255, 255, 255);
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.72);
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            margin: 0 0 0 auto;
            transition: .2s;
            &:hover {
                transform: scale(1.1);
            }
            & svg {
                width: 20px;
            }
        }
    }
}

.object {

    &__footer {
        overflow: auto;
    }

    &__footer-nav {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 30px;
        @media (max-width: 767px) {
            margin-top: 10px;
            margin-bottom: 15px;
        }
    }

    &__footer-nav-item {
        display: flex;
        gap: 10px;
        align-items: center;
        border-radius: 8px;
        padding: 5px ;
        border: 2px solid transparent;
        cursor: pointer;
        @media (max-width: 767px) {
            gap: 5px;
        }
        & svg {
            width: 30px;
            height: 30px;
            @media (max-width: 767px) {
                width: 20px;
                height: 20px;
            }
        }
        &.active {
            color: var(--var-blue);
            border: 2px solid rgb(45, 121, 254);
        }
    }
}


</style>