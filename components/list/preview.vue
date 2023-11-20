<script setup>

</script>

<template>
    <div class="preview">
        <div class="preview__content container">
            <img class="bg" src="@/assets/images/preview-catalog.webp">
            <div class="preview__text">
                <p class="preview__text-title">
                    Каталог недвижимости
                </p>
                <div class="preview__text-header">
                    <p>
                        Турции
                    </p>
                    <icons-base
                        class="icon"
                        width="40"
                        height="40"
                        iconColor="blue"
                        icon-name="pdf"
                    ><icons-pdf-2 /></icons-base>
                </div>
                <p class="subtitle">
                    Загружен 20.11.2023 .pdf
                </p>
                <ul>
                    <li>
                        • содержание
                    </li>
                    <li>
                        • важное описание
                    </li>
                    <li>
                        • отсортированы по цене за м2
                    </li>
                    <li>
                        • сравнение и экспертиза
                    </li>
                </ul>
            </div>
            <div class="btns">
                <layouts-button
                    class="header__bottom-get-catalog"
                    :styles="['btn_blue border-white']"
                    :type="'button'"
                >
                    Получить каталог
                    <icons-base
                        class="icon"
                        width="15"
                        height="15"
                        icon-name="earth"
                        iconColor="#fff"
                    ><icons-earth /></icons-base>
                </layouts-button>
                <layouts-button
                    class="header__bottom-get-catalog"
                    :styles="['btn_black']"
                    :type="'button'"
                >
                    Получить консультацию
                    <icons-base
                        class="icon"
                        width="15"
                        height="15"
                        iconColor="#fff"
                        icon-name="earth"
                    ><icons-earth /></icons-base>
                </layouts-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.preview {

&__content {
    position: relative;
    border-radius: 20px;
    display: flex;
    padding: 30px 164px;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
}

&__text {
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(138, 188, 255);
    padding: 20px 30px;
    z-index: 1;
    flex: 1;
    max-width: 479px;
}
&__text-title {
    font-size: 30px;
    line-height: 1.6;
    letter-spacing: 0em;
    font-weight: 700;
}
&__text-header {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    & p {
        font-size: 30px;
        line-height: 1.6;
        letter-spacing: 0em;
        font-weight: 700;
    }
}
}
.container {
}
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    border-radius: 20px;
}

.icon {
}
.subtitle {
    font-size: 12px;
    line-height: 1.6;
    letter-spacing: 0em;
    margin-bottom: 20px;
}
.btns {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 300px;
    & button {
        width: 100%;
        padding: 12px 14px;
        gap: 5px;
    }
}
.header {

}

ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 2px;
    & li {
        flex: 0 0 calc(50% - 20px);
        font-size: 12px;
        line-height: 1.6;
        letter-spacing: 0em;
    }
}

</style>