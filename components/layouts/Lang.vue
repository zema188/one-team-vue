<script setup>
let langListIshidden = ref(false)
let activeLang = ref("RU")
const langs = ref([
    'EN', 'DE', 'TR',
])
const changeLang = (lang) => {
    const indexOfChangerLang = langs.value.indexOf(lang)
    langs.value[indexOfChangerLang] = activeLang.value
    activeLang.value = lang
    langListIshidden.value = false
}

// onMounted(() => {
//     document.addEventListener('click', function(e) {
//         const target = e.target
//         if(!target.closest('.header__lang')) {
//             langListIshidden.value = false
//         }
//     })
// })



</script>

<template>
    <div class="header__lang">
        <div class="header__lang-preview"
            @click="langListIshidden = !langListIshidden"
        >
            {{ activeLang }}
            <icons-base
                class="icon"
                :class="{active: langListIshidden}"
                width="20"
                height="20"
                icon-name="arrow"
            ><icons-arrow /></icons-base>
        </div>
        <div class="header__lang-list" v-if="langListIshidden">
            <div class="header__lang-item"
                v-for="lang of langs" :key="lang"
                @click="changeLang(lang)"
            >
                {{ lang }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {

    &__lang {
        width: 55px;
        position: relative;
        & .icon {
            transition: .2s;
            &.active {
                transform: rotate(180deg);
            }
        }
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
        color: #000;
    }
}

</style>