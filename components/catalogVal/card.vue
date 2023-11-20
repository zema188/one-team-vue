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
    <div class="card">
        <div class="bg">
            <img src="@/assets/images/price-block-bg-1.webp" v-if="number === 0" >
            <img src="@/assets/images/price-block-bg-2.webp" v-if="number === 1" >
            <img src="@/assets/images/price-block-bg-3.webp" v-if="number === 2" >
        </div>
        <div class="card__content">
            <div class="card__header">
                <div class="line">
                    <img src="@/assets/images/line-1.png" v-if="number === 0">
                    <img src="@/assets/images/line-2.png" v-if="number === 1">
                    <img src="@/assets/images/line-3.png" v-if="number === 2">
                </div>
                <div class="file">
                    <icons-base
                        v-if="number === 0"
                        width="70"
                        height="40"
                        icon-name="pdf"
                    ><icons-pdf /></icons-base>
                    <icons-base
                        v-if="number === 1"
                        width="70"
                        height="40"
                        icon-name="contribution"
                    ><icons-contribution /></icons-base>
                    <icons-base
                        v-if="number === 2"
                        width="70"
                        height="40"
                        icon-name="automation"
                    ><icons-automation /></icons-base>
                </div>
            </div>
            <p class="price">
                {{ props.info.price }}
            </p>
            <layouts-button
                :styles="['btn_transparent']"
                :type="'button'"
            >
                Подробнее
            </layouts-button>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.bg {
    & img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
        opacity: 0.4;
        border-radius: 20px;
    }
}
.card {
    border-radius: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    padding: 40px 30px 50px;
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background: #262626;
        border-radius: 20px;
        z-index: -1;
    }

&__header {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 20px;
}
&__content {
    z-index: 1;
    position: relative;
}
}
.line {
}
.file {
}
.icon-pdf {
}
.price {
    font-weight: bold;
    margin-bottom: 20px;
}
button {
    margin: 0 0 0 auto;
}

</style>