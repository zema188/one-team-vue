<template>
    <div class="card">
        <img class="card__pic" src="@/assets/images/2.webp">
        <div class="card__header">
            <div class="card__hashtags">
                <div class="card__hashtag _blue">
                    Аланья
                </div>
                <div class="card__hashtag">
                    Каргыджак
                </div>
                <div class="card__hashtag">
                    4143 $/м²
                </div>
            </div>
            <div class="card__favorite">
                <icons-base
                    width="30"
                    height="30"
                    icon-name="love_red"
                ><icons-love_red /></icons-base>
            </div>
        </div>
        <div class="card__text">
            <p>
                Richmond Villas
            </p>
            <span>
                от 268 - до 377 м 
            </span>
        </div>
        <div class="card__footer">
            <p class="card__footer-price">
                от 1110439 $
            </p>
            <div class="card__footer-info">
                <span class="dark-blue">
                    № 291
                </span>
                <span class="green">
                    16
                </span>
            </div>
        </div>
    </div>
</template>
<script>
</script>
    
<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #fff;
    border-radius: 20px;
    padding: 20px;
    min-height: 320px;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.5;
        border-radius: 20px;
    }
    &__pic {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    &__header {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    &__hashtags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    &__hashtag {
        font-size: 12px;
        padding: 0px 7px;
        border-radius: 5px;
        border: 1px solid #fff;
        color: #fff;
        height: fit-content;
        &._blue {
            background: var(--var-blue);
            border: 1px solid var(--var-blue);
        }
    }

    &__favorite {
        cursor: pointer;
    }

    &__text {
        position: relative;
        z-index: 1;
        & p {
            font-size: 20px;
            line-height: 1.6;
            letter-spacing: 0em;
            color: rgb(255, 255, 255);
            margin-bottom: 15px;
            font-weight: 700;
        }
        & span {
            font-size: 14px;
            line-height: 1.6;
            letter-spacing: 0em;
        }
    }

    &__footer {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        gap: 15px;
        align-items: center;
    }

    &__footer-price {
    }

    &__footer-info {
        display: flex;
        gap: 10px;
        & span {
            color: #fff;
            font-size: 13px;
            padding: 0px 5px;
            height: fit-content;
            &.dark-blue {
                background: var(--var-blue-dark);
            }
            &.green {
                background: green;
            }
        }
    }
}

</style>