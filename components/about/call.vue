
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
    &__content {
        padding: 120px 100px 150px;
        position: relative;
        border-radius: 10px;
        &::before {
            content: "";
            border-radius: 10px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: rgba(0, 0, 0, 0.2);
            z-index: 0;
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