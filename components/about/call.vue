
<script setup>

</script>

<template>
    <div class="call container">
        <div class="call__content">
            <img class="call__bg" src="@/assets/images/call.webp">
            <div class="call__title">
                Позвоните или приезжайте в гости
            </div>
            <div class="call__steps">
                <div class="call__steps-item">
                    <span>
                        1
                    </span>
                    <p>
                        До приезда в выбранный офис, предлагаем произвести полную инвестиционную экспертизу по выбранной стране, городе, району!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.call {
    padding-top: 50px;
    @media (max-width: 1023px) {
        padding-top: 30px;
    }
    @media (max-width: 539px) {
        padding-top: 20px;
    }
    &__content {
        padding: 120px 100px 150px;
        position: relative;
        border-radius: 10px;
        @media (max-width: 1023px) {
            padding: 80px 50px 90px;
        }
        @media (max-width: 767px) {
            padding: 50px 30px 60px;
        }
        @media (max-width: 539px) {
            padding: 20px;
        }
        &::before {
            content: "";
            border-radius: 10px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: rgba(0, 0, 0, 0.4);
            z-index: 0;
            @media (max-width: 767px) {
                background: rgba(0, 0, 0, 0.4);
            }
        }
    }
    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        z-index: -1;
    }

    &__title {
        font-weight: bold;
        margin-bottom: 40px;
        color: #fff;
        z-index: 2;
        position: relative;
        font-size: 25px;
        @media (max-width: 1023px) {
            margin-bottom: 35px;
            font-size: 20px;
        }
        @media (max-width: 767px) {
            margin-bottom: 30px;
            font-size: 18px;
        }
        @media (max-width: 539px) {
            margin-bottom: 20px;
            font-size: 18px;
        }
    }

    &__steps {
        z-index: 2;
        position: relative;
        max-width: 600px;
    }

    &__steps-item {
        & span {
            min-width: 40px;
            min-height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid #1f41a5;
            font-weight: bold;
            color: #1f41a5;
            font-size: 25px;
        }
        display: flex;
        align-items: center;
        gap: 30px;
        & p {
            color: #fff;
            font-size: 15px;
        }
    }
}

</style>