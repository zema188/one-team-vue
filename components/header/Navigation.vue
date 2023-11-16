<script setup>

</script>

<template>
    <nav class="nav">
        <nuxt-link to="/">Главная</nuxt-link>
        <nuxt-link to="/questions">Вопросы и ответы</nuxt-link>
        <nuxt-link to="/company">Компания</nuxt-link>
        <nuxt-link to="/services">Услуги</nuxt-link>
        <nuxt-link to="/about">Где работаем?</nuxt-link>
        <nuxt-link to="/career">Карьера</nuxt-link>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    gap: 15px;
    & a {
        &.router-link-active {
            color: var(--var-blue);
        }
    }
}
</style>