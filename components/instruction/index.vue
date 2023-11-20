<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    filterStyle: {
        type: Object,
        required: false,
    }
})
const emit = defineEmits('changeFilter')

</script>

<template>
    <div class="catalog container">
        <layouts-block-header>
            <template v-slot:title>
                {{ title }}
            </template>
            <template v-slot:subtitle>
                {{ subtitle }}
            </template>
        </layouts-block-header>
        <layouts-filter-list
            :list="props.data.filterList"
            :style="props.filterStyle"
            @changeFilter="(btn) => emit('changeFilter', btn)"
        />
        <instruction-swiper
            :name="'Аланья'"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>