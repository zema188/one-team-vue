<script setup>
const props = defineProps({
    description: {
        type: String,
        required: true
    },
    objectName: {
        type: String,
        required: true
    },
    photos: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="details">
        <div class="details__content">
            <div class="details__content-text-blocks">
                <div class="details__text">
                    <p class="details__text-title">
                        Описание {{ props.objectName }}
                    </p>
                    {{ props.description }}
                </div>
            </div>
            <div class="details__photos" v-if="props.photos">
                <div class="details__pic"
                    v-for="photo of photos.slice(0,2)" :key="photo.id"
                >
                    <img :src="`https://one-team.pro/${photo.preview}`"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.details {
    &__content {
        display: flex;
        gap: 20px;
    }

    &__content-text-blocks {
        flex: 0 0 59%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: 899px) {
            flex: 0 0 100%;
        }
    }

    &__text {
        background-image: linear-gradient(to bottom, rgba(243, 244, 249, 0.9) 0%, rgba(243, 244, 249, 0.8) 100%);
        border-radius: 20px;
        height: 574px;
        overflow: auto;
        padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE и Edge */
        scrollbar-width: none;  /* Firefox */
    }

    &__text-title {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 32px;
        line-height: 1;
        letter-spacing: 0.03em;
        @media (max-width: 899px) {
            font-size: 28px;
        }
        @media (max-width: 767px) {
            font-size: 25px;
        }
        @media (max-width: 539px) {
            font-size: 23px;
        }
    }

    &__text-footer {
        & p {
            font-size: 20px;
            color: rgb(45, 121, 254);
            margin-top: 20px;
        }
        & span {
            color: rgb(45, 121, 254);
            margin-top: 20px;
        }
        & button {
            margin-top: 20px;
            background-color: rgba(51, 99, 198, 0.6);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-style: solid;
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-color: rgb(138, 183, 247);
            box-shadow: 0px 0px 15px 0px rgba(45, 121, 254, 0.72);
            width: 65px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            & svg {
                width: 30px;
                height: 30px;
            }
        }
    }

    &__photos {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: 899px) {
            display: none;
        }
    }

    &__pic {
        height: 276px;
        border-radius: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(210, 210, 210);
        & img {
            height: 100%;
            width: 100%;
            border-radius: 20px;
            object-fit: cover;
        }
    }
}


</style>