<script setup>

</script>

<template>
    <div class="videos">
        <div class="video">
            <img class="bg" src="@/assets/images/obj-1.webp">
            <div class="icon">
                <icons-base
                    width="25"
                    height="25"
                    icon-name="play"
                ><icons-play /></icons-base>
            </div>
        </div>
        <div class="video">
            <img class="bg" src="@/assets/images/obj-2.webp">
            <div class="icon">
                <icons-base
                    width="25"
                    height="25"
                    icon-name="play"
                ><icons-play /></icons-base>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.videos {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.video {
    flex: 0 0 calc(50% - 5px);
    position: relative;
}
.bg {
    border-radius: 20px;
    width: 100%;
}
.icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 100%;
    @media (max-width: 1023px) {
        width: 60px;
        height: 60px;
    }
    @media (max-width: 767px) {
        width: 50px;
        height: 50px;
    }
    & svg {
        @media (max-width: 767px) {
            width: 20px;
            height: 20px;
        }
    }
}

</style>