<script setup>

</script>

<template>
    <div class="item">
        <div class="item__top">
            <img class="bg" src="@/assets/images/cat.webp">
            <div class="item__top-header">
                <div class="item__top-hashtag">
                    <span class="hashtag">
                        До моря 1500 м
                    </span>
                    <p class="hashtag">
                        Аланья
                    </p>
                </div>
                <div class="item__top-rating">
                    Рейтинг 150-9
                </div>
            </div>
        </div>
        <div class="item__action">
            <div class="item__action-header">
                <p class="name">
                    Dream Homes Avsall...
                </p>
                <icons-base
                    class="love"
                    width="30"
                    height="30"
                    icon-name="love_red"
                ><icons-love-red /></icons-base>
            </div>
            <p class="item__action-footer">
                <span class="item__action-price">
                    от 106802 $
                </span>
                <span class="item__action-square">
                    от 70 - до 134 м
                </span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    box-shadow: 0px 0px 2px 0px rgba(28, 111, 255, 0.5);
    padding: 10px;
    flex: 0 0 calc(33.333% - 26.7px);
    @media (max-width: 899px) {
        flex: 0 0 calc(50% - 20px);
    }
    @media (max-width: 767px) {
        flex: 0 0 calc(50% - 10px);
    }
    @media (max-width: 599px) {
        flex: 0 0 100%;
    }
    &__top {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 30px;
        position: relative;
        min-height: 200px;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 30px;
            background: rgba(0,0,0, 0.4);
            z-index: 1;
        }
        & .bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 30px;
            object-fit: cover;
            z-index: 0;
        }
    }

    &__top-header {
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
    }

    &__top-hashtag {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
        justify-content: flex-end;
        & .hashtag {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0px 5px;
            color: #fff;
            border-radius: 5px;
        }
        & span {
            background-color: rgb(76, 131, 255);
            font-size: 12px;
            color: rgb(255, 255, 255);
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.11);
        }

        & p {
            background-color: rgba(22, 102, 241, 0.55);
            font-size: 12px;
            color: rgb(255, 255, 255);
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.11);
        }
    }

    &__top-rating {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0px 5px;
        font-size: 12px;
        color: rgb(255, 255, 255);
        background: rgba(244, 75, 249, 0.7);
        border-radius: 5px;
    }

    &__action {
        padding: 20px;
    }

    &__action-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        & .name {
            font-size: 23px;
            font-weight: 500;
        }
    }

    &__action-footer {
        display: flex;
        justify-content: space-between;
    }

    &__action-price {
    }

    &__action-square {
    }
}


</style>