
<script setup>

</script>

<template>
    <div class="expert container">
        <div class="expert__human">
            <svg class="expert__human-bg" version="1.1" preserveAspectRatio="none" viewBox="100 100 40 80" style="padding: 0px;"><defs><linearGradient id="gradient-uknbw2pglczq39u2yp7" x1="0%" y1="0%" x2="0%" y2="100%"><stop stop-color="rgb(48, 100, 255)" offset="0%"></stop><stop stop-color="rgb(228, 235, 255)" offset="100%"></stop></linearGradient></defs><path d="M140 100C134.747 100 129.546 101.035 124.693 103.045C119.84 105.055 115.43 108.001 111.716 111.716C108.001 115.43 105.055 119.84 103.045 124.693C101.035 129.546 100 134.747 100 140C100 145.253 101.035 150.454 103.045 155.307C105.055 160.16 108.001 164.57 111.716 168.284C115.43 171.999 119.84 174.945 124.693 176.955C129.546 178.965 134.747 180 140 180V100Z" fill-rule="evenodd" fill="url(#gradient-uknbw2pglczq39u2yp7)"></path></svg>
            <div class="expert__human-pic">
                <img src="@/assets/images/asd.webp">
            </div>
        </div>
        <div class="expert__content">
            <div class="expert__content-title">
                ВЕДУЩИЙ ЭКСПЕРТ ПО СТРАНАМ
            </div>
            <p class="expert__content-name">
                Алина Егорова
            </p>
            <p class="expert__content-info">
                Обладает удивительным интересом одновременно к техническим и гуманитарным наукам. Убеждена, что сфера недвижимость как раз состоит из баланса этих направлений.
            </p>
            <div class="expert__content-lead">
                <icons-base
                    width="30"
                    height="30"
                    icon-name="cheack"
                ><icons-cheack /></icons-base>
                <p>
                    Разносторонний опыт продвижения интернет-проектов
                </p>
            </div>
            <div class="expert__content-lead">
                <icons-base
                    width="30"
                    height="30"
                    icon-name="cheack"
                ><icons-cheack /></icons-base>
                <p>
                    Сотрудничала как маркетолог с крупными корпорациями
                </p>
            </div>
            <div class="expert__content-lead">
                <icons-base
                    width="30"
                    height="30"
                    icon-name="cheack"
                ><icons-cheack /></icons-base>
                <p>
                    Опыт в Digital более 10 лет
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.expert {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding-top: 50px;
    &__human {
        position: relative;
        padding-top: 120px;
        flex: 0 0 580px;
    }

    &__human-bg {
        position: absolute;
        left: 147px;
        width: 289px;
        top: 28px;
        transform: rotate(90deg);
    }

    &__human-pic {
        z-index: 1;
        position: relative;
        transform: translate(128px, 0px);
        display: flex;
        align-items: flex-end;
        & img {
            width: 508px;
        }
    }

    &__content {
    }

    &__content-title {
        font-size: 11px;
        line-height: 1;
        letter-spacing: 0.06666666666666667em;
        padding: 12px 15px;
        background: var(--var-blue);
        width: fit-content;
        border-radius: 30px;
        color: #fff;
    }

    &__content-name {
        font-size: 40px;
        line-height: 1.3;
        letter-spacing: 0em;
        opacity: 1;
        margin-bottom: 30px;
        font-weight: 500;
    }

    &__content-info {
        font-size: 15px;
        line-height: 1.6;
        letter-spacing: 0em;
        opacity: 0.65;
        margin-bottom: 30px;
    }

    &__content-lead {
        display: flex;
        align-items: center;
        gap: 10px;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}
.container {
}

</style>