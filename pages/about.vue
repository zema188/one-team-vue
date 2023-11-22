<script setup>

</script>

<template>
    <about-services/>
    <about-advantages/>
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
        <div class="about__countrys-lits">
            <country-card
                v-for="(country, index) of [1,2,3,4,5,6,7,8]" :key="index"
            />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.about {

&__countrys {
}

&__title {
    font-weight: bold;
    font-size: 30px;
    & span {
        color: var(--var-blue);
    }
}

&__countrys-lits {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 30px;
}
}

</style>