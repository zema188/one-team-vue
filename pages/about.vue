<script setup>
const countrysList_1 = ref([
    {
        name: 'Турция',
        image: 'https://i.1.creatium.io/8e/7d/bb/d09809e629ae350088e97ef487c8e4772e/373x544q8/ulfcs11ovt39h3oh6tic.jpg',
        vnj: 'Оформление: за 1 месяц',
        citizenship: 'Через 5 лет для семьи',
        flags: [
            'https://i.1.creatium.io/disk2/03/a4/b2/c3a3f0ab1aad455fdea5b54578b4e42c4e/27x27q8/flag_of_turkey_192x192_5921710.png'
        ]
    },
    {
        name: 'КИПР',
        image: 'https://i.1.creatium.io/disk2/c1/3f/38/861be986c37d51738a7d0453604e40561a/558x372q8/ullgvk7xntxw3wlf8y9.jpg',
        vnj: 'Оформление: за 6 месяцев',
        citizenship: 'Через 3 года для семьи',
    },
])
const countrysList_2 = ref([
    {
        name: 'Турция',
        image: 'https://i.1.creatium.io/disk2/e5/aa/25/879ce49a804c7733f0c3714fd4d4f69af0/ulmrpdzq3r2elrqjyz4.jpg',
        vnj: 'Оформление: за 1 месяц',
        citizenship: 'Через 5 лет для семьи',
        flags: [
            'https://i.1.creatium.io/disk2/ee/23/5b/59aa8b41119fa8cb58277e73cf0781218e/27x27q8/flags_192x192_6051527.png',
            'https://i.1.creatium.io/disk2/03/a4/b2/c3a3f0ab1aad455fdea5b54578b4e42c4e/27x27q8/flag_of_turkey_192x192_5921710.png'
        ]
    },
    {
        name: 'МАЛЬТА',
        image: 'https://i.1.creatium.io/disk2/29/45/76/0ee4632911a0c2e11821eb81346adb1ddf/ulmrpagihwi9sxs6i98.jpg',
        vnj: 'Оформление: за 6 месяцев',
        citizenship: 'Через 3 года для семьи',
        flags: [
            'https://i.1.creatium.io/disk2/ee/23/5b/59aa8b41119fa8cb58277e73cf0781218e/27x27q8/flags_192x192_6051527.png',
            'https://i.1.creatium.io/disk2/c4/14/9d/77d5d5e5074c8fefd93920b04a08159f96/27x27q8/flag_of_vanuatu_192x192_5921714.png'
        ]
    },
])
</script>

<template>
    <about-services/>
    <about-advantages/>
    <about-call/>
    <about-employees/>
    <about-expert/>
    <about-updating/>
    <div class="about__countrys container">
        <p class="about__title">
            <span>
                ВНЖ
            </span>за инвестиции в недвижимость
        </p>
        <p>
            Покупка недвижимости может дать инвестору право на получение вида на жительство.
        </p>
        <p>
            ВНЖ выдается на несколько лет, по некоторым программам доступно продление ВНЖ
            без ограничения общего срока или подача заявки на гражданство.
        </p>
        <div class="about__countrys-list">
            <country-card
                v-for="(card, index) of countrysList_2" :key="index"
                :data="card"
                class="bigger"
            />
        </div>
    </div>
    <why/>
    <div class="about__countrys container">
        <p class="about__title">
            Мир без границ: помогаем получить 
            <span>
                второй паспорт
            </span>
        </p>
        <p>
            Мы предлагаем актуальные программы получения гражданства для инвесторов,
        </p>
        <p>
            заинтересованных в проживании за рубежом и
        </p>
        <p>
            ведении международного бизнеса.
        </p>
        <div class="about__countrys-list">
            <country-card
                v-for="(card, index) of countrysList_1" :key="index"
                :data="card"
            />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.about {

&__countrys {
    padding-top: 80px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
}

&__title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
    @media (max-width: 1023px) {
        font-size: 25px;
    }
    @media (max-width: 539px) {
        font-size: 20px;
    }
    & span {
        color: var(--var-blue);
    }
}

&__countrys-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 20px;
    @media (max-width: 767px) {
        gap: 10px;
    }
}
}

</style>