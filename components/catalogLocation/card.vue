<script setup>
const props = defineProps({
    info: {
        type: Object,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="card"
        :class="[{red: props.number === 1}, {purple: props.number === 2}, {'dark-blue': props.number === 3}]"
    >
        <icons-base
            class="icon-pdf"
            width="70"
            height="40"
            icon-name="pdf"
        ><icons-pdf /></icons-base>
        <div class="text">
            <p>
                Каталог {{ props.info.name }}
            </p>
            <span>
                Обновлен {{ props.info.date }}
            </span>
        </div>
        <layouts-button
            :class="[{red: props.number === 1}, {purple: props.number === 2}, {'dark-blue': props.number === 3}]"
            :styles="['btn_transparent']"
            :type="'button'"
        >
            Подробнее
        </layouts-button>
    </div>
</template>


<style lang="scss" scoped>
.card {
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    border-radius: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    background: rgb(41,42,44);
    color: #fff;
    padding: 40px 30px 50px;
    &.red {
        & .icon-pdf {
            & svg {
                fill: var(--var-red);
            }
        }
    }
    &.purple {
        & .icon-pdf {
            & svg {
                fill: var(--var-purple);
            }
        }
    }
    &.dark-blue {
        & .icon-pdf {
            & svg {
                fill: rgb(61, 61, 226);
            }
        }
    }
}
.text {
    & p {
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 0em;
    }
    & span {
        font-size: 12px;
        line-height: 1.6;
        letter-spacing: 0em;
    }
    margin-bottom: 20px;
}
.icon-pdf {
    margin: 0 0 30px auto;
    display: block;
}
button {
    margin: 0 0 0 auto;
}
</style>