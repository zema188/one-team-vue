<script setup>
    const namePopup = ref('catalogMap')



    const coordinates = ref([55, 33]);
    const getCoordinates = () => [55 + Math.random(), 33 + Math.random()];

</script>

<template>
    <popup
        :name="namePopup"
    >
        <YandexMap
            :coordinates="coordinates"
            :controls="controls"
        >
            <YandexClusterer :options="{ preset: 'islands#invertedRedClusterIcons' }">
            <YandexMarker
                v-for="i in 10"
                :key="`1-marker-${i}`"
                :coordinates="getCoordinates()"
                :marker-id="`1-marker-${i}`"
            />
            </YandexClusterer>
            <YandexClusterer :options="{ preset: 'islands#nightClusterIcons' }">
            <YandexMarker
                v-for="i in 10"
                :key="`2-marker-${i}`"
                :coordinates="getCoordinates()"
                :marker-id="`2-marker-${i}`"
            />
            </YandexClusterer>
        </YandexMap>
    </popup>
</template>

<style lang="scss" scoped>

.yandex-container {
  height: 400px;
}

.yandex-balloon {
  height: 200px;
  width: 200px;
}

</style>