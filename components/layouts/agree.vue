<template>
    <p>
        Нажимая на кнопку «Отправить» вы даете согласие на 
        <NuxtLink to="/agree">
            обработку персональных данных
        </NuxtLink>
    </p>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p {
    font-size: 14px;
    color: #fff;
    & a {
        text-decoration: underline;
        color: #fff;
        font-size: 14px;
    }
}
</style>