<script setup>
const props = defineProps({
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
})


const coordinates = [props.lat, props.long]
const controls =
    [
        'fullscreenControl',
        'searchControl',
        'zoomControl',
    ]
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
const behaviors = ['drag', 'dblClickZoom',];
</script>
<template>
    <YandexMap
        :coordinates="coordinates"
        :detailed-controls="detailedControls"
        :controls="controls"
        :behaviors="behaviors"
        :search-control="searchConrol"
    >
        <YandexMarker :coordinates="coordinates" :marker-id="1">
        </YandexMarker>
    </YandexMap>
</template>



<style>
.yandex-container {
height: 400px;
}
</style>