<script setup>
import { usePopup } from '@/stores/popup'

const props = defineProps({
    name: String,
})

const emit = defineEmits(['send'])

const popupStore = usePopup()
</script>

<template>
    <div class="popup modal"
        :class="[{active: popupStore.popups.has(props.name)},props.name]"
        @click.stop.self="popupStore.enableScroll(props.name)"
    >
        <div class="popup__body">
            <div class="popup__content">
                <div class="content">
                    test
                    <slot>

                    </slot>
                </div>
            </div>	
        </div>
    </div>
</template>

<style lang="scss" >
.popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    display: none;
    z-index: 10;
    &.active {
      display: block;
    }
    &::before {
        content: "";
        background: #000000;
        opacity: 0.7;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 104;
    }
}
.popup__content {
    position: relative;
    background: var(--var-popup-bg);
    border-radius: 20px;
    padding: 30px;
    width: 95%;
    max-width: 715px;
    z-index: 105;
    @media (max-width: 539px) {
        padding: 35px 15px 38px;
    }
}
.popup__body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
    min-height: 100%;
}

.popup {

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 45px;
        @media (max-width: 539px) {
            margin-bottom: 15px;
        }
    }

    &__content-title {
    }

    &__header-line {
        flex: 1;
        @media (max-width: 539px) {
            display: none;
        }
    }

    &__list {
        margin-bottom: 30px;
    }

    &__close {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    &__btns {
        display: flex;
        justify-content: center;
        column-gap: 30px;
        row-gap: 10px;
        margin-top: 50px;
        flex-wrap: wrap;
        @media (max-width: 539px) {
            column-gap: 15px;
        }
        & .btn {
            @media (max-width: 539px) {
                white-space: nowrap;
            }
        }
    }

    &__agree {
        display: flex;
        align-items: flex-start;

    }
}

.field {
    width: 100%;
    &:not(:last-child) {
        margin-bottom: 30px;
        @media (max-width: 539px) {
            margin-bottom: 20px;
        }
    }
    & p {
        color: var(--gray-800, #1F2A37);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        @media (max-width: 539px) {
            font-size: 14px;
        }
    }

}

.input-w {
    border-radius: 12px;
    border: 1px solid var(--gray-300, #D1D5DB);
    background: var(--gray-50, #F9FAFB);
    & input, textarea {
        color: var(--gray-900, #111928);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 167%; /* 26.72px */
        border-radius: 12px;
        width: 100%;
        background: rgba(255,255,255,0);
        padding: 10px 30px;
        @media (max-width: 539px) {
            padding: 10px 15px;
        }
    }
    & textarea {
        height: 180px;
        resize: none;
    }
}
</style>