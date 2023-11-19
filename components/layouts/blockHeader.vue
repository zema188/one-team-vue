<script setup>

</script>

<template>
    <div class="header">
        <p class="catalog__title">
            <slot name="title">

            </slot>
        </p>
        <p class="catalog__subtitle">
            <slot name="subtitle">
                
            </slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.header {
    padding-top: 40px;
}
.catalog {
    padding-top: 40px;
    &__title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    &__subtitle {
        font-size: 13px;
        color: var(--var-blue);
        margin-bottom: 20px;
    }
}
</style>