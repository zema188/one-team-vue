<script setup>
const props = defineProps({
    object: {
        type: Object,
        required: true,
    },
})

const buildLinkCountry = computed(() => {
    if(!props.object.country) return ''
    const link = `/${props.object.country.slug}/object-${props.object.id}`;
    return link;
})


</script>

<template>
    <nuxt-link :to="buildLinkCountry" class="list__item">
        <img class="bg"
            :src="`https://one-team.pro/${props.object.photos[0].preview}`">
        <div class="list__item-header">
            <div class="list__item-hashtag">
                <span class="hashtag">
                    До моря 1500 м
                </span>
                <p class="hashtag">
                    {{ props.object.city.name }}
                </p>
            </div>
            <icons-base
                class="love"
                width="30"
                height="30"
                icon-name="love_red"
            ><icons-love-red /></icons-base>
        </div>
        <div class="list__item-text">
            <p class="name">
                {{ props.object.name }}
            </p>
            <p class="square">
                от 50 - до 102 м
            </p>
        </div>
        <div class="list__item-footer">
            <p class="list__item-price valute">
                от {{ props.object.min_price }} € 
            </p>
            <p class="list__item-footer-hashtags">
                <span class="blue hashtag">
                    № 99
                </span>
                <span class="pink hashtag">
                    11
                </span>
            </p>
        </div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    &__item {
        flex: 0 0 calc(50% - 10px);
        background-position: center center;
        background-size: cover;
        background-repeat: repeat;
        border-radius: 15px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(211, 211, 211);
        box-shadow: 0px 0px 2px 0px rgba(28, 111, 255, 0.5);
        color: #fff;
        position: relative;
        padding: 20px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 899px) {
            flex: 0 0 100%;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            border-radius: 15px;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            transition: 0.2s;
            z-index: 1;
        }
        & .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            object-fit: cover;
            border-radius: 15px;
            z-index: 0;
        }
    }

    &__item-header {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    &__item-hashtag {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        & .hashtag {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0px 5px;
            color: #fff;
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

    &__item-text {
        z-index: 1;
        position: relative;
        & .name {
            font-weight: 700;
            font-size: 23px;
            margin-bottom: 7px;
        }
    }

    &__item-footer {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__item-price {
        font-weight: bold;
        font-size: 20px;
    }

    &__item-footer-hashtags {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        & .hashtag {
            font-size: 12px;
            color: rgb(255, 255, 255);
            padding: 0 9px;
        }
        & .blue {
            background-color: rgb(40, 77, 196);
        }
        & .pink {
            background-color: rgba(244, 75, 249, 0.7);

        }   
    }
}

.love {
    cursor: pointer;
}
</style>