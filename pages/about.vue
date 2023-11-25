<script setup>

</script>

<template>
    <about-services/>
    <about-advantages/>
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
                v-for="(country, index) of [1,2,3,4,5,6,7,8]" :key="index"
            />
        </div>
    </div>
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
                v-for="(country, index) of [1,2,3,4,5,6,7,8]" :key="index"
                class="bigger"
            />
        </div>
    </div>
    <about-call/>
    <about-employees/>
    <about-expert/>
    <about-updating/>
    <why/>
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