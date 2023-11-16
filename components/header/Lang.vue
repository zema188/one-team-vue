<script setup>
let langListIshidden = ref(false)
</script>

<template>
    <div class="header__lang">
        <div class="header__lang-preview"
            @click="langListIshidden = !langListIshidden"
        >
            RU
            <icons-base
                class="header__phone"
                width="20"
                height="20"
                icon-name="arrow"
            ><icons-arrow /></icons-base>
        </div>
        <div class="header__lang-list" v-if="langListIshidden">
            <div class="header__lang-item">
                EN
            </div>
            <div class="header__lang-item">
                DE
            </div>
            <div class="header__lang-item">
                TR
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {

    &__lang {
        position: relative;
    }

    &__lang-preview {
        display: flex;
        align-items: center;
        gap: 2px;
        border: 2px solid var(--var-blue);
        border-radius: 12px;
        padding: 5px 5px;
        cursor: pointer;
    }

    &__lang-list {
        position: absolute;
        top: calc(100% - 2px);
        left: 0;
        border: 2px solid var(--var-blue);
        border-radius: 12px;
        background: #fff;
        width: 100%;
    }

    &__lang-item {
        text-align: center;
        cursor: pointer;
    }
}

</style>